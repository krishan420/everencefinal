import Events from "@/pages/Events";

export const metadata = {
  title: "Events | Everence",
  description:
    "See highlights from Everence's cybersecurity awareness programmes and cyber hygiene training events.",
  alternates: {
    canonical: "https://everence.io/events",
  },
};

export default function Page() {
  return <Events />;
}
