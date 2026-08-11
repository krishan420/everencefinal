"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { GoogleMap } from "../../lib/GoogleMap";
import config from "../../lib/config";
import { useMapContext } from "../../lib/MapContext";
import { SafeImage } from "../../lib/SafeImage";

/* =====================================================
   STATIC DATA
===================================================== */

const COURSES = [
  "SAP",
  "Salesforce",
  "AWS",
  "DevOps",
  "Python",
  "AI & ML",
  "Ethical Hacking",
  "Data Analytics",
  "Business Analytics",
  "ServiceNow",
  "HR Training",
  "Share Market",
  "Cyber Security",
];

const WEB3FORMS_URL =
  "https://api.web3forms.com/submit";

const WEB3FORMS_ACCESS_KEY =
  "fabb3cfb-5cb8-4f83-81ae-b1c5caf0797a";

/* =====================================================
   COMPONENT
===================================================== */

export default function ContactUs({
  location = "Nagpur",
}) {
  const router = useRouter();

  const { mapLocation } =
    useMapContext();

  const [
    activeLocation,
    setActiveLocation,
  ] = useState(location);

  const [
    isFormVisible,
    setIsFormVisible,
  ] = useState(true);

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

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
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      course: "",
      location,
    },
  });

  /* =====================================================
     LOCATION HASH
  ===================================================== */

  useEffect(() => {
    const handleHashChange = () => {
      const hash =
        window.location.hash
          .replace("#", "")
          .toLowerCase();

      let selectedLocation =
        location;

      if (hash === "thane") {
        selectedLocation =
          "Thane";
      }

      if (hash === "nagpur") {
        selectedLocation =
          "Nagpur";
      }

      setActiveLocation(
        selectedLocation
      );

      setValue(
        "location",
        selectedLocation
      );
    };

    handleHashChange();

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, [
    location,
    setValue,
  ]);

  /* =====================================================
     LOCATION CHANGE
     
     Keep this function if you have Thane/Nagpur buttons
     elsewhere in this component in the future.
  ===================================================== */

  const handleLocationChange = (
    selectedLocation
  ) => {
    const normalizedLocation =
      selectedLocation
        .trim()
        .toLowerCase();

    const displayLocation =
      normalizedLocation === "thane"
        ? "Thane"
        : "Nagpur";

    setActiveLocation(
      displayLocation
    );

    setValue(
      "location",
      displayLocation
    );

    window.location.hash =
      normalizedLocation;

    setIsFormVisible(false);
  };

  /* =====================================================
     FORM SUBMISSION
  ===================================================== */

  const onSubmit = async (
    formData
  ) => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      /* -----------------------------------------
         WEB3FORMS SUBMISSION
      ----------------------------------------- */

      const web3Response =
        await axios.post(
          WEB3FORMS_URL,
          {
            access_key:
              WEB3FORMS_ACCESS_KEY,

            subject:
              "Contact Form Submission",

            from_name:
              "IT Training",

            name:
              formData.name,

            phone:
              formData.phone,

            course:
              formData.course,

            location:
              formData.location,

            recipient_email:
              "shivanihiware77@gmail.com",

            cc:
              "dme.bricksmedia@gmail.com",
          },
          {
            headers: {
              "Content-Type":
                "application/json",
            },

            timeout: 15000,
          }
        );

      if (
        !web3Response.data
          ?.success
      ) {
        throw new Error(
          web3Response.data
            ?.message ||
            "Form submission failed."
        );
      }

      /* -----------------------------------------
         BACKEND SUBMISSION
      ----------------------------------------- */

      try {
        await axios.post(
          config.apiUrl,
          formData,
          {
            timeout: 15000,
          }
        );
      } catch (
        backendError
      ) {
        /*
         Web3Forms already succeeded.
         Log backend failure instead of
         making the user submit again.
        */

        console.error(
          "Backend submission error:",
          backendError
        );
      }

      /* -----------------------------------------
         SUCCESS
      ----------------------------------------- */

      reset({
        name: "",
        phone: "",
        course: "",
        location:
          activeLocation,
      });

      router.push(
        "/successful"
      );
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      const message =
        error?.response?.data
          ?.message ||
        error?.response?.data
          ?.error ||
        error.message ||
        "Failed to submit the form.";

      toast.error(
        message,
        {
          position:
            "top-center",

          autoClose:
            5000,

          closeOnClick:
            true,

          pauseOnHover:
            true,

          draggable:
            true,
        }
      );
    } finally {
      setIsSubmitting(
        false
      );
    }
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <section
      id="contact-us"
      className="relative z-10 w-full bg-white px-4 py-12 dark:bg-gray-900 md:py-20"
    >
      <ToastContainer />

      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
        <div
          className={`relative ${
            isFormVisible
              ? "md:flex"
              : ""
          }`}
        >
          {/* =========================================
              MAP SECTION
          ========================================= */}

          <div
            id="map-section"
            className={`relative h-[400px] bg-gray-100 dark:bg-gray-700 md:h-[500px] ${
              isFormVisible
                ? "w-full md:w-1/2"
                : "w-full"
            }`}
          >
            <GoogleMap
              location={
                mapLocation ||
                activeLocation
              }
            />

            {/* MAP TOGGLE */}

            <button
              type="button"
              onClick={() =>
                setIsFormVisible(
                  (previous) =>
                    !previous
                )
              }
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-700"
              aria-label={
                isFormVisible
                  ? "Show full map"
                  : "Show contact form"
              }
            >
              {isFormVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700 dark:text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700 dark:text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />

                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              )}
            </button>

            {/* SHOW FORM BUTTON */}

            {!isFormVisible && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <button
                  type="button"
                  onClick={() =>
                    setIsFormVisible(
                      true
                    )
                  }
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                >
                  Show Contact Form
                </button>
              </div>
            )}
          </div>

          {/* =========================================
              CONTACT FORM
          ========================================= */}

          {isFormVisible && (
            <div className="w-full p-6 md:w-1/2 md:p-8">
              {/* HEADER */}

              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Contact Us
                </h2>

                <button
                  type="button"
                  onClick={() =>
                    setIsFormVisible(
                      false
                    )
                  }
                  className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  aria-label="Hide contact form"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={
                        2
                      }
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit(
                  onSubmit
                )}
                className="space-y-5"
                noValidate
              >
                {/* NAME */}

                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    <SafeImage
                      src="/icons/user.svg"
                      alt=""
                      className="-mt-1 mr-2 inline h-5 w-5"
                    />

                    Your Name{" "}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    {...register(
                      "name",
                      {
                        required:
                          "Name is required",

                        minLength:
                          {
                            value:
                              3,

                            message:
                              "Minimum 3 characters",
                          },

                        maxLength:
                          {
                            value:
                              50,

                            message:
                              "Maximum 50 characters",
                          },

                        pattern:
                          {
                            value:
                              /^[a-zA-Z\s]+$/,

                            message:
                              "Only letters and spaces are allowed",
                          },
                      }
                    )}
                    className={`w-full rounded-lg border bg-white px-4 py-2 outline-none transition focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />

                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {
                        errors
                          .name
                          .message
                      }
                    </p>
                  )}
                </div>

                {/* PHONE */}

                <div className="space-y-1">
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    <SafeImage
                      src="/icons/phone.svg"
                      alt=""
                      className="-mt-1 mr-2 inline h-5 w-5"
                    />

                    Phone Number{" "}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={
                      10
                    }
                    placeholder="9876543210"
                    {...register(
                      "phone",
                      {
                        required:
                          "Phone number is required",

                        pattern:
                          {
                            value:
                              /^[0-9]{10}$/,

                            message:
                              "Please enter a valid 10-digit phone number",
                          },
                      }
                    )}
                    className={`w-full rounded-lg border bg-white px-4 py-2 outline-none transition focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {
                        errors
                          .phone
                          .message
                      }
                    </p>
                  )}
                </div>

                {/* LOCATION */}

                <div className="space-y-1">
                  <label
                    htmlFor="contact-location"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    <SafeImage
                      src="/icons/map-pin-icon.png"
                      alt=""
                      className="-mt-1 mr-2 inline h-5 w-5"
                    />

                    Your Location{" "}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <input
                    id="contact-location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Enter your location"
                    {...register(
                      "location",
                      {
                        required:
                          "Location is required",
                      }
                    )}
                    className={`w-full rounded-lg border bg-white px-4 py-2 outline-none transition focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${
                      errors.location
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />

                  {errors.location && (
                    <p className="text-sm text-red-500">
                      {
                        errors
                          .location
                          .message
                      }
                    </p>
                  )}
                </div>

                {/* COURSE */}

                <div className="space-y-1">
                  <label
                    htmlFor="contact-course"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    <SafeImage
                      src="/icons/select-course.svg"
                      alt=""
                      className="-mt-1 mr-2 inline h-5 w-5"
                    />

                    Select Course{" "}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <select
                    id="contact-course"
                    {...register(
                      "course",
                      {
                        required:
                          "Please select a course",
                      }
                    )}
                    className={`w-full rounded-lg border bg-white px-4 py-2 outline-none transition focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${
                      errors.course
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    <option value="">
                      Select a course...
                    </option>

                    {COURSES.map(
                      (
                        course
                      ) => (
                        <option
                          key={
                            course
                          }
                          value={
                            course
                          }
                        >
                          {
                            course
                          }
                        </option>
                      )
                    )}
                  </select>

                  {errors.course && (
                    <p className="text-sm text-red-500">
                      {
                        errors
                          .course
                          .message
                      }
                    </p>
                  )}
                </div>

                {/* SUBMIT */}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={
                      isSubmitting
                    }
                    className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-3 h-5 w-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>

                        Processing...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}