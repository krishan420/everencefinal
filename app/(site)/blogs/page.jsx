import Blogs from "@/pages/Blogs";

export const revalidate = 3600;

export const metadata = {
  title: "Digital Forensics & Cybersecurity Blogs | Everence",
  description:
    "Stay updated with expert insights on digital forensics, cybersecurity, fraud investigations, compliance, incident response, risk management, and cyber threats.",
  alternates: {
    canonical: "https://everence.io/blogs",
  },
  openGraph: {
    title: "Digital Forensics & Cybersecurity Blogs | Everence",
    description:
      "Read the latest insights from Everence on cybersecurity, AI, digital forensics, and emerging technologies to keep your business informed and secure.",
    url: "https://everence.io/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Everence",
    description:
      "Read the latest insights from Everence on cybersecurity, AI, digital forensics, and emerging technologies to keep your business informed and secure.",
  },
};

async function getBlogs() {
  try {
    const res = await fetch("https://everence.io/api/get-blogs.php", {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function Page() {
  const blogs = await getBlogs();
  return <Blogs initialBlogs={blogs} />;
}
