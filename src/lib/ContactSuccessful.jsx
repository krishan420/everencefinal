"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactSuccessful({
  title = "Thank You!",
  message = "Thank you for submitting the form. Our team will be reaching out to you shortly.",
  primaryButtonText = "Go Back to Previous Page",
  secondaryButtonText = "Go Back to Home Page",
  className = "",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  autoRedirect = false,
  redirectTimeout = 5000,
  redirectPath = "/",
}) {
  const router = useRouter();

  /* =====================================================
     REDIRECT TIME
  ===================================================== */

  const totalSeconds = useMemo(
    () => Math.max(1, Math.ceil(redirectTimeout / 1000)),
    [redirectTimeout]
  );

  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     ENTRANCE ANIMATION
  ===================================================== */

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  /* =====================================================
     RESET COUNTDOWN WHEN PROPS CHANGE
  ===================================================== */

  useEffect(() => {
    setTimeLeft(totalSeconds);
  }, [totalSeconds, autoRedirect]);

  /* =====================================================
     SECONDARY ACTION
  ===================================================== */

  const handleSecondaryClick = useCallback(() => {
    if (onSecondaryButtonClick) {
      onSecondaryButtonClick();
      return;
    }

    router.push(redirectPath);
  }, [onSecondaryButtonClick, redirectPath, router]);

  /* =====================================================
     PRIMARY ACTION
  ===================================================== */

  const handlePrimaryClick = useCallback(() => {
    if (onPrimaryButtonClick) {
      onPrimaryButtonClick();
      return;
    }

    router.back();
  }, [onPrimaryButtonClick, router]);

  /* =====================================================
     AUTO REDIRECT
  ===================================================== */

  useEffect(() => {
    if (!autoRedirect) {
      return;
    }

    const redirectTimer = setTimeout(() => {
      handleSecondaryClick();
    }, redirectTimeout);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [
    autoRedirect,
    redirectTimeout,
    handleSecondaryClick,
  ]);

  /* =====================================================
     COUNTDOWN
  ===================================================== */

  useEffect(() => {
    if (!autoRedirect || timeLeft <= 0) {
      return;
    }

    const countdownTimer = setTimeout(() => {
      setTimeLeft((previous) =>
        Math.max(previous - 1, 0)
      );
    }, 1000);

    return () => {
      clearTimeout(countdownTimer);
    };
  }, [autoRedirect, timeLeft]);

  /* =====================================================
     ANIMATION CLASS
  ===================================================== */

  const visibilityClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-4 opacity-0";

  const cardVisibilityClass = isVisible
    ? "scale-100 opacity-100"
    : "scale-95 opacity-0";

  /* =====================================================
     PROGRESS
  ===================================================== */

  const progressCircumference = 283;

  const progressOffset =
    progressCircumference -
    (progressCircumference * timeLeft) /
      totalSeconds;

  /* =====================================================
     UI
  ===================================================== */

  return (
    <main
      className={`flex min-h-screen items-center justify-center px-4 transition-all duration-700 ${className}`}
    >
      <div
        className={`w-full max-w-md transform rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl transition-all duration-700 dark:border-gray-700 dark:bg-gray-800 ${cardVisibilityClass}`}
      >
        {/* =========================================
            SUCCESS ICON
        ========================================= */}

        <div className="mb-6 flex justify-center">
          <div className="relative">
            {/* GLOW */}

            <div
              className="absolute inset-0 scale-125 animate-pulse rounded-full bg-gradient-to-r from-green-400 to-teal-500 opacity-30 blur-lg"
              aria-hidden="true"
            />

            {/* CHECKMARK CIRCLE */}

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-500 shadow-lg">
              <svg
                className="animate-checkmark h-12 w-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              {/* AUTO REDIRECT PROGRESS */}

              {autoRedirect && (
                <svg
                  className="absolute inset-0 h-24 w-24 -rotate-90"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  {/* BACKGROUND CIRCLE */}

                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="4"
                  />

                  {/* PROGRESS CIRCLE */}

                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={progressCircumference}
                    strokeDashoffset={progressOffset}
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* =========================================
            TITLE
        ========================================= */}

        <h1
          className={`mb-4 transform text-center text-3xl font-bold text-gray-800 transition-all delay-150 duration-700 dark:text-white ${visibilityClass}`}
        >
          {title}
        </h1>

        {/* =========================================
            MESSAGE
        ========================================= */}

        <p
          className={`mb-8 transform text-center text-lg leading-relaxed text-gray-600 transition-all delay-300 duration-700 dark:text-gray-300 ${visibilityClass}`}
        >
          {message}
        </p>

        {/* =========================================
            BUTTONS
        ========================================= */}

        <div
          className={`flex transform flex-col gap-4 transition-all delay-500 duration-700 sm:flex-row ${visibilityClass}`}
        >
          {/* PREVIOUS PAGE */}

          <button
            type="button"
            onClick={handlePrimaryClick}
            className="flex-1 transform rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-800 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            {primaryButtonText}
          </button>

          {/* HOME PAGE */}

          <button
            type="button"
            onClick={handleSecondaryClick}
            className="flex-1 transform rounded-lg bg-gray-100 px-6 py-3 font-medium text-gray-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
          >
            {secondaryButtonText}
          </button>
        </div>

        {/* =========================================
            AUTO REDIRECT COUNTDOWN
        ========================================= */}

        {autoRedirect && (
          <div
            className={`mt-6 transform text-center transition-all delay-700 duration-700 ${visibilityClass}`}
          >
            <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500 dark:bg-gray-700/50 dark:text-gray-400">
              <span>
                Redirecting in
              </span>

              <div className="ml-1 flex h-5 w-8 items-center justify-center rounded bg-white dark:bg-gray-600">
                <span className="font-mono font-medium text-blue-600 dark:text-blue-400">
                  {timeLeft}
                </span>
              </div>

              <span className="ml-1">
                seconds
              </span>
            </div>
          </div>
        )}
      </div>

      {/* =========================================
          CUSTOM ANIMATION
      ========================================= */}

      <style jsx>{`
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 50;
            opacity: 0;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.1);
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-checkmark {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: checkmark 0.6s
            cubic-bezier(0.65, 0, 0.45, 1)
            forwards;
        }
      `}</style>
    </main>
  );
}