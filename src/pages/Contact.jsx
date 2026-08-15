"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import {
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import countryList from "react-select-country-list";

import config from "../lib/config";

import "react-toastify/dist/ReactToastify.css";

/* =========================================================
   API
========================================================= */

const API_URL = `${config.API}/submit.php`;

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const rightVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

/* =========================================================
   SELECT STYLES
========================================================= */

const selectStyles = {
  control: (base, state) => ({
    ...base,

    minHeight: "48px",

    borderRadius: "8px",

    borderColor: state.isFocused
      ? "#ea580c"
      : "#f97316",

    boxShadow: "none",

    "&:hover": {
      borderColor: "#ea580c",
    },
  }),

  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),

  option: (base, state) => ({
    ...base,

    backgroundColor: state.isSelected
      ? "#f97316"
      : state.isFocused
      ? "#fff7ed"
      : "#ffffff",

    color: state.isSelected
      ? "#ffffff"
      : "#111827",

    cursor: "pointer",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#6b7280",
  }),

  singleValue: (base) => ({
    ...base,
    color: "#111827",
  }),
};

/* =========================================================
   INDUSTRY OPTIONS
========================================================= */

const industryOptions = [
  {
    label: "IT Services",
    value: "IT Services",
  },
  {
    label: "Finance",
    value: "Finance",
  },
  {
    label: "Healthcare",
    value: "Healthcare",
  },
  {
    label: "Manufacturing",
    value: "Manufacturing",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ContactUs() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =======================================================
     FORM
  ======================================================= */

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {
      errors,
    },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      industry: null,
      country: null,
      message: "",
    },
  });

  /* =======================================================
     COUNTRY OPTIONS
  ======================================================= */

  const countryOptions = useMemo(() => {
    return countryList().getData();
  }, []);

  /* =======================================================
     SUBMIT
  ======================================================= */

  const onSubmit = async (data) => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      /* ===================================================
         NORMALIZE FORM DATA
      =================================================== */

      const payload = {
        name: data.name?.trim() || "",

        email: data.email?.trim() || "",

        phone: data.phone?.trim() || "",

        industry:
          data.industry?.value ||
          data.industry?.label ||
          "",

        country:
          data.country?.label ||
          data.country?.value ||
          "",

        message:
          data.message?.trim() || "",
      };

      /* ===================================================
         DEBUG
      =================================================== */

      console.log(
        "Submitting contact form:",
        payload
      );

      console.log(
        "API URL:",
        API_URL
      );

      /* ===================================================
         API REQUEST
      =================================================== */

      const response = await axios.post(
        API_URL,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          timeout: 20000,

          validateStatus: (status) => {
            return status >= 200 && status < 600;
          },
        }
      );

      /* ===================================================
         DEBUG RESPONSE
      =================================================== */

      console.log(
        "API Status:",
        response.status
      );

      console.log(
        "API Response:",
        response.data
      );

      /* ===================================================
         SUCCESS
      =================================================== */

      if (
        response.status >= 200 &&
        response.status < 300 &&
        response.data?.success === true
      ) {
        toast.success(
          response.data?.message ||
            "Form submitted successfully"
        );

        reset();

        /*
         * Small delay so user can see
         * the success message.
         */

        setTimeout(() => {
          router.push("/successful");
        }, 800);

        return;
      }

      /* ===================================================
         API RETURNED ERROR
      =================================================== */

      toast.error(
        response.data?.message ||
          "Unable to submit the form."
      );

    } catch (error) {
      /* ===================================================
         AXIOS ERROR
      =================================================== */

      console.error(
        "CONTACT FORM ERROR:",
        error
      );

      console.error(
        "ERROR RESPONSE:",
        error?.response?.data
      );

      console.error(
        "ERROR STATUS:",
        error?.response?.status
      );

      console.error(
        "ERROR MESSAGE:",
        error?.message
      );

      /* ===================================================
         ERROR MESSAGE
      =================================================== */

      let errorMessage =
        "Submission failed. Please try again.";

      if (error?.response?.data?.message) {
        errorMessage =
          error.response.data.message;
      } else if (
        error?.code === "ECONNABORTED"
      ) {
        errorMessage =
          "The request timed out. Please try again.";
      } else if (
        error?.response?.status === 500
      ) {
        errorMessage =
          "Server error. Please try again later.";
      } else if (
        !error?.response
      ) {
        errorMessage =
          "Unable to connect to the server.";
      }

      toast.error(errorMessage);

    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     INPUT CLASS
  ========================================================= */

  const inputClass = `
    w-full
    border
    border-gray-200
    px-4
    py-3
    rounded-lg
    outline-none
    transition
    duration-200
    focus:border-orange-500
    focus:ring-1
    focus:ring-orange-200
  `;

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <div className="min-h-screen bg-white mt-14">

      {/* =====================================================
          TOAST
      ===================================================== */}

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="bg-orange-50 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">

            Contact{" "}

            <span className="text-orange-500">
              Us
            </span>

          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">

            Let’s start a conversation and build
            secure, scalable solutions together.

          </p>

        </div>

      </header>

      {/* =====================================================
          FORM SECTION
      ===================================================== */}

      <motion.section
        className="
          max-w-7xl
          mx-auto
          px-6
          py-20
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
        "

        variants={containerVariants}

        initial="hidden"

        animate="show"
      >

        {/* ===================================================
            LEFT INFORMATION
        =================================================== */}

        <motion.div
          variants={leftVariants}
          className="space-y-6"
        >

          <h2 className="text-2xl font-bold text-gray-800">

            Get in Touch

          </h2>

          <p className="text-gray-600">

            Reach out to our team for consultations,
            support, or business inquiries.

          </p>

          <div className="space-y-5">

            {/* EMAIL */}

            <a
              href="mailto:info@everence.io"
              className="
                flex
                items-center
                gap-3
                text-gray-700
                hover:text-orange-500
                transition
              "
            >

              <FiMail className="flex-shrink-0" />

              <span>
                info@everence.io
              </span>

            </a>


            {/* PHONE */}

            <a
              href="tel:+919920314006"
              className="
                flex
                items-center
                gap-3
                text-gray-700
                hover:text-orange-500
                transition
              "
            >

              <FiPhone className="flex-shrink-0" />

              <span>
                +91 99203 14006
              </span>

            </a>


            {/* ADDRESS */}

            <div className="flex items-start gap-3 text-gray-700">

              <FiMapPin
                className="
                  mt-1
                  flex-shrink-0
                "
              />

              <span>
                508, The Summit Business Park,
                Behind Guru Nanak Petrol Pump,
                Andheri (East), Mumbai - 400 093
              </span>

            </div>

          </div>

        </motion.div>


        {/* ===================================================
            RIGHT FORM
        =================================================== */}

        <motion.div
          variants={rightVariants}
        >

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >

            {/* ===============================================
                NAME
            ================================================ */}

            <div>

              <input
                type="text"
                placeholder="Full Name*"
                autoComplete="name"

                {...register("name", {
                  required:
                    "Full name is required",

                  minLength: {
                    value: 2,
                    message:
                      "Please enter your full name",
                  },

                  maxLength: {
                    value: 100,
                    message:
                      "Name is too long",
                  },
                })}

                className={inputClass}

                aria-invalid={
                  errors.name
                    ? "true"
                    : "false"
                }
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}

            </div>


            {/* ===============================================
                EMAIL
            ================================================ */}

            <div>

              <input
                type="email"
                placeholder="Email*"
                autoComplete="email"

                {...register("email", {
                  required:
                    "Email is required",

                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                    message:
                      "Please enter a valid email",
                  },

                  maxLength: {
                    value: 150,
                    message:
                      "Email is too long",
                  },
                })}

                className={inputClass}

                aria-invalid={
                  errors.email
                    ? "true"
                    : "false"
                }
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}

            </div>


            {/* ===============================================
                PHONE
            ================================================ */}

            <div>

              <input
                type="tel"
                placeholder="Phone*"
                autoComplete="tel"
                inputMode="tel"

                {...register("phone", {
                  required:
                    "Phone number is required",

                  pattern: {
                    value:
                      /^[0-9+\-\s()]{7,20}$/,

                    message:
                      "Please enter a valid phone number",
                  },
                })}

                className={inputClass}

                aria-invalid={
                  errors.phone
                    ? "true"
                    : "false"
                }
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}

            </div>


            {/* ===============================================
                INDUSTRY
            ================================================ */}

            <Controller
              name="industry"
              control={control}

              rules={{
                required:
                  "Please select an industry",
              }}

              render={({ field }) => (

                <div>

                  <CreatableSelect
                    value={
                      field.value
                    }

                    onChange={
                      field.onChange
                    }

                    onBlur={
                      field.onBlur
                    }

                    options={
                      industryOptions
                    }

                    styles={
                      selectStyles
                    }

                    placeholder="Select Industry"

                    isClearable

                    isDisabled={
                      isSubmitting
                    }

                    aria-label="Select Industry"
                  />

                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.industry.message}
                    </p>
                  )}

                </div>

              )}
            />


            {/* ===============================================
                COUNTRY
            ================================================ */}

            <Controller
              name="country"
              control={control}

              rules={{
                required:
                  "Please select a country",
              }}

              render={({ field }) => (

                <div>

                  <Select
                    value={
                      field.value
                    }

                    onChange={
                      field.onChange
                    }

                    onBlur={
                      field.onBlur
                    }

                    options={
                      countryOptions
                    }

                    styles={
                      selectStyles
                    }

                    placeholder="Select Country"

                    isClearable

                    isDisabled={
                      isSubmitting
                    }

                    aria-label="Select Country"
                  />

                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.country.message}
                    </p>
                  )}

                </div>

              )}
            />


            {/* ===============================================
                MESSAGE
            ================================================ */}

            <div>

              <textarea
                rows={5}
                placeholder="Message"
                autoComplete="off"

                {...register("message", {
                  maxLength: {
                    value: 5000,
                    message:
                      "Message is too long",
                  },
                })}

                className={`
                  ${inputClass}
                  resize-none
                `}

                aria-invalid={
                  errors.message
                    ? "true"
                    : "false"
                }
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}

            </div>


            {/* ===============================================
                SUBMIT BUTTON
            ================================================ */}

            <button
              type="submit"

              disabled={
                isSubmitting
              }

              className={`
                px-6
                py-3
                rounded-lg
                flex
                items-center
                justify-center
                gap-2
                text-white
                transition
                duration-200
                ${
                  isSubmitting
                    ? `
                      bg-gray-400
                      cursor-not-allowed
                    `
                    : `
                      bg-orange-500
                      hover:bg-orange-600
                      active:scale-95
                    `
                }
              `}
            >

              {isSubmitting
                ? "Submitting..."
                : "Submit"
              }

              {!isSubmitting && (
                <FiArrowRight />
              )}

            </button>

          </form>

        </motion.div>

      </motion.section>

    </div>
  );
}