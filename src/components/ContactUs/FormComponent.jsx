"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import config from "../../lib/config";
import { SafeImage } from "../../lib/SafeImage";

/* =====================================================
   CONFIGURATION
===================================================== */

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const WEB3FORMS_ACCESS_KEY =
  "fabb3cfb-5cb8-4f83-81ae-b1c5caf0797a";

/* =====================================================
   DEFAULT COURSES
===================================================== */

const DEFAULT_COURSES = [
  "SAP",
  "Salesforce",
  "AWS",
  "DevOps",
  "Python",
  "AI & ML",
  "Cyber Security",
  "Ethical Hacking",
  "Data Analytics",
  "Business Analytics",
  "ServiceNow",
  "HR Training",
];

/* =====================================================
   SAP COURSES
===================================================== */

const SAP_COURSES = [
  "SAP",
  "SAP MM",
  "SAP FICO",
  "SAP SD",
  "SAP HCM",
  "SAP ABAP",
  "SAP BASIS",
  "SAP SCM",
  "SAP ARIBA",
  "SAP PP",
  "SAP PM",
  "SAP QM",
  "SAP LE&SL",
  "SAP WM&EWM",
  "SAP FIORI",
  "SAP BTP",
  "SAP SuccessFactors",
];

/* =====================================================
   FORM FIELDS
===================================================== */

const FORM_FIELDS = [
  {
    name: "name",
    label: "Name",
    icon: "/icons/user.svg",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",

    validation: {
      required: "Name is required",

      minLength: {
        value: 3,
        message: "Minimum 3 characters",
      },

      maxLength: {
        value: 50,
        message: "Maximum 50 characters",
      },

      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Only letters and spaces are allowed",
      },
    },
  },

  {
    name: "phone",
    label: "Phone",
    icon: "/icons/phone.svg",
    type: "tel",
    placeholder: "Your phone number",
    autoComplete: "tel",

    validation: {
      required: "Phone number is required",

      pattern: {
        value: /^[0-9]{10}$/,
        message: "Please enter a valid 10-digit phone number",
      },
    },
  },

  {
    name: "location",
    label: "Your Location",
    icon: "/icons/map-pin-icon.png",
    type: "text",
    placeholder: "Enter your location",
    autoComplete: "address-level2",

    validation: {
      required: "Location is required",

      minLength: {
        value: 3,
        message: "Minimum 3 characters",
      },
    },
  },
];

/* =====================================================
   COMPONENT
===================================================== */

export default function FormComponent({
  title1 = "Book Your",
  title2 = "Free Demo",
}) {
  const router = useRouter();

  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* =====================================================
     REACT HOOK FORM
  ===================================================== */

  const {
    register,
    handleSubmit,

    formState: {
      errors,
    },

    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      course: "",
      location: "",
    },
  });

  /* =====================================================
     COURSE LIST

     No useEffect or extra state needed.
     Course list automatically updates when pathname changes.
  ===================================================== */

  const courseData = useMemo(() => {
    const currentPath =
      pathname?.toLowerCase() || "";

    return currentPath.includes("sap")
      ? SAP_COURSES
      : DEFAULT_COURSES;
  }, [pathname]);

  /* =====================================================
     FORM SUBMISSION
  ===================================================== */

  const onSubmit = async (formData) => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      /* =============================================
         SEND TO WEB3FORMS
      ============================================= */

      const response = await axios.post(
        WEB3FORMS_URL,

        {
          access_key: WEB3FORMS_ACCESS_KEY,

          subject: "Free Demo Request",

          from_name: "IT Training",

          name: formData.name.trim(),

          phone: formData.phone,

          location: formData.location.trim(),

          course: formData.course,

          recipient_email:
            "shivanihiware77@gmail.com",

          cc:
            "dme.bricksmedia@gmail.com",
        },

        {
          headers: {
            "Content-Type": "application/json",
          },

          timeout: 15000,
        }
      );

      /* =============================================
         CHECK WEB3FORMS RESPONSE
      ============================================= */

      if (!response.data?.success) {
        throw new Error(
          response.data?.message ||
            "Form submission failed."
        );
      }

      /* =============================================
         SAVE TO DATABASE

         Web3Forms already succeeded, so a database
         failure should not force duplicate submission.
      ============================================= */

      try {
        await axios.post(
          config.apiUrl,

          {
            name: formData.name.trim(),

            phone: formData.phone,

            location:
              formData.location.trim(),

            course: formData.course,
          },

          {
            timeout: 15000,
          }
        );
      } catch (databaseError) {
        console.error(
          "Database submission failed:",
          databaseError
        );
      }

      /* =============================================
         SUCCESS
      ============================================= */

      reset();

      router.push("/successful");
    } catch (error) {
      console.error(
        "Form submission error:",
        error
      );

      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Failed to submit the form. Please try again.";

      toast.error(
        errorMessage,

        {
          position: "top-center",

          autoClose: 5000,

          hideProgressBar: false,

          closeOnClick: true,

          pauseOnHover: true,

          draggable: true,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =====================================================
     PHONE INPUT HANDLER
  ===================================================== */

  const handlePhoneInput = (event) => {
    event.target.value =
      event.target.value
        .replace(/\D/g, "")
        .slice(0, 10);
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <section className="mx-auto w-full max-w-md py-2 sm:px-6 sm:py-8">
      <ToastContainer />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 sm:p-8"
      >
        {/* =========================================
            ANIMATED BACKGROUND
        ========================================= */}

        <motion.div
          aria-hidden="true"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-24 -top-24 h-40 w-40 rounded-full bg-blue-100 opacity-10 dark:bg-blue-900"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-purple-100 opacity-10 dark:bg-purple-900"
        />

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="relative z-10">
          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl"
          >
            {title1}{" "}

            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {title2}
            </span>
          </motion.h2>

          {/* =========================================
              FORM
          ========================================= */}

          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
            className="space-y-5"
            noValidate
          >
            {/* =====================================
                DYNAMIC INPUTS
            ===================================== */}

            {FORM_FIELDS.map(
              (field) => {
                const error =
                  errors[field.name];

                return (
                  <div
                    key={
                      field.name
                    }
                  >
                    <label
                      htmlFor={
                        `demo-${field.name}`
                      }
                      className="mb-1 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <SafeImage
                        src={
                          field.icon
                        }
                        alt=""
                        className="mr-2 h-5 w-5"
                      />

                      {
                        field.label
                      }

                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      id={
                        `demo-${field.name}`
                      }
                      type={
                        field.type
                      }
                      autoComplete={
                        field.autoComplete
                      }
                      inputMode={
                        field.type ===
                        "tel"
                          ? "numeric"
                          : undefined
                      }
                      maxLength={
                        field.type ===
                        "tel"
                          ? 10
                          : undefined
                      }
                      onInput={
                        field.type ===
                        "tel"
                          ? handlePhoneInput
                          : undefined
                      }
                      placeholder={
                        field.placeholder
                      }
                      {...register(
                        field.name,
                        field.validation
                      )}
                      className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 dark:bg-gray-800 dark:text-white ${
                        error
                          ? "border-red-500 focus:ring-red-500 dark:border-red-400"
                          : "border-gray-200 focus:ring-blue-500 dark:border-gray-700"
                      }`}
                    />

                    {error && (
                      <p
                        role="alert"
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {
                          error.message
                        }
                      </p>
                    )}
                  </div>
                );
              }
            )}

            {/* =====================================
                COURSE
            ===================================== */}

            <div>
              <label
                htmlFor="demo-course"
                className="mb-1 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <SafeImage
                  src="/icons/select-course.svg"
                  alt=""
                  className="mr-2 h-6 w-6"
                />

                Course

                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <select
                id="demo-course"
                {...register(
                  "course",
                  {
                    required:
                      "Please select a course",
                  }
                )}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-black outline-none transition focus:ring-2 dark:bg-gray-800 dark:text-white ${
                  errors.course
                    ? "border-red-500 focus:ring-red-500 dark:border-red-400"
                    : "border-gray-200 focus:ring-blue-500 dark:border-gray-700"
                }`}
              >
                <option value="">
                  Select a course
                </option>

                {courseData.map(
                  (course) => (
                    <option
                      key={course}
                      value={course}
                    >
                      {course}
                    </option>
                  )
                )}
              </select>

              {errors.course && (
                <p
                  role="alert"
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                >
                  {
                    errors
                      .course
                      .message
                  }
                </p>
              )}
            </div>

            {/* =====================================
                SUBMIT BUTTON
            ===================================== */}

            <motion.button
              type="submit"
              disabled={
                isSubmitting
              }
              whileHover={
                isSubmitting
                  ? undefined
                  : {
                      scale:
                        1.02,

                      boxShadow:
                        "0 5px 15px -3px rgba(99,102,241,0.3)",
                    }
              }
              whileTap={
                isSubmitting
                  ? undefined
                  : {
                      scale:
                        0.98,
                    }
              }
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 font-medium text-white shadow-md disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />

              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting
                  ? "Submitting..."
                  : "Book Demo"}

                {!isSubmitting && (
                  <FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                )}

                {isSubmitting && (
                  <span
                    className="ml-3 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                    aria-hidden="true"
                  />
                )}
              </span>
            </motion.button>
          </form>

          {/* PRIVACY */}

          <p className="mt-5 text-center text-xs text-gray-500 dark:text-gray-400">
            We respect your privacy.
            No spam, guaranteed.
          </p>
        </div>
      </motion.div>
    </section>
  );
}