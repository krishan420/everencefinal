import AdminRoute from "@/admin/AdminRoute";
import EditBlog from "@/admin/EditBlog";

export const metadata = {
  title: "Edit Blog | Everence Admin",
  robots: { index: false, follow: false },
};

export default async function Page({ params }) {
  const { id } = await params;

  return (
    <AdminRoute>
      <EditBlog id={id} />
    </AdminRoute>
  );
}
