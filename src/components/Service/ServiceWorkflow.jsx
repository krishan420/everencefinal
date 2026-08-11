"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import RichText from "@/components/RichText";

/* =========================================================
   SERVICE WORKFLOW
========================================================= */

export default function ServiceWorkflow({ data }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 30%"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  /* Prevent errors if data is missing */
  if (
    !data ||
    !Array.isArray(data.steps) ||
    data.steps.length === 0
  ) {
    return null;
  }

  const {
    title,
    subtitle,
    steps,
    background,
  } = data;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 md:py-16"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      {background?.type === "image" &&
        background?.src && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${background.src}")`,
            }}
          />
        )}

      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      {background?.type === "video" &&
        background?.src && (
          <video
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            src={background.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}

      {/* =====================================================
          BACKGROUND OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        {(title || subtitle) && (
          <div className="mx-auto max-w-3xl text-center">

            {title && (
              <h2 className="text-3xl font-bold text-[#757373] md:text-4xl">
                <RichText content={title} />
              </h2>
            )}

            {subtitle && (
              <div className="mt-3 text-base leading-relaxed text-gray-600">
                <RichText content={subtitle} />
              </div>
            )}

          </div>
        )}

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-10 md:mt-14">

          {/* BASE TIMELINE LINE */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-4
              w-[2px]
              -translate-x-1/2
              bg-gray-300
              md:left-1/2
            "
            style={{
              top: "28px",
              height: "calc(100% - 56px)",
            }}
          />

          {/* ACTIVE SCROLL LINE */}

          <motion.div
            aria-hidden="true"
            className="
              absolute
              left-4
              w-[2px]
              origin-top
              -translate-x-1/2
              bg-orange-500
              md:left-1/2
            "
            style={{
              top: "28px",
              height: lineHeight,
            }}
          />

          {/* TIMELINE ITEMS */}

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <TimelineItem
                key={`${step?.title || "step"}-${index}`}
                step={step}
                index={index}
                progress={scrollYProgress}
                total={steps.length}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TIMELINE ITEM
========================================================= */

function TimelineItem({
  step,
  index,
  progress,
  total,
}) {
  const isLeft = index % 2 === 0;

  const start =
    total > 0 ? index / total : 0;

  const end =
    total > 0
      ? Math.min(
          (index + 0.25) / total,
          1
        )
      : 1;

  const dotColor = useTransform(
    progress,
    [start, end],
    ["#9ca3af", "#f97316"]
  );

  const points = Array.isArray(step?.points)
    ? step.points
    : [];

  return (
    <div className="relative flex flex-col items-start md:flex-row md:items-center">

      {/* ================= DOT ================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-4
          z-10
          -translate-x-1/2
          md:left-1/2
        "
      >
        <motion.span
          style={{
            backgroundColor: dotColor,
          }}
          className="
            block
            h-3.5
            w-3.5
            rounded-full
            border-4
            border-white
            shadow
          "
        />
      </div>

      {/* ================= MOBILE CARD ================= */}

      <div className="w-full pl-12 md:hidden">
        <TimelineCardMobile
          title={step?.title}
          points={points}
        />
      </div>

      {/* ================= DESKTOP LEFT ================= */}

      <div className="hidden w-1/2 justify-end pr-8 md:flex">

        {isLeft ? (
          <TimelineCard
            points={points}
            side="left"
          />
        ) : (
          <TimelineTitle
            title={step?.title}
            align="right"
          />
        )}

      </div>

      {/* ================= DESKTOP RIGHT ================= */}

      <div className="hidden w-1/2 pl-8 md:flex">

        {!isLeft ? (
          <TimelineCard
            points={points}
            side="right"
          />
        ) : (
          <TimelineTitle
            title={step?.title}
            align="left"
          />
        )}

      </div>

    </div>
  );
}

/* =========================================================
   TIMELINE TITLE
========================================================= */

function TimelineTitle({
  title,
  align = "left",
}) {
  if (!title) {
    return null;
  }

  return (
    <motion.h3
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`
        max-w-md
        text-base
        font-semibold
        text-gray-900

        ${
          align === "right"
            ? "text-right"
            : "text-left"
        }
      `}
    >
      <RichText content={title} />
    </motion.h3>
  );
}

/* =========================================================
   DESKTOP TIMELINE CARD
========================================================= */

function TimelineCard({
  points = [],
  side = "left",
}) {
  if (!points.length) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        relative
        w-full
        max-w-md
        rounded-xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-md
        transition-shadow
        duration-300
        hover:shadow-lg
      "
    >

      {/* CARD ARROW */}

      <span
        aria-hidden="true"
        className={`
          absolute
          top-1/2
          h-3
          w-3
          -translate-y-1/2
          rotate-45
          border
          border-gray-200
          bg-white

          ${
            side === "left"
              ? "-right-[6px] border-b-0 border-l-0"
              : "-left-[6px] border-r-0 border-t-0"
          }
        `}
      />

      {/* POINTS */}

      <TimelinePoints points={points} />

    </motion.div>
  );
}

/* =========================================================
   MOBILE TIMELINE CARD
========================================================= */

function TimelineCardMobile({
  title,
  points = [],
}) {
  return (
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
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        rounded-xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-md
      "
    >

      {/* TITLE */}

      {title && (
        <h3 className="mb-3 font-semibold text-gray-900">
          <RichText content={title} />
        </h3>
      )}

      {/* POINTS */}

      <TimelinePoints points={points} />

    </motion.div>
  );
}

/* =========================================================
   SHARED TIMELINE POINTS
========================================================= */

function TimelinePoints({
  points = [],
}) {
  if (!points.length) {
    return null;
  }

  return (
    <ul className="space-y-3 text-sm leading-relaxed text-gray-700">

      {points.map((point, index) => {

        /* =============================================
           FORMAT 1

           "points": [
             "Normal text here"
           ]

           FORMAT 2

           "points": [
             {
               "text": "Digital Forensic Assessments",
               "link": "/services/digital-forensic-assessments"
             }
           ]
        ============================================== */

        const isObject =
          point !== null &&
          typeof point === "object" &&
          !Array.isArray(point);

        const pointText = isObject
          ? point?.text || ""
          : point || "";

        const pointLink = isObject
          ? point?.link
          : null;

        return (
          <li
            key={`${pointText}-${index}`}
            className="flex items-start gap-2"
          >

            {/* BULLET */}

            <span
              aria-hidden="true"
              className="
                mt-[2px]
                shrink-0
                text-base
                leading-none
                text-orange-500
              "
            >
              •
            </span>

            {/* POINT CONTENT */}

            <div className="min-w-0 flex-1">

              {/* LINKED POINT */}

              {pointLink ? (
                <Link
                  href={pointLink}
                  className="
                    text-gray-700
                    transition-colors
                    duration-200
                    hover:text-orange-500
                    hover:underline
                  "
                >
                  <RichText content={pointText} />
                </Link>
              ) : (

                /* NORMAL / RICH TEXT POINT */

                <RichText content={pointText} />

              )}

            </div>

          </li>
        );
      })}

    </ul>
  );
}