"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify"; // ✅ FIXED
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import countryList from "react-select-country-list";
import config from "../lib/config";
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

/* ================= SELECT STYLES ================= */

const selectStyles = {
  control: (base) => ({
    ...base,
    borderColor: "#f97316",
    minHeight: "48px",
    boxShadow: "none",
    "&:hover": { borderColor: "#ea580c" },
  }),
};

/* ================= COMPONENT ================= */

export default function ContactUs() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, control, reset } = useForm();

  const countryOptions = useMemo(() => countryList().getData(), []);
  const industryOptions = [
    { label: "IT Services", value: "IT Services" },
    { label: "Finance", value: "Finance" },
    { label: "Healthcare", value: "Healthcare" },
    { label: "Manufacturing", value: "Manufacturing" },
  ];

  /* ================= SUBMIT ================= */

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${config.API}/submit.php`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data?.success) {
        toast.success("Form submitted successfully");
        reset();
        router.push("/successful");
      } else {
        toast.error(res.data?.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white mt-14">
      <ToastContainer />

      {/* HEADER */}
      <header className="bg-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Contact <span className="text-orange-500">Us</span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Let’s start a conversation and build secure, scalable solutions together.
          </p>
        </div>
      </header>

      {/* FORM SECTION */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* LEFT INFO */}
        <motion.div variants={leftVariants} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Get in Touch
          </h2>

          <p className="text-gray-600">
            Reach out to our team for consultations, support, or business inquiries.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <FiMail /> info@everence.io
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FiPhone /> +91 99203 14006
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FiMapPin /> 508, The Summit Business Park, Behind Guru Nanak Petrol Pump, Andheri (East), Mumbai - 400 093
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div variants={rightVariants}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <input
              placeholder="Full Name*"
              {...register("name", { required: true })}
              className="w-full border px-4 py-3 rounded-lg"
            />

            <input
              placeholder="Email*"
              {...register("email", { required: true })}
              className="w-full border px-4 py-3 rounded-lg"
            />

            <input
              placeholder="Phone*"
              {...register("phone", { required: true })}
              className="w-full border px-4 py-3 rounded-lg"
            />

            {/* INDUSTRY */}
            <Controller
              name="industry"
              control={control}
              render={({ field }) => (
                <CreatableSelect
                  {...field}
                  styles={selectStyles}
                  options={industryOptions}
                  placeholder="Select Industry"
                />
              )}
            />

            {/* COUNTRY */}
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  styles={selectStyles}
                  options={countryOptions}
                  placeholder="Select Country"
                />
              )}
            />

            <textarea
              placeholder="Message"
              {...register("message")}
              className="w-full border px-4 py-3 rounded-lg"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              <FiArrowRight />
            </button>

          </form>
        </motion.div>
      </motion.section>
    </div>
  );
}