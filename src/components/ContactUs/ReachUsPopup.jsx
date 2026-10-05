"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import {
  FiArrowRight,
  FiX,
  FiPhone,
} from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import countryList from "react-select-country-list";

import config from "../../lib/config";
import "react-toastify/dist/ReactToastify.css";

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const rightVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
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
    borderColor: state.isFocused ? "#f97316" : "#e5e7eb",
    boxShadow: state.isFocused
      ? "0 0 0 1px #f97316"
      : "none",
    "&:hover": {
      borderColor: "#f97316",
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
    color: state.isSelected ? "#ffffff" : "#111827",
    cursor: "pointer",
  }),
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ReachUsPopup({ open, onClose }) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

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
     FORM SUBMIT
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
      console.error(
        "Form submission error:",
        error
      );

      toast.error(
        "Submission failed. Try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     COMPONENT
  ========================================================= */

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/60
              backdrop-blur-[2px]
              px-4
              py-6
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={onClose}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
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
                shadow-[0_25px_70px_rgba(0,0,0,0.35)]
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
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:bg-gray-50
                "
              >
                <FiX className="text-xl text-orange-500" />
              </button>

              {/* =================================================
                 MAIN GRID
              ================================================= */}

              <div className="grid md:grid-cols-2">

                {/* =================================================
                   LEFT PANEL
                ================================================= */}

                <motion.div
                  variants={leftVariants}
                  className="
                    hidden
                    min-h-[520px]
                    flex-col
                    justify-center
                    bg-orange-500
                    p-10
                    text-white
                    md:flex
                    lg:p-12
                  "
                >
                  <div>
                    {/* HEADING */}

                    <h2
                      className="
                        text-3xl
                        font-bold
                        leading-[1.2]
                        tracking-tight
                        lg:text-4xl
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
                        leading-relaxed
                        text-orange-50
                        lg:text-base
                      "
                    >
                      Get expert guidance before a
                      digital incident becomes a
                      serious business risk.
                    </p>

                    {/* =================================================
                       EMERGENCY CALL BUTTON
                    ================================================= */}

                    <a
                      href="tel:+918655412100"
                      aria-label="Call Emergency Support at +91 86554 12100"
                      className="
                        group
                        mt-8
                        inline-flex
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
                        hover:-translate-y-0.5
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

                      {/* PHONE TEXT */}

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
                            lg:text-lg
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
                   FORM PANEL
                ================================================= */}

                <motion.div
                  variants={rightVariants}
                  className="
                    bg-white
                    p-6
                    sm:p-8
                    md:p-10
                    lg:p-12
                  "
                >
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* =================================================
                       NAME
                    ================================================= */}

                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Full Name*"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        px-4
                        py-3
                        text-sm
                        text-gray-900
                        outline-none
                        transition
                        placeholder:text-gray-400
                        focus:border-orange-500
                        focus:ring-1
                        focus:ring-orange-500
                      "
                      {...register("name", {
                        required:
                          "Full name is required",
                      })}
                    />

                    {/* =================================================
                       EMAIL
                    ================================================= */}

                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="Email*"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        px-4
                        py-3
                        text-sm
                        text-gray-900
                        outline-none
                        transition
                        placeholder:text-gray-400
                        focus:border-orange-500
                        focus:ring-1
                        focus:ring-orange-500
                      "
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

                    {/* =================================================
                       PHONE
                    ================================================= */}

                    <input
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone*"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        px-4
                        py-3
                        text-sm
                        text-gray-900
                        outline-none
                        transition
                        placeholder:text-gray-400
                        focus:border-orange-500
                        focus:ring-1
                        focus:ring-orange-500
                      "
                      {...register("phone", {
                        required:
                          "Phone number is required",
                      })}
                    />

                    {/* =================================================
                       INDUSTRY
                    ================================================= */}

                    <Controller
                      name="industry"
                      control={control}
                      rules={{
                        required:
                          "Industry is required",
                      }}
                      render={({ field }) => (
                        <CreatableSelect
                          {...field}
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
                          styles={selectStyles}
                          options={industryOptions}
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

                    {/* =================================================
                       COUNTRY
                    ================================================= */}

                    <Controller
                      name="country"
                      control={control}
                      rules={{
                        required:
                          "Country is required",
                      }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          value={
                            countryOptions.find(
                              (option) =>
                                option.label ===
                                field.value
                            ) || null
                          }
                          styles={selectStyles}
                          options={countryOptions}
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

                    {/* =================================================
                       BEST TIME
                    ================================================= */}

                    <select
                      className="
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-gray-700
                        outline-none
                        transition
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

                    {/* =================================================
                       SUBMIT BUTTON
                    ================================================= */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-lg
                        bg-orange-500
                        px-4
                        py-3
                        font-semibold
                        text-white
                        transition-all
                        duration-200
                        hover:bg-orange-600
                        focus:outline-none
                        focus:ring-2
                        focus:ring-orange-500
                        focus:ring-offset-2
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "SUBMIT"}

                      {!isSubmitting && (
                        <FiArrowRight className="ml-2 text-lg" />
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