"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ================= FETCH BLOGS ================= */
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "https://everence.io/api/get-blogs.php"
      );

      console.log("API RESPONSE:", res.data); // 🔥 DEBUG

      // ✅ Ensure it's always an array
      if (Array.isArray(res.data)) {
        setBlogs(res.data);
      } else if (res.data.data) {
        setBlogs(res.data.data);
      } else {
        setBlogs([]);
      }

    } catch (err) {
      console.log("FETCH ERROR:", err);
      setBlogs([]);
    }

    setLoading(false);
  };

  /* ================= DELETE BLOG ================= */
  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await axios.post(
        "https://everence.io/api/delete-blog.php",
        { id }
      );

      alert("Deleted ✅");
      fetchBlogs();

    } catch (err) {
      console.log("DELETE ERROR:", err);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="p-10 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      {/* LOADING */}
      {loading && <p>Loading blogs...</p>}

      {/* EMPTY STATE */}
      {!loading && blogs.length === 0 && (
        <p className="text-gray-500">No blogs found</p>
      )}

      {/* BLOG LIST */}
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="border p-4 mb-4 flex justify-between items-center rounded shadow-sm"
        >
          <div>
            <h2 className="font-bold text-lg">{blog.title}</h2>

            {/* OPTIONAL: show image */}
            {blog.image && (
              <img
                src={`https://everence.io/api/uploads/${blog.image}`}
                className="h-20 mt-2 rounded"
              />
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                router.push(`/admin/edit-blog/${blog.id}`)
              }
              className="bg-yellow-500 text-white px-4 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteBlog(blog.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}