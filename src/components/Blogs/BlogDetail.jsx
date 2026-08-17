import Link from "next/link";
import "./BlogContent.css";

export default function BlogDetail({ post }) {
  if (!post) {
    return null;
  }

  /* =========================
     BASIC DATA
  ========================= */

  const title = post.title || "Everence Blog";

  const image = post.image || null;

  const imageAlt =
    post.image_alt ||
    title ||
    "Everence Blog";

  const author =
    post.author ||
    "Everence";

  const category =
    post.category ||
    "Insights";

  /* =========================
     DATE
  ========================= */

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  /* =========================
     MODIFIED DATE
  ========================= */

  const formattedModifiedDate = post.modified
    ? new Date(post.modified).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-white mt-14">

      {/* =====================================================
          BLOG HEADER
      ===================================================== */}

      <header className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-8">

        {/* CATEGORY */}

        {category && (
          <div className="mb-5">
            <span className="inline-flex items-center text-xs md:text-sm font-semibold text-orange-500 uppercase tracking-[0.18em]">
              {category}
            </span>
          </div>
        )}

        {/* TITLE */}

        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            text-gray-900
            leading-[1.08]
            tracking-tight
          "
        >
          {title}
        </h1>

        {/* META */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-2
            mt-6
            text-sm
            text-gray-500
          "
        >

          {/* AUTHOR */}

          <span>
            By{" "}
            <span className="font-medium text-gray-700">
              {author}
            </span>
          </span>

          {/* DATE */}

          {formattedDate && (
            <>
              <span className="text-gray-300">
                •
              </span>

              <time dateTime={post.date}>
                {formattedDate}
              </time>
            </>
          )}

          {/* UPDATED DATE */}

          {formattedModifiedDate &&
            post.modified !== post.date && (
              <>
                <span className="text-gray-300">
                  •
                </span>

                <span>
                  Updated {formattedModifiedDate}
                </span>
              </>
            )}

        </div>

      </header>


      {/* =====================================================
          FEATURED IMAGE
      ===================================================== */}

      {image && (
        <div className="max-w-6xl mx-auto px-6 mb-12">

          <div
            className="
              overflow-hidden
              rounded-2xl
              md:rounded-3xl
              shadow-lg
              bg-gray-100
            "
          >

            <img
              src={image}
              alt={imageAlt}
              className="
                block
                w-full
                max-h-[650px]
                object-cover
              "
              loading="eager"
              decoding="async"
            />

          </div>

        </div>
      )}


      {/* =====================================================
          BLOG CONTENT
      ===================================================== */}

      <main className="max-w-4xl mx-auto px-6 pb-16">

        <article
          className="
            blog-content

            text-[17px]
            md:text-[18px]

            text-gray-700

            leading-[1.85]
          "
          dangerouslySetInnerHTML={{
            __html: post.content || "",
          }}
        />


        {/* =====================================================
            BACK TO BLOG
        ===================================================== */}

        <div
          className="
            mt-14
            pt-8
            border-t
            border-gray-200
          "
        >

          <Link
            href="/blogs"
            className="
              inline-flex
              items-center
              gap-2

              text-orange-500
              font-semibold

              transition-colors
              duration-200

              hover:text-orange-600
            "
          >

            <span className="text-lg">
              ←
            </span>

            <span>
              Back to Blogs
            </span>

          </Link>

        </div>

      </main>

    </div>
  );
}