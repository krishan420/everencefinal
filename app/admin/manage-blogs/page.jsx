import AdminRoute from "@/admin/AdminRoute";
import ManageBlogs from "@/admin/ManageBlogs";

export const metadata = {
  title: "Manage Blogs | Everence Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminRoute>
      <ManageBlogs />
    </AdminRoute>
  );
}
