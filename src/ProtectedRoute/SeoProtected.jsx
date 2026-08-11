import { useLocation, Navigate } from "react-router-dom";

const ALLOWED_TOKEN = "seo-team"; 

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  if (token !== ALLOWED_TOKEN) {
    return <Navigate to="/" replace />;
  }

  return children;
}
