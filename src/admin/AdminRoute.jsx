"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminRoute({ children }) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) {
      router.push("/admin/login");
    } else {
      setIsAdmin(true);
    }
  }, [router]);

  if (!isAdmin) return null;

  return children;
}
