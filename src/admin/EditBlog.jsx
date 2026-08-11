"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import axios from "axios";

import "react-quill-new/dist/quill.snow.css";

/* =====================================================
   DYNAMIC QUILL IMPORT
===================================================== */

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[300px] flex items-center justify-center border rounded-lg bg-gray-50">
        Loading editor...
      </div>
    ),
  }
);

/* =====================================================
   CONFIG
===================================================== */

const API_BASE_URL = "https://everence.io/api";

const INITIAL_FORM = {
  title: "",
  metaTitle: "",
  description: "",
  keywords: "",
  schema: "",
  content: "",
  image: null,
  imagePreview: null,
};

/* =====================================================
   EDITOR STYLES
===================================================== */

const editorStyle = `
  .blog-editor .ql-container {
    min-height: 300px;
    font-size: 16px;
  }

  .blog-editor .ql-editor {
    min-height: 300px;
    line-height: 1.7;
  }

  .blog-editor .ql-editor img {
    max-width: 100%;
    height: auto;
  }

  .blog-editor .ql-toolbar {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .blog-editor .ql-container {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

/* =====================================================
   COMPONENT
===================================================== */

export default function EditBlog({ id }) {
  const router = useRouter();

  const quillRef = useRef(null);

  const [form, setForm] = useState(INITIAL_FORM);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [uploadingImage, setUploadingImage] =
    useState(false);

  /* =====================================================
     UPDATE FORM FIELD
  ===================================================== */

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }, []);

  /* =====================================================
     FETCH BLOG
  ===================================================== */

  useEffect(() => {
    if (!id) {
      setFetching(false);
      return;
    }

    let cancelled = false;

    const fetchBlog = async () => {
      setFetching(true);

      try {
        const response = await axios.get(
          `${API_BASE_URL}/get-blog-by-id.php`,
          {
            params: {
              id,
            },
          }
        );

        if (cancelled) return;

        const blog = response.data;

        if (!blog) {
          throw new Error(
            "Blog data was not returned."
          );
        }

        if (blog.success === false) {
          throw new Error(
            blog.error || "Blog not found."
          );
        }

        setForm({
          title: blog.title || "",

          metaTitle:
            blog.meta_title ||
            blog.metaTitle ||
            "",

          description:
            blog.description || "",

          keywords:
            blog.keywords || "",

          schema:
            blog.schema_json ||
            blog.schema ||
            "",

          content:
            blog.content || "",

          image: null,

          imagePreview: blog.image
            ? `${API_BASE_URL}/uploads/${blog.image}`
            : null,
        });
      } catch (error) {
        console.error(
          "Fetch blog error:",
          error
        );

        alert(
          error?.response?.data?.error ||
            error.message ||
            "Failed to load blog."
        );
      } finally {
        if (!cancelled) {
          setFetching(false);
        }
      }
    };

    fetchBlog();

    return () => {
      cancelled = true;
    };
  }, [id]);

  /* =====================================================
     UPLOAD EDITOR IMAGE
  ===================================================== */

  const uploadEditorImage = useCallback(
    async (file) => {
      if (!file) {
        throw new Error(
          "No image selected."
        );
      }

      if (!file.type.startsWith("image/")) {
        throw new Error(
          "Please select a valid image."
        );
      }

      const data = new FormData();

      data.append(
        "image",
        file
      );

      const response = await axios.post(
        `${API_BASE_URL}/upload-image.php`,
        data
      );

      if (!response.data?.url) {
        throw new Error(
          response.data?.error ||
            "Image upload failed."
        );
      }

      return response.data.url;
    },
    []
  );

  /* =====================================================
     QUILL TOOLBAR IMAGE HANDLER
  ===================================================== */

  const imageHandler = useCallback(() => {
    const input =
      document.createElement("input");

    input.type = "file";

    input.accept =
      "image/jpeg,image/png,image/webp,image/gif";

    input.click();

    input.onchange = async () => {
      const file =
        input.files?.[0];

      if (!file) return;

      setUploadingImage(true);

      try {
        const imageUrl =
          await uploadEditorImage(file);

        const editor =
          quillRef.current?.getEditor();

        if (!editor) {
          throw new Error(
            "Editor is not ready."
          );
        }

        const range =
          editor.getSelection(true);

        const index =
          range?.index ??
          editor.getLength();

        editor.insertEmbed(
          index,
          "image",
          imageUrl,
          "user"
        );

        editor.setSelection(
          index + 1,
          0
        );
      } catch (error) {
        console.error(
          "Editor image upload error:",
          error
        );

        alert(
          error?.response?.data?.error ||
            error.message ||
            "Image upload failed."
        );
      } finally {
        setUploadingImage(false);
      }
    };
  }, [uploadEditorImage]);

  /* =====================================================
     QUILL MODULES
  ===================================================== */

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            {
              header: [
                1,
                2,
                3,
                4,
                false,
              ],
            },
          ],

          [
            "bold",
            "italic",
            "underline",
            "strike",
          ],

          [
            {
              color: [],
            },
            {
              background: [],
            },
          ],

          [
            {
              list: "ordered",
            },
            {
              list: "bullet",
            },
          ],

          [
            {
              indent: "-1",
            },
            {
              indent: "+1",
            },
          ],

          [
            {
              align: [],
            },
          ],

          [
            "blockquote",
            "code-block",
          ],

          [
            "link",
            "image",
          ],

          ["clean"],
        ],

        handlers: {
          image: imageHandler,
        },
      },

      clipboard: {
        matchVisual: false,
      },
    }),
    [imageHandler]
  );

  /* =====================================================
     QUILL FORMATS
  ===================================================== */

  const formats = useMemo(
    () => [
      "header",

      "bold",
      "italic",
      "underline",
      "strike",

      "color",
      "background",

      "list",
      "indent",

      "align",

      "blockquote",
      "code-block",

      "link",
      "image",
    ],
    []
  );

  /* =====================================================
     PASTE IMAGE SUPPORT
  ===================================================== */

  useEffect(() => {
    let editor = null;

    let timer = null;

    const handlePaste = async (
      event
    ) => {
      const clipboardItems =
        Array.from(
          event.clipboardData
            ?.items || []
        );

      const imageItem =
        clipboardItems.find(
          (item) =>
            item.type.startsWith(
              "image/"
            )
        );

      if (!imageItem) {
        return;
      }

      event.preventDefault();

      const file =
        imageItem.getAsFile();

      if (!file) return;

      setUploadingImage(true);

      try {
        const imageUrl =
          await uploadEditorImage(
            file
          );

        const range =
          editor.getSelection(true);

        const index =
          range?.index ??
          editor.getLength();

        editor.insertEmbed(
          index,
          "image",
          imageUrl,
          "user"
        );

        editor.setSelection(
          index + 1,
          0
        );
      } catch (error) {
        console.error(
          "Paste image error:",
          error
        );

        alert(
          error?.response?.data?.error ||
            error.message ||
            "Pasted image upload failed."
        );
      } finally {
        setUploadingImage(false);
      }
    };

    const attachPasteListener =
      () => {
        editor =
          quillRef.current?.getEditor();

        if (!editor?.root) {
          timer = setTimeout(
            attachPasteListener,
            300
          );

          return;
        }

        editor.root.addEventListener(
          "paste",
          handlePaste
        );
      };

    if (!fetching) {
      attachPasteListener();
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }

      if (editor?.root) {
        editor.root.removeEventListener(
          "paste",
          handlePaste
        );
      }
    };
  }, [
    fetching,
    uploadEditorImage,
  ]);

  /* =====================================================
     FEATURE IMAGE
  ===================================================== */

  const handleFeatureImage =
    useCallback((event) => {
      const file =
        event.target.files?.[0];

      if (!file) return;

      if (
        !file.type.startsWith(
          "image/"
        )
      ) {
        alert(
          "Please select a valid image."
        );

        event.target.value = "";

        return;
      }

      setForm((previous) => {
        /*
         Only revoke blob URLs.
         Do not revoke existing API image URL.
        */

        if (
          previous.imagePreview?.startsWith(
            "blob:"
          )
        ) {
          URL.revokeObjectURL(
            previous.imagePreview
          );
        }

        return {
          ...previous,

          image: file,

          imagePreview:
            URL.createObjectURL(
              file
            ),
        };
      });
    }, []);

  /* =====================================================
     CLEANUP IMAGE PREVIEW
  ===================================================== */

  useEffect(() => {
    return () => {
      if (
        form.imagePreview?.startsWith(
          "blob:"
        )
      ) {
        URL.revokeObjectURL(
          form.imagePreview
        );
      }
    };
  }, [form.imagePreview]);

  /* =====================================================
     VALIDATE BLOG
  ===================================================== */

  const validateForm = () => {
    if (!form.title.trim()) {
      alert(
        "Blog title is required."
      );

      return false;
    }

    const plainContent =
      form.content
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, "")
        .trim();

    /*
     Also check for images because an
     image-only blog can have empty text.
    */

    const hasImage =
      form.content.includes("<img");

    if (
      !plainContent &&
      !hasImage
    ) {
      alert(
        "Blog content is required."
      );

      return false;
    }

    if (form.schema.trim()) {
      try {
        JSON.parse(
          form.schema
        );
      } catch {
        alert(
          "Invalid Schema JSON. Please check the JSON syntax."
        );

        return false;
      }
    }

    return true;
  };

  /* =====================================================
     UPDATE BLOG
  ===================================================== */

  const updateBlog = async () => {
    if (
      loading ||
      uploadingImage
    ) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const data =
        new FormData();

      data.append(
        "id",
        String(id)
      );

      data.append(
        "title",
        form.title.trim()
      );

      data.append(
        "metaTitle",
        form.metaTitle.trim()
      );

      data.append(
        "description",
        form.description.trim()
      );

      data.append(
        "keywords",
        form.keywords.trim()
      );

      data.append(
        "schema",
        form.schema.trim()
      );

      /*
       ReactQuill onChange already
       returns the HTML content.
      */

      data.append(
        "content",
        form.content
      );

      if (form.image) {
        data.append(
          "image",
          form.image
        );
      }

      const response =
        await axios.post(
          `${API_BASE_URL}/update-blog.php`,
          data
        );

      console.log(
        "Update response:",
        response.data
      );

      if (
        response.data?.success
      ) {
        alert(
          "Blog Updated Successfully ✅"
        );

        router.push(
          "/admin/manage-blogs"
        );

        router.refresh();

        return;
      }

      alert(
        response.data?.error ||
          "Unable to update blog."
      );
    } catch (error) {
      console.error(
        "Update blog error:",
        error
      );

      alert(
        error?.response?.data
          ?.error ||
          error.message ||
          "Blog update failed."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     FETCH LOADING
  ===================================================== */

  if (fetching) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-lg font-medium">
          Loading blog...
        </div>
      </div>
    );
  }

  /* =====================================================
     UI
  ===================================================== */

  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto space-y-6">
      <style>
        {editorStyle}
      </style>

      {/* HEADER */}

      <div>
        <h1 className="text-3xl font-bold">
          Edit Blog
        </h1>

        <p className="text-gray-500 mt-1">
          Update your blog content
          and SEO settings.
        </p>
      </div>

      {/* TITLE */}

      <div>
        <label className="block font-semibold mb-2">
          Blog Title
        </label>

        <input
          type="text"
          name="title"
          className="w-full border p-3 rounded-lg"
          placeholder="Enter blog title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      {/* FEATURE IMAGE */}

      <div className="space-y-3">
        <label className="block font-semibold">
          Feature Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={
            handleFeatureImage
          }
        />

        {form.imagePreview && (
          <div>
            <img
              src={
                form.imagePreview
              }
              alt="Blog feature preview"
              className="w-full max-w-md h-56 object-cover rounded-lg border"
            />
          </div>
        )}
      </div>

      {/* SEO */}

      <div className="space-y-4 border p-5 rounded-lg bg-gray-50">
        <h2 className="font-bold text-xl">
          SEO Settings
        </h2>

        <div>
          <label className="block text-sm font-medium mb-1">
            Meta Title
          </label>

          <input
            type="text"
            name="metaTitle"
            placeholder="Meta Title"
            className="w-full border p-3 rounded bg-white"
            value={
              form.metaTitle
            }
            onChange={
              handleChange
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Meta Description
          </label>

          <textarea
            name="description"
            placeholder="Meta Description"
            rows={4}
            className="w-full border p-3 rounded bg-white"
            value={
              form.description
            }
            onChange={
              handleChange
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Keywords
          </label>

          <input
            type="text"
            name="keywords"
            placeholder="Keywords"
            className="w-full border p-3 rounded bg-white"
            value={
              form.keywords
            }
            onChange={
              handleChange
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Schema JSON
          </label>

          <textarea
            name="schema"
            placeholder="Schema JSON"
            rows={10}
            className="w-full border p-3 rounded bg-white font-mono text-sm"
            value={
              form.schema
            }
            onChange={
              handleChange
            }
          />
        </div>
      </div>

      {/* EDITOR */}

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-lg">
            Blog Content
          </h2>

          {uploadingImage && (
            <span className="text-sm text-gray-500">
              Uploading image...
            </span>
          )}
        </div>

        <div className="blog-editor bg-white">
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={
              form.content
            }
            onChange={(
              value
            ) =>
              setForm(
                (previous) => ({
                  ...previous,

                  content:
                    value,
                })
              )
            }
            modules={
              modules
            }
            formats={
              formats
            }
            placeholder="Write your blog content..."
          />
        </div>
      </div>

      {/* UPDATE BUTTON */}

      <button
        type="button"
        onClick={
          updateBlog
        }
        disabled={
          loading ||
          uploadingImage
        }
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading
          ? "Updating..."
          : uploadingImage
          ? "Uploading Image..."
          : "Update Blog"}
      </button>
    </div>
  );
}