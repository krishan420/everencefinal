"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[250px] flex items-center justify-center border rounded">
      Loading editor...
    </div>
  ),
});

const API_BASE_URL = "https://everence.io/api";

const editorStyle = `
  .ql-container {
    min-height: 250px;
    font-size: 16px;
  }

  .ql-editor {
    min-height: 250px;
  }

  .ql-editor img {
    max-width: 100%;
    height: auto;
  }
`;

export default function CreateBlog() {
  const quillRef = useRef(null);

  const [content, setContent] = useState("");

  const [form, setForm] = useState({
    title: "",
    metaTitle: "",
    description: "",
    keywords: "",
    schema: "",
    image: null,
    imagePreview: null,
  });

  const [loading, setLoading] = useState(false);

  /* =========================
     UPLOAD EDITOR IMAGE
  ========================= */

  const uploadEditorImage = useCallback(async (file) => {
    if (!file) {
      throw new Error("No image selected.");
    }

    if (!file.type.startsWith("image/")) {
      throw new Error("Please select a valid image.");
    }

    const data = new FormData();
    data.append("image", file);

    const response = await axios.post(
      `${API_BASE_URL}/upload-image.php`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!response.data?.url) {
      throw new Error(
        response.data?.error || "Image URL was not returned by the server."
      );
    }

    return response.data.url;
  }, []);

  /* =========================
     TOOLBAR IMAGE HANDLER
  ========================= */

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];

      if (!file) return;

      try {
        const imageUrl = await uploadEditorImage(file);

        const editor = quillRef.current?.getEditor();

        if (!editor) {
          throw new Error("Editor is not ready.");
        }

        const range = editor.getSelection(true);

        const index = range?.index ?? editor.getLength();

        editor.insertEmbed(index, "image", imageUrl, "user");

        editor.setSelection(index + 1, 0);
      } catch (error) {
        console.error("Image upload error:", error);

        alert(
          error?.response?.data?.error ||
            error.message ||
            "Image upload failed."
        );
      }
    };
  }, [uploadEditorImage]);

  /* =========================
     QUILL MODULES
  ========================= */

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],

          ["bold", "italic", "underline", "strike"],

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
              align: [],
            },
          ],

          ["blockquote", "code-block"],

          ["link", "image"],

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

  /* =========================
     QUILL FORMATS
  ========================= */

  const formats = [
    "header",

    "bold",
    "italic",
    "underline",
    "strike",

    "color",
    "background",

    "list",

    "align",

    "blockquote",
    "code-block",

    "link",
    "image",
  ];

  /* =========================
     PASTE IMAGE SUPPORT
  ========================= */

  useEffect(() => {
    let editor = null;

    let timeoutId = null;

    const attachPasteListener = () => {
      editor = quillRef.current?.getEditor();

      if (!editor?.root) {
        timeoutId = setTimeout(attachPasteListener, 300);
        return;
      }

      editor.root.addEventListener("paste", handlePaste);
    };

    const handlePaste = async (event) => {
      const items = Array.from(
        event.clipboardData?.items || []
      );

      const imageItem = items.find((item) =>
        item.type.startsWith("image/")
      );

      if (!imageItem) {
        return;
      }

      event.preventDefault();

      const file = imageItem.getAsFile();

      if (!file) {
        return;
      }

      try {
        const imageUrl = await uploadEditorImage(file);

        const range = editor.getSelection(true);

        const index = range?.index ?? editor.getLength();

        editor.insertEmbed(
          index,
          "image",
          imageUrl,
          "user"
        );

        editor.setSelection(index + 1, 0);
      } catch (error) {
        console.error(
          "Paste image upload error:",
          error
        );

        alert(
          error?.response?.data?.error ||
            error.message ||
            "Pasted image upload failed."
        );
      }
    };

    attachPasteListener();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (editor?.root) {
        editor.root.removeEventListener(
          "paste",
          handlePaste
        );
      }
    };
  }, [uploadEditorImage]);

  /* =========================
     FORM CHANGE HANDLER
  ========================= */

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }, []);

  /* =========================
     FEATURE IMAGE
  ========================= */

  const handleFeatureImage = useCallback((event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      event.target.value = "";
      return;
    }

    setForm((previous) => {
      if (previous.imagePreview) {
        URL.revokeObjectURL(
          previous.imagePreview
        );
      }

      return {
        ...previous,

        image: file,

        imagePreview:
          URL.createObjectURL(file),
      };
    });
  }, []);

  /* =========================
     CLEAN IMAGE PREVIEW
  ========================= */

  useEffect(() => {
    return () => {
      if (form.imagePreview) {
        URL.revokeObjectURL(
          form.imagePreview
        );
      }
    };
  }, [form.imagePreview]);

  /* =========================
     SUBMIT BLOG
  ========================= */

  const submit = async () => {
    const cleanTitle = form.title.trim();

    if (!cleanTitle) {
      alert("Blog title is required.");
      return;
    }

    const plainTextContent =
      content
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, "")
        .trim();

    if (!plainTextContent) {
      alert("Blog content is required.");
      return;
    }

    /* Validate Schema JSON */

    if (form.schema.trim()) {
      try {
        JSON.parse(form.schema);
      } catch {
        alert(
          "Schema JSON is invalid. Please check your JSON."
        );

        return;
      }
    }

    setLoading(true);

    try {
      const data = new FormData();

      data.append(
        "title",
        cleanTitle
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

      data.append(
        "content",
        content
      );

      if (form.image) {
        data.append(
          "image",
          form.image
        );
      }

      const response = await axios.post(
        `${API_BASE_URL}/create-blog.php`,
        data,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      if (response.data?.success) {
        alert("Blog Published Successfully 🚀");

        if (form.imagePreview) {
          URL.revokeObjectURL(
            form.imagePreview
          );
        }

        setForm({
          title: "",
          metaTitle: "",
          description: "",
          keywords: "",
          schema: "",
          image: null,
          imagePreview: null,
        });

        setContent("");

        return;
      }

      alert(
        response.data?.error ||
          "Unable to publish blog."
      );
    } catch (error) {
      console.error(
        "Blog publishing error:",
        error
      );

      alert(
        error?.response?.data?.error ||
          error.message ||
          "Error publishing blog."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto space-y-6">
      <style>{editorStyle}</style>

      <h1 className="text-3xl font-bold">
        Create Blog
      </h1>

      {/* TITLE */}

      <div>
        <label className="block font-semibold mb-2">
          Blog Title
        </label>

        <input
          type="text"
          name="title"
          className="w-full border p-3 rounded"
          placeholder="Enter blog title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      {/* FEATURE IMAGE */}

      <div>
        <label className="block font-semibold mb-2">
          Feature Image
        </label>

        <input
          type="file"
          accept="image/*"
          className="block"
          onChange={handleFeatureImage}
        />

        {form.imagePreview && (
          <img
            src={form.imagePreview}
            className="mt-4 w-full max-w-md h-56 object-cover rounded-lg border"
            alt="Feature image preview"
          />
        )}
      </div>

      {/* SEO SETTINGS */}

      <div className="space-y-4 border p-5 rounded-lg bg-gray-50">
        <h2 className="font-bold text-xl">
          SEO Settings
        </h2>

        <input
          type="text"
          name="metaTitle"
          placeholder="Meta Title"
          className="w-full border p-3 rounded bg-white"
          value={form.metaTitle}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Meta Description"
          rows={4}
          className="w-full border p-3 rounded bg-white"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="keywords"
          placeholder="Keywords"
          className="w-full border p-3 rounded bg-white"
          value={form.keywords}
          onChange={handleChange}
        />

        <textarea
          name="schema"
          placeholder="Schema JSON"
          rows={8}
          className="w-full border p-3 rounded bg-white font-mono text-sm"
          value={form.schema}
          onChange={handleChange}
        />
      </div>

      {/* CONTENT EDITOR */}

      <div>
        <h2 className="font-bold text-lg mb-2">
          Content
        </h2>

        <div className="bg-white border rounded-lg overflow-hidden">
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            placeholder="Write your blog content..."
          />
        </div>
      </div>

      {/* SUBMIT BUTTON */}

      <button
        type="button"
        onClick={submit}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading
          ? "Publishing..."
          : "Publish Blog"}
      </button>
    </div>
  );
}