"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import countryList from "react-select-country-list";
import RichText from "@/components/RichText";
import config from "../../lib/config";
import "react-toastify/dist/ReactToastify.css";

/* ================= ANIMATIONS ================= */

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const selectStyles = {
  control: (base) => ({
    ...base,
    borderColor: "#fb923c",
    minHeight: "48px",
    boxShadow: "none",
  }),
};

export default function ReachUsForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm();

  const countryOptions = useMemo(() => countryList().getData(), []);

  const industryOptions = [
    { label: "IT Services", value: "IT Services" },
    { label: "Finance", value: "Finance" },
    { label: "Healthcare", value: "Healthcare" },
    { label: "Manufacturing", value: "Manufacturing" },
    { label: "Jewellery", value: "Jewellery" },
  ];

  /* ================= SUBMIT ================= */

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${config.API}/submit.php`, data);

      if (res.data?.success) {
        toast.success("Form submitted successfully");
        reset();
        router.push("/successful");
      } else {
        toast.error(res.data?.message || "Submission failed");
      }
    } catch {
      toast.error("Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <ToastContainer />

      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        <div className="grid md:grid-cols-2 rounded-2xl shadow-2xl overflow-hidden">

          {/* LEFT CONTENT */}
          <motion.div
            variants={leftVariants}
            className="bg-orange-500 text-white p-10 flex flex-col justify-center h-full"
          >
            <h2 className="text-3xl font-bold mb-4">
              Find Evidence Before The Risk Finds You
            </h2>

            {/* ✅ FIXED DESCRIPTION */}
            <p className="text-white text-lg leading-relaxed max-w-xl">
              <RichText
                content={[
                  {
                    text: "Cyber incident response services",
                    link: "/services/digital-compliance",
                    color: "text-white underline",
                  },
                  " decisions are rarely made in isolation; they’re shaped by context, responsibility, and timing. Whether you’re evaluating exposure, responding to a developing situation, or planning for resilience, an informed conversation can make the difference."
                ]}
              />
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div variants={rightVariants} className="p-10 bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <input
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Full Name*"
                {...register("name", { required: true })}
              />

              <input
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Email*"
                {...register("email", { required: true })}
              />

              <input
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Phone*"
                {...register("phone", { required: true })}
              />

              <Controller
                name="industry"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CreatableSelect
                    styles={selectStyles}
                    options={industryOptions}
                    placeholder="Industry*"
                    onChange={(val) => field.onChange(val?.label)}
                  />
                )}
              />

              <Controller
                name="country"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    styles={selectStyles}
                    options={countryOptions}
                    placeholder="Country*"
                    onChange={(val) => field.onChange(val?.label)}
                  />
                )}
              />

              <select
                className="w-full border rounded-lg px-4 py-3"
                {...register("time")}
              >
                <option value="">Best time to contact?</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>

              <button
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-3 rounded-lg"
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
                <FiArrowRight className="inline ml-2" />
              </button>

            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}