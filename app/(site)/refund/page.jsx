import RefundPolicy from "@/components/Terms/Refund";

export const metadata = {
  title: "Refund Policy | Everence",
  description: "Read Everence's refund and course rescheduling policy.",
  alternates: {
    canonical: "https://everence.io/refund",
  },
};

export default function Page() {
  return <RefundPolicy />;
}
