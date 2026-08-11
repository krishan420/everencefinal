"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { selectServicesMarquee } from "@/data/servicesSelector";

const services = selectServicesMarquee();
const SPEED = 0.5;

export default function SecurityMarquee() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  const offset = useRef(0);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragStartOffset = useRef(0);

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    let raf;

    const loop = () => {
      if (!isPaused.current && !isDragging.current && trackRef.current) {
        offset.current += SPEED;

        const width = trackRef.current.scrollWidth / 2;
        if (offset.current >= width) offset.current = 0;

        trackRef.current.style.transform = `translateX(-${offset.current}px)`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ---------- DRAG HANDLERS ---------- */
  const startDrag = (x) => {
    isDragging.current = true;
    startX.current = x;
    dragStartOffset.current = offset.current;
  };

  const onDrag = (x) => {
    if (!isDragging.current) return;
    offset.current = dragStartOffset.current - (x - startX.current);
    trackRef.current.style.transform = `translateX(-${offset.current}px)`;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-orange-500 py-6 overflow-hidden">
      <div
        ref={wrapperRef}
        className="relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => {
          isPaused.current = false;
          stopDrag();
        }}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => onDrag(e.clientX)}
        onMouseUp={stopDrag}
        onMouseLeaveCapture={stopDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => onDrag(e.touches[0].clientX)}
        onTouchEnd={stopDrag}
      >
        <div
          ref={trackRef}
          className="flex whitespace-nowrap gap-10 px-6 select-none will-change-transform"
        >
          {[...services, ...services].map((service, i) => (
            <Link
              key={i}
              href={service.link}
              draggable={false}
              className="text-white font-semibold text-lg hover:underline"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
