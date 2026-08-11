import PrivacyPolicy from "@/components/Terms/Privacy";

export const metadata = {
  title: "Privacy Policy | Everence",
  description: "Read Everence's Privacy Policy to learn how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://everence.io/privacy",
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
