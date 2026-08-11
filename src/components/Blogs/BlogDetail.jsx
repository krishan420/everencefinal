"use client";

import Link from "next/link";

const API_BASE = "https://everence.io/api";

export default function BlogDetail({ post }) {
  return (
    <div className="min-h-screen bg-white mt-14">
      {/* ================= CONTENT ================= */}
      <main className="max-w-4xl mx-auto px-6 py-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* IMAGE */}
        {post.image && (
          <img
            src={`${API_BASE}/uploads/${post.image}`}
            alt={post.title}
            className="w-full rounded-xl mb-8 shadow-md"
            onError={(e) => (e.target.style.display = "none")}
          />
        )}

        {/* CONTENT */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* BACK BUTTON */}
        <Link
          href="/blogs"
          className="inline-block mt-12 text-blue-600 font-semibold hover:underline"
        >
          ← Back to Blogs
        </Link>

      </main>
    </div>
  );
}
