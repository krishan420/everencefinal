"use client";

import { useState, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import countryList from "react-select-country-list";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import config from "../lib/config";
import "react-toastify/dist/ReactToastify.css";

const selectStyles = {
  control: (base) => ({
    ...base,
    minHeight: "48px",
    borderRadius: "8px",
    borderColor: "#cbd5e1",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#fb923c",
    },
  }),
};

export default function Emergency() {
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
      const res = await axios.post(
        `${config.API}/submit.php`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data?.success) {
        toast.success("Our team will contact you shortly.");
        reset();
      } else {
        toast.error(res.data?.message || "Submission failed");
      }
    } catch {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <ToastContainer />

      {/* ================= HERO VIDEO BANNER ================= */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[360px] lg:h-[420px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/coursesBgImages/abtf2.mp4"
        />
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#757373] mb-6">
            Facing a Cyber Incident Right Now?
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-14">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#757373]">
              Responding to Cyber Incidents With Clarity and Control
            </h2>

            <p className="text-sm text-gray-700 mb-6">
              When a cyber incident is unfolding, speed matters, but so does judgment.
              The first few decisions often determine how much damage follows and how
              well recovery holds up later.
              <br /><br />
              Everence supports organisations during active incidents by helping contain
              the situation, preserve critical evidence, and stabilise systems without
              creating additional risk.
              <br /><br />
              Whether you are dealing with a suspected breach, ransomware activity,
              internal misuse, or unexplained system behaviour, early, informed response
              makes a measurable difference.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-[#757373]">
              What You Can Expect
            </h2>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>• Direct access to experienced incident response and forensic specialists</li>
              <li>• Rapid triage to understand what is happening and what needs immediate attention</li>
              <li>• Evidence preservation to protect legal, regulatory, and internal outcomes</li>
              <li>• Clear guidance for leadership, IT, legal, and risk teams</li>
              <li>• Support through containment, investigation, and recovery</li>
            </ul>
          </div>

          <div className="border-t pt-10">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Support?</h3>
            <p className="text-sm text-gray-700 mb-6">
              If you believe an incident is ongoing or escalating, reach out directly.
              <br />
              We respond promptly and work with discretion.
            </p>
            <p><strong>Email:</strong> info@everence.io</p>
            <p><strong>Call:</strong> +91 9920314006</p>
          </div>
        </div>

        {/* RIGHT PANEL (FIXED HEIGHT) */}
        <aside
          className="
            lg:sticky lg:top-28
            bg-[#f2f2f2]
            border
            rounded-xl
            p-8
            w-full
            max-w-[380px]
            self-start
            shadow-md
          "
        >
          <h3 className="text-lg font-bold mb-2">Contact Us Today</h3>
          <p className="text-sm text-gray-700 mb-6">
            You will receive a response within the hour.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
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

            <button
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit →"}
            </button>
          </form>
        </aside>
      </section>
    </main>
  );
}
