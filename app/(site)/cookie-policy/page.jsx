import CookiePolicy from "@/pages/CookiePolicy";

export const metadata = {
  title: "Cookie Policy | Everence",
  description:
    "Read Everence's Cookie Policy to learn how we use cookies and similar technologies on our website.",
  alternates: {
    canonical: "https://everence.io/cookie-policy",
  },
};

export default function Page() {
  return <CookiePolicy />;
}
