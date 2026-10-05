"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ReachUsPopup from "./ContactUs/ReachUsPopup";

export default function AutoReachUsPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Close popup immediately when URL changes
    setOpen(false);

    // Start a new 15-second timer for every page
    const timer = setTimeout(() => {
      setOpen(true);
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ReachUsPopup
      open={open}
      onClose={handleClose}
    />
  );
}