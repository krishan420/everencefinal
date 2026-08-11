"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/admin/create-blog")}
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Create Blog
        </button>

        <button
          onClick={() => router.push("/admin/manage-blogs")}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Manage Blogs
        </button>

        <button className="bg-red-500 text-white px-6 py-3 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}