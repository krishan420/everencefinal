import OurServices from "@/pages/OurServices";

export const metadata = {
  title: "Find Our Services ",
  description:
    "Explore Everence's digital forensics and cybersecurity services, including cyber investigations, fraud detection, incident response, compliance, and risk management.",
  alternates: {
    canonical: "https://everence.io/our-services",
  },
};

export default function Page() {
  return <OurServices />;
}
