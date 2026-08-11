import { notFound } from "next/navigation";
import BlogDetail from "@/components/Blogs/BlogDetail";

const API_BASE = "https://everence.io/api";

export const revalidate = 3600;

async function getBlog(slug) {
  try {
    const cleanSlug = slug.replace(/-+$/, "");
    const res = await fetch(`${API_BASE}/get-blog.php?slug=${cleanSlug}`, {
      next: { revalidate: 3600 },
    });

    let blogData = await res.json();

    if (typeof blogData === "string") {
      blogData = JSON.parse(blogData);
    }

    if (blogData?.data) {
      blogData = blogData.data;
    }

    if (!blogData || !blogData.title) {
      return null;
    }

    return blogData;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    return { title: "Blog Not Found | Everence" };
  }

  return {
    title: post.meta_title || post.title,
    description: post.description || "",
    keywords: post.keywords || "",
    alternates: {
      canonical: `https://everence.io/blog/${post.slug}`,
    },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.description || "",
      type: "article",
      images: [`${API_BASE}/uploads/${post.image}`],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {post.schema_json && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.schema_json }}
        />
      )}
      <BlogDetail post={post} />
    </>
  );
}
