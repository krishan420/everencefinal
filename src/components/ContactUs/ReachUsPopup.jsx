"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { FiArrowRight, FiX, FiPhone } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import countryList from "react-select-country-list";

import config from "../../lib/config";
import { SafeImage } from "../../lib/SafeImage";

import "react-toastify/dist/ReactToastify.css";

/* =========================================================
   ANIMATIONS
========================================================= */

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 10,
    transition: {
      duration: 0.2,
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

const rightVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   REACT SELECT STYLES
========================================================= */

const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: "48px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderColor: state.isFocused ? "#f97316" : "#e5e7eb",
    boxShadow: state.isFocused
      ? "0 0 0 1px #f97316"
      : "none",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#f97316",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "2px 16px",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
    fontSize: "14px",
  }),

  singleValue: (base) => ({
    ...base,
    color: "#111827",
    fontSize: "14px",
  }),

  input: (base) => ({
    ...base,
    fontSize: "14px",
  }),

  menu: (base) => ({
    ...base,
    zIndex: 10000,
    borderRadius: "8px",
    overflow: "hidden",
  }),

  option: (base, state) => ({
    ...base,
    padding: "10px 16px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "#f97316"
      : state.isFocused
      ? "#fff7ed"
      : "#ffffff",
    color: state.isSelected ? "#ffffff" : "#111827",
  }),
};

/* =========================================================
   INPUT CLASS
========================================================= */

const inputClassName = `
  w-full
  h-12
  rounded-lg
  border
  border-gray-200
  bg-white
  px-4
  text-sm
  text-gray-900
  outline-none
  transition-all
  duration-200
  placeholder:text-gray-400
  focus:border-orange-500
  focus:ring-1
  focus:ring-orange-500
`;

/* =========================================================
   COMPONENT
========================================================= */

export default function ReachUsPopup({ open, onClose }) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =========================================================
     FORM
  ========================================================= */

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      industry: "",
      country: "",
      time: "",
    },
  });

  /* =========================================================
     COUNTRY OPTIONS
  ========================================================= */

  const countryOptions = useMemo(
    () => countryList().getData(),
    []
  );

  /* =========================================================
     INDUSTRY OPTIONS
  ========================================================= */

  const industryOptions = useMemo(
    () => [
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
      {
        label: "Jewellery",
        value: "Jewellery",
      },
    ],
    []
  );

  /* =========================================================
     SUBMIT
  ========================================================= */

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${config.API}/submit.php`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.success) {
        toast.success("Form submitted successfully");

        reset();

        onClose();

        router.push("/successful");
      } else {
        toast.error(
          response.data?.message ||
            "Submission failed"
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error(
        "Submission failed. Try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/60
              px-4
              py-6
              backdrop-blur-[2px]
            "
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          >
            {/* =================================================
                MODAL
            ================================================= */}

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                w-full
                max-w-5xl
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              "
            >
              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close popup"
                className="
                  absolute
                  right-4
                  top-4
                  z-50
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-lg
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-500
                "
              >
                <FiX className="text-xl text-orange-500" />
              </button>

              {/* =================================================
                  TWO COLUMN LAYOUT
              ================================================= */}

              <div className="grid grid-cols-1 md:grid-cols-2">

                {/* =================================================
                    LEFT COLUMN
                ================================================= */}

                <motion.div
                  variants={leftVariants}
                  className="
                    relative
                    flex
                    min-h-[520px]
                    flex-col
                    justify-center
                    overflow-hidden
                    bg-orange-500
                    px-7
                    py-12
                    text-white
                    sm:px-10
                    md:px-10
                    lg:px-12
                  "
                >
                  {/* SUBTLE BACKGROUND */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-64
                      w-64
                      rounded-full
                      bg-white/10
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-32
                      -left-20
                      h-72
                      w-72
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* LOGO */}
                    <SafeImage
                      src="/homebg/logof.png"
                      alt="Everence"
                      className="
                        mb-8
                        h-auto
                        w-auto
                        max-w-[190px]
                        object-contain
                        object-left
                      "
                    />

                    {/* HEADING */}
                    <h2
                      className="
                        max-w-md
                        text-3xl
                        font-bold
                        leading-[1.15]
                        tracking-tight
                        sm:text-4xl
                      "
                    >
                      The Right Conversation
                      <br />
                      Starts Before the Risk
                      <br />
                      Becomes Urgent
                    </h2>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-5
                        max-w-md
                        text-sm
                        leading-7
                        text-white/90
                        sm:text-base
                      "
                    >
                      Get expert guidance before a
                      digital incident becomes a
                      serious business risk.
                    </p>

                    {/* =================================================
                        EMERGENCY CALL
                    ================================================= */}

                    <a
                      href="tel:+918655412100"
                      aria-label="Call Emergency Support at +91 86554 12100"
                      className="
                        group
                        mt-8
                        inline-flex
                        w-fit
                        items-center
                        gap-3
                        rounded-xl
                        bg-white
                        px-5
                        py-3.5
                        text-orange-500
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-orange-50
                        hover:shadow-xl
                      "
                    >
                      {/* PHONE ICON */}
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-orange-500
                          text-white
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      >
                        <FiPhone className="text-lg" />
                      </span>

                      {/* PHONE DETAILS */}
                      <span className="text-left">
                        <span
                          className="
                            block
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-orange-500
                          "
                        >
                          Emergency Call
                        </span>

                        <span
                          className="
                            mt-0.5
                            block
                            text-base
                            font-bold
                            text-gray-900
                            sm:text-lg
                          "
                        >
                          +91 86554 12100
                        </span>
                      </span>

                      <FiArrowRight
                        className="
                          ml-1
                          text-lg
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </a>
                  </div>
                </motion.div>

                {/* =================================================
                    RIGHT COLUMN - FORM
                ================================================= */}

                <motion.div
                  variants={rightVariants}
                  className="
                    flex
                    flex-col
                    justify-center
                    bg-white
                    px-6
                    py-8
                    sm:px-8
                    md:px-10
                    lg:px-12
                  "
                >
                  {/* FORM HEADER */}

                  <div className="mb-6 pr-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Reach Us
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Tell us how we can help protect
                      your business.
                    </p>
                  </div>

                  {/* FORM */}

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* NAME */}

                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Full Name*"
                      className={inputClassName}
                      {...register("name", {
                        required:
                          "Full name is required",
                      })}
                    />

                    {/* EMAIL */}

                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="Email*"
                      className={inputClassName}
                      {...register("email", {
                        required:
                          "Email is required",
                        pattern: {
                          value:
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message:
                            "Enter a valid email",
                        },
                      })}
                    />

                    {/* PHONE */}

                    <input
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone*"
                      className={inputClassName}
                      {...register("phone", {
                        required:
                          "Phone number is required",
                      })}
                    />

                    {/* INDUSTRY */}

                    <Controller
                      name="industry"
                      control={control}
                      rules={{
                        required:
                          "Industry is required",
                      }}
                      render={({ field }) => (
                        <CreatableSelect
                          value={
                            field.value
                              ? {
                                  label:
                                    field.value,
                                  value:
                                    field.value,
                                }
                              : null
                          }
                          options={industryOptions}
                          styles={selectStyles}
                          placeholder="Industry*"
                          isClearable
                          onChange={(value) =>
                            field.onChange(
                              value?.label || ""
                            )
                          }
                        />
                      )}
                    />

                    {/* COUNTRY */}

                    <Controller
                      name="country"
                      control={control}
                      rules={{
                        required:
                          "Country is required",
                      }}
                      render={({ field }) => (
                        <Select
                          value={
                            countryOptions.find(
                              (option) =>
                                option.label ===
                                field.value
                            ) || null
                          }
                          options={countryOptions}
                          styles={selectStyles}
                          placeholder="Country*"
                          isClearable
                          onChange={(value) =>
                            field.onChange(
                              value?.label || ""
                            )
                          }
                        />
                      )}
                    />

                    {/* BEST TIME */}

                    <select
                      className="
                        h-12
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        bg-white
                        px-4
                        text-sm
                        text-gray-700
                        outline-none
                        transition-all
                        duration-200
                        focus:border-orange-500
                        focus:ring-1
                        focus:ring-orange-500
                      "
                      {...register("time")}
                    >
                      <option value="">
                        Best time to contact?
                      </option>

                      <option value="Morning">
                        Morning
                      </option>

                      <option value="Afternoon">
                        Afternoon
                      </option>

                      <option value="Evening">
                        Evening
                      </option>
                    </select>

                    {/* SUBMIT */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        rounded-lg
                        bg-orange-500
                        px-4
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-orange-600
                        focus:outline-none
                        focus:ring-2
                        focus:ring-orange-500
                        focus:ring-offset-2
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          SUBMIT
                          <FiArrowRight className="ml-2 text-lg" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                TOAST
            ================================================= */}

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}