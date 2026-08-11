import AdminRoute from "@/admin/AdminRoute";
import CreateBlog from "@/admin/CreateBlog";

export const metadata = {
  title: "Create Blog | Everence Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminRoute>
      <CreateBlog />
    </AdminRoute>
  );
}
