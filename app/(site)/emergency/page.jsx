import Emergency from "@/pages/Emergency";

export const metadata = {
  title: "Cyber Incident Emergency Response | Everence",
  description:
    "Facing a cyber incident right now? Everence provides rapid incident response, evidence preservation, and forensic support to contain and recover from active cyber incidents.",
  alternates: {
    canonical: "https://everence.io/emergency",
  },
};

export default function Page() {
  return <Emergency />;
}
