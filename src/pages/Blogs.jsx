"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { SafeImage } from "../lib/SafeImage";

export default function Blogs({ initialBlogs = [] }) {
  const [blogs] = useState(initialBlogs);
  const [loading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /* ================= FILTER ================= */
  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const desc = post.description?.toLowerCase() || "";

      return (
        title.includes(searchQuery.toLowerCase()) ||
        desc.includes(searchQuery.toLowerCase())
      );
    });
  }, [blogs, searchQuery]);

  const hasBlogs = filteredPosts.length > 0;

  return (
    <div className="min-h-screen bg-white dark:bg-[#fff] mt-14">

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Explore Our Blogs</h1>
          <p className="mt-4 text-gray-600">
            Discover expert insights and guides
          </p>
        </div>
      </header>

      {/* ================= SEARCH ================= */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* ================= LOADING ================= */}
      {loading && (
        <div className="text-center py-20">
          <p className="text-gray-500">Loading blogs...</p>
        </div>
      )}

      {/* ================= NO BLOGS ================= */}
      {!loading && !hasBlogs && (
        <main className="max-w-6xl mx-auto px-6 py-20 text-center">
          <SafeImage
            src="/blog-reading.gif"
            alt="No Blogs"
            className="w-[300px] h-[220px] object-contain mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-orange-500">
            No Blogs Found 🚫
          </h2>
        </main>
      )}

      {/* ================= BLOG GRID ================= */}
      {!loading && hasBlogs && (
        <main className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-105"
              >
                {/* IMAGE */}
                <img
                  src={`https://everence.io/api/uploads/${post.image}`}
                  alt={post.title || "Blog Image"}
                  className="h-48 w-full object-cover"
                  onError={(e) =>
                    (e.target.src = "/default-blog.jpg")
                  }
                />

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">
                    {post.title || "Untitled Blog"}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description || "No description available"}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}