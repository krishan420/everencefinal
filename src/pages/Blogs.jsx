"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SafeImage } from "../lib/SafeImage";

/* =========================================================
   DECODE WORDPRESS HTML ENTITIES
========================================================= */

const decodeHtml = (value = "") => {
  if (!value) return "";

  return String(value)
    // Remove HTML tags
    .replace(/<[^>]*>/g, " ")

    // WordPress / HTML entities
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8230;/g, "…")
    .replace(/&#038;/g, "&")
    .replace(/&#38;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&#034;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")

    // Decimal numeric entities
    .replace(/&#(\d+);/g, (_, dec) => {
      try {
        return String.fromCharCode(Number(dec));
      } catch {
        return "";
      }
    })

    // Hex numeric entities
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => {
      try {
        return String.fromCharCode(parseInt(hex, 16));
      } catch {
        return "";
      }
    })

    // Clean extra whitespace
    .replace(/\s+/g, " ")
    .trim();
};

/* =========================================================
   BLOGS COMPONENT
========================================================= */

export default function Blogs({ initialBlogs = [] }) {
  const [searchQuery, setSearchQuery] = useState("");

  /* =======================================================
     NORMALIZE BLOG DATA
     
     Decode WordPress content once so:
     - listing displays correctly
     - search works correctly
     - HTML entities don't appear
  ======================================================= */

  const normalizedBlogs = useMemo(() => {
    if (!Array.isArray(initialBlogs)) {
      return [];
    }

    return initialBlogs.map((post) => ({
      ...post,

      title: decodeHtml(
        post?.title || "Untitled Blog"
      ),

      description: decodeHtml(
        post?.description ||
          post?.excerpt ||
          post?.content ||
          "No description available."
      ),

      category: decodeHtml(
        post?.category || "Insights"
      ),
    }));
  }, [initialBlogs]);

  /* =======================================================
     FILTER BLOGS
  ======================================================= */

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return normalizedBlogs;
    }

    return normalizedBlogs.filter((post) => {
      const title =
        post.title?.toLowerCase() || "";

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
  }, [normalizedBlogs, searchQuery]);

  const hasBlogs = filteredPosts.length > 0;

  /* =======================================================
     GET FEATURED IMAGE
  ======================================================= */

  const getImage = (post) => {
    return (
      post?.image ||
      "/default-blog.jpg"
    );
  };

  /* =======================================================
     FORMAT DATE
  ======================================================= */

  const formatDate = (date) => {
    if (!date) {
      return "";
    }

    try {
      const parsedDate = new Date(date);

      if (Number.isNaN(parsedDate.getTime())) {
        return "";
      }

      return parsedDate.toLocaleDateString(
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

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-screen bg-white mt-14">

      {/* =====================================================
          HEADER
      ===================================================== */}

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

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="relative">

          <input
            type="search"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            className="
              w-full
              p-4
              pr-12
              border
              border-gray-200
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-transparent
            "
            aria-label="Search blogs"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() =>
                setSearchQuery("")
              }
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-400
                hover:text-gray-700
                text-xl
              "
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

      {/* =====================================================
          NO BLOGS
      ===================================================== */}

      {!hasBlogs && (
        <main className="max-w-6xl mx-auto px-6 py-20 text-center">

          <SafeImage
            src="/blog-reading.gif"
            alt="No Blogs"
            className="
              w-[300px]
              h-[220px]
              object-contain
              mx-auto
              mb-6
            "
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

      {/* =====================================================
          BLOG GRID
      ===================================================== */}

      {hasBlogs && (
        <main className="max-w-6xl mx-auto px-6 pb-16">

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

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
                  className="
                    bg-white
                    rounded-xl
                    shadow-lg
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read ${title}`}
                  >

                    <div
                      className="
                        h-48
                        w-full
                        overflow-hidden
                        bg-gray-100
                      "
                    >

                      <SafeImage
                        src={image}
                        alt={
                          post.image_alt ||
                          title
                        }
                        className="
                          h-48
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          hover:scale-105
                        "
                      />

                    </div>

                  </Link>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="p-6">

                    {/* CATEGORY */}

                    <div className="mb-3">

                      <span
                        className="
                          text-sm
                          font-medium
                          text-orange-500
                        "
                      >
                        {category}
                      </span>

                    </div>

                    {/* TITLE */}

                    <h2
                      className="
                        text-xl
                        font-bold
                        mb-2
                        text-gray-900
                        line-clamp-2
                      "
                    >

                      <Link
                        href={`/blog/${post.slug}`}
                        className="
                          hover:text-blue-600
                          transition-colors
                        "
                      >
                        {title}
                      </Link>

                    </h2>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        text-gray-600
                        mb-4
                        line-clamp-3
                      "
                    >
                      {description}
                    </p>

                    {/* DATE */}

                    {post.date && (
                      <p
                        className="
                          text-sm
                          text-gray-400
                          mb-4
                        "
                      >
                        {formatDate(post.date)}
                      </p>
                    )}

                    {/* READ MORE */}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="
                        inline-flex
                        items-center
                        text-blue-600
                        font-semibold
                        hover:text-blue-800
                        transition-colors
                      "
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