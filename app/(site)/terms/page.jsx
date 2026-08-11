import TermsOfService from "@/components/Terms/Terms";

export const metadata = {
  title: "Terms of Service | Everence",
  description: "Read the Terms of Service governing use of the Everence website and services.",
  alternates: {
    canonical: "https://everence.io/terms",
  },
};

export default function Page() {
  return <TermsOfService />;
}
