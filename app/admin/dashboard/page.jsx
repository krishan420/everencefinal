import AdminRoute from "@/admin/AdminRoute";
import Dashboard from "@/admin/Dashboard";

export const metadata = {
  title: "Admin Dashboard | Everence",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminRoute>
      <Dashboard />
    </AdminRoute>
  );
}
