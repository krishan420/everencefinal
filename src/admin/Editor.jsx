import { useState, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateBlog() {
  const quillRef = useRef();

  const [form, setForm] = useState({
    title: "",
    metaTitle: "",
    description: "",
    keywords: "",
    schema: "",
    content: "",
    image: null,
    imagePreview: null,
  });

  const [loading, setLoading] = useState(false);

  /* IMAGE UPLOAD INSIDE EDITOR */
  const imageHandler = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = async () => {
      const file = input.files[0];

      const data = new FormData();
      data.append("image", file);

      try {
        const res = await axios.post(
          "https://everence.io/api/upload-image.php",
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const url = res.data.url;

        const quill = quillRef.current.getEditor();
        const range = quill.getSelection(true);

        quill.insertEmbed(range.index, "image", url);
      } catch (err) {
        console.log(err);
        alert("Image upload failed");
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  const submit = async () => {
    setLoading(true);

    const data = new FormData();
    data.append("title", form.title);
    data.append("metaTitle", form.metaTitle);
    data.append("description", form.description);
    data.append("keywords", form.keywords);
    data.append("schema", form.schema);
    data.append("content", form.content);

    if (form.image) {
      data.append("image", form.image);
    }

    try {
      await axios.post(
        "https://everence.io/api/create-blog.php",
        data
      );

      alert("Blog Published 🚀");

      setForm({
        title: "",
        metaTitle: "",
        description: "",
        keywords: "",
        schema: "",
        content: "",
        image: null,
        imagePreview: null,
      });

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Error publishing");
    }

    setLoading(false);
  };

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold">Create Blog</h1>

      {/* TITLE */}
      <input
        className="w-full border p-3 rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      {/* IMAGE */}
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          setForm({
            ...form,
            image: file,
            imagePreview: URL.createObjectURL(file),
          });
        }}
      />

      {form.imagePreview && (
        <img src={form.imagePreview} className="h-40 rounded" />
      )}

      {/* EDITOR */}
      <div className="bg-white border rounded">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          modules={modules}
          value={form.content}
          onChange={(value) =>
            setForm({ ...form, content: value })
          }
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={submit}
        className="bg-green-600 text-white px-6 py-3 rounded w-full"
      >
        {loading ? "Publishing..." : "Publish Blog"}
      </button>

    </div>
  );
}