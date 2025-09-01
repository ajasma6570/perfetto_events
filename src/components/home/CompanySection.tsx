"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CompanyOverview() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`h-full py-20 transition-colors duration-500  ${
        hovered ? "bg-[#001A2E]" : "bg-white"
      }`}
    >
      <p
        className={`w-6xl mx-auto text-[55px] leading-snug font-medium text-center transition-colors duration-500 ${
          hovered ? "text-white" : "text-[#00325B]"
        }`}
      >
        From grand launches to gatherings, <br />
        Perfetto{" "}
        <span className="inline-flex items-center justify-center">
          <img src="/images/logo-inline.webp" alt="" width={20} height={20} />
        </span>{" "}
        crafts events that inspire action,
        <br /> build loyalty, and transform your vision into <br />
        unforgettable experiences.
      </p>

      <div className="w-[102rem] mx-auto  mt-20 relative">
        <Image
          src={
            hovered ? "/images/home/vector-1.webp" : "/images/home/vector.webp"
          }
          alt="Victor"
          width={1700}
          height={513}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={hovered ? "preview-hover" : "preview"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-5 right-5 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={
                hovered
                  ? "/images/home/vector-preview.webp"
                  : "/images/home/vector-1-preview.webp"
              }
              alt="Preview"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex w-[102rem] mx-auto mt-20">
        <ul
          className={cn(
            "w-1/2 text-4xl space-y-4 font-medium",
            hovered ? "text-white" : "text-[#00325B]"
          )}
        >
          <li>
            <span className="font-bold">75+</span> Clients
          </li>
          <li>
            <span className="font-bold">600+</span> Events
          </li>
        </ul>
        <ul className="w-1/2 space-y-10">
          <li
            className={cn(
              "text-xl",
              hovered ? "text-[#476794]" : "text-[#4B5563]"
            )}
          >
            We believe every brand has a story to tell one that is unique and
            personal. That’s where Perfetto Event Management steps in: to
            showcase that story to the world in a way that is unforgettable.
            From creative ideation and planning to flawless execution, we craft
            events that capture your vision and elevate it with our signature
            style.
          </li>
          <li>
            <button
              className={cn(
                " border  py-5 px-7 rounded-full font-medium text-xl",
                hovered
                  ? "bg-[#001A2E] text-white"
                  : "text-[#001A2E] border-[#F7931E]"
              )}
            >
              Discover who we are
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
