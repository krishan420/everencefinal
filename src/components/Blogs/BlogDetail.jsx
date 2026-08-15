import Link from "next/link";

export default function BlogDetail({ post }) {
  if (!post) {
    return null;
  }

  const title =
    post.title || "Everence Blog";

  const image =
    post.image || null;

  const imageAlt =
    post.image_alt ||
    title;

  const author =
    post.author ||
    "Everence";

  const category =
    post.category ||
    "Insights";

  /**
   * Format published date
   */
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "";

  return (
    <div className="min-h-screen bg-white mt-14">

      {/* ==========================================
          BLOG HEADER
      ========================================== */}

      <header className="max-w-5xl mx-auto px-6 pt-12 pb-8">

        {/* CATEGORY */}

        <div className="mb-4">

          <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wide">
            {category}
          </span>

        </div>

        {/* TITLE */}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>

        {/* META */}

        <div className="flex flex-wrap items-center gap-3 mt-6 text-sm text-gray-500">

          <span>
            By {author}
          </span>

          {formattedDate && (
            <>
              <span>•</span>

              <time dateTime={post.date}>
                {formattedDate}
              </time>
            </>
          )}

        </div>

      </header>

      {/* ==========================================
          FEATURED IMAGE
      ========================================== */}

      {image && (
        <div className="max-w-6xl mx-auto px-6 mb-10">

          <div className="overflow-hidden rounded-2xl shadow-md bg-gray-100">

            <img
              src={image}
              alt={imageAlt}
              className="w-full max-h-[650px] object-cover"
              loading="eager"
              decoding="async"
            />

          </div>

        </div>
      )}

      {/* ==========================================
          BLOG CONTENT
      ========================================== */}

      <main className="max-w-4xl mx-auto px-6 pb-16">

        <article
          className="
            prose
            prose-lg
            max-w-none

            prose-headings:text-gray-900
            prose-headings:font-bold

            prose-p:text-gray-700
            prose-p:leading-8

            prose-a:text-blue-600
            prose-a:no-underline
            hover:prose-a:underline

            prose-strong:text-gray-900

            prose-blockquote:border-orange-500
            prose-blockquote:text-gray-600

            prose-img:rounded-xl
            prose-img:shadow-md

            prose-ul:text-gray-700
            prose-ol:text-gray-700

            prose-li:leading-7

            prose-code:text-gray-900
          "
          dangerouslySetInnerHTML={{
            __html: post.content || "",
          }}
        />

        {/* ==========================================
            BACK TO BLOG
        ========================================== */}

        <div className="mt-12 pt-8 border-t border-gray-200">

          <Link
            href="/blogs"
            className="
              inline-flex
              items-center
              gap-2
              text-blue-600
              font-semibold
              transition-colors
              hover:text-blue-800
            "
          >
            <span>←</span>
            <span>Back to Blogs</span>
          </Link>

        </div>

      </main>

    </div>
  );
}