"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SafeImage } from "../lib/SafeImage";

export default function Blogs({ initialBlogs = [] }) {
  const [searchQuery, setSearchQuery] = useState("");

  /*
   * Filter blogs based on title, description,
   * category and content.
   */
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return initialBlogs;
    }

    return initialBlogs.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const description =
        post.description?.toLowerCase() || "";
      const category =
        post.category?.toLowerCase() || "";

      return (
        title.includes(query) ||
        description.includes(query) ||
        category.includes(query)
      );
    });
  }, [initialBlogs, searchQuery]);

  const hasBlogs = filteredPosts.length > 0;

  /*
   * Get WordPress featured image.
   *
   * Your wordpress.js already normalizes this
   * into post.image.
   */
  const getImage = (post) => {
    return (
      post?.image ||
      "/default-blog.jpg"
    );
  };

  /*
   * Format WordPress date.
   */
  const formatDate = (date) => {
    if (!date) {
      return "";
    }

    try {
      return new Date(date).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );
    } catch {
      return "";
    }
  };

  return (
    <div className="min-h-screen bg-white mt-14">

      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Our Blogs
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Discover expert insights and guides
          </p>

        </div>
      </header>

      {/* ==========================================
          SEARCH
      ========================================== */}

      <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="relative">

          <input
            type="search"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            className="w-full p-4 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Search blogs"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              aria-label="Clear search"
            >
              ×
            </button>
          )}

        </div>

        {/* SEARCH RESULT COUNT */}

        {searchQuery && (
          <p className="mt-3 text-sm text-gray-500">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1
              ? "blog"
              : "blogs"}{" "}
            found
          </p>
        )}

      </section>

      {/* ==========================================
          NO BLOGS
      ========================================== */}

      {!hasBlogs && (
        <main className="max-w-6xl mx-auto px-6 py-20 text-center">

          <SafeImage
            src="/blog-reading.gif"
            alt="No Blogs"
            className="w-[300px] h-[220px] object-contain mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold text-orange-500">
            {searchQuery
              ? "No Blogs Found 🚫"
              : "No Blogs Available"}
          </h2>

          {searchQuery && (
            <p className="mt-3 text-gray-500">
              Try searching with another keyword.
            </p>
          )}

        </main>
      )}

      {/* ==========================================
          BLOG GRID
      ========================================== */}

      {hasBlogs && (
        <main className="max-w-6xl mx-auto px-6 pb-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredPosts.map((post) => {

              const image = getImage(post);

              const title =
                post.title ||
                "Untitled Blog";

              const description =
                post.description ||
                "No description available.";

              const category =
                post.category ||
                "Insights";

              return (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* ==================================
                      IMAGE
                  ================================== */}

                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read ${title}`}
                  >

                    <div className="h-48 w-full overflow-hidden bg-gray-100">

                      <SafeImage
                        src={image}
                        alt={
                          post.image_alt ||
                          title
                        }
                        className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />

                    </div>

                  </Link>

                  {/* ==================================
                      CONTENT
                  ================================== */}

                  <div className="p-6">

                    {/* CATEGORY */}

                    <div className="mb-3">

                      <span className="text-sm font-medium text-orange-500">
                        {category}
                      </span>

                    </div>

                    {/* TITLE */}

                    <h2 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">

                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {title}
                      </Link>

                    </h2>

                    {/* DESCRIPTION */}

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {description}
                    </p>

                    {/* DATE */}

                    {post.date && (
                      <p className="text-sm text-gray-400 mb-4">
                        {formatDate(post.date)}
                      </p>
                    )}

                    {/* READ MORE */}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Read More
                      <span className="ml-1">
                        →
                      </span>
                    </Link>

                  </div>

                </article>
              );
            })}

          </div>

        </main>
      )}

    </div>
  );
}