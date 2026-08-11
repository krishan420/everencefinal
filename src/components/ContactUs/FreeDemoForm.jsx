"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { FiArrowRight, FiX } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import countryList from "react-select-country-list";
import config from "../../lib/config";
import "react-toastify/dist/ReactToastify.css";

/* ================== ANIMATIONS ================== */

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const selectStyles = {
  control: (base) => ({
    ...base,
    borderColor: "#fb923c",
    minHeight: "48px",
    boxShadow: "none",
  }),
};

export default function ReachUsPopup({ open, onClose }) {
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

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post(`${config.API}/submit.php`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data?.success) {
        toast.success("Form submitted successfully");
        reset();
        onClose();
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
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ToastContainer />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] w-full max-w-5xl overflow-hidden"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition"
            >
              <FiX className="text-orange-500 text-xl" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* LEFT PANEL – DESKTOP ONLY */}
              <motion.div
                variants={leftVariants}
                className="hidden md:flex bg-orange-500 text-white p-10 items-center"
              >
                <h2 className="text-3xl font-bold leading-snug">
                  The Right Conversation
                  <br />
                  Starts Before the Risk
                  <br />
                  Becomes Urgent
                </h2>
              </motion.div>

              {/* FORM – FULL WIDTH ON MOBILE */}
              <motion.div
                variants={rightVariants}
                className="p-6 sm:p-8 md:p-10 bg-white"
              >
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
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold"
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                    <FiArrowRight className="inline ml-2" />
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
