"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CompanyOverview() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 768)
      setHovered(true);
  };
  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 768)
      setHovered(false);
  };

  return (
    <section
      className={`h-full pt-20 pb-10 transition-colors duration-500 px-5 sm:px-6 ${
        hovered ? "bg-[#001A2E]" : "bg-white"
      }`}
    >
      <h2
        className={`xl:w-7xl mx-auto text-2xl lg:text-5xl leading-snug font-medium text-center transition-colors duration-500 ${
          hovered ? "text-white" : "text-[#00325B]"
        }`}
      >
        From grand launches to gatherings, <br className="hidden md:block" />
        Perfetto{" "}
        <span className="inline-flex items-center justify-center">
          <img src="/images/logo-inline.webp" alt="" width={20} height={20} />
        </span>{" "}
        crafts events that inspire action,
        <br className="hidden md:block" /> build loyalty, and transform your
        vision into <br className="hidden md:block" />
        unforgettable experiences.
      </h2>

      <div className="w-full max-w-[102rem] mx-auto  mt-20 relative">
        <Image
          src={
            hovered ? "/images/home/vector-1.webp" : "/images/home/vector.webp"
          }
          alt="Victor"
          width={1700}
          height={513}
          className="hidden md:block"
        />

        <Image
          src={
            hovered
              ? "/images/home/vector-1.webp"
              : "/images/home/vector-sm.webp"
          }
          alt="Victor"
          width={1700}
          height={513}
          className=" md:hidden"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={hovered ? "preview-hover" : "preview"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-5 right-5 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

      <div className="flex md:flex-row flex-col w-full max-w-[102rem] mx-auto mt-20 space-y-12 md:space-y-0">
        <ul
          className={cn(
            "w-full gap-2 lg:gap-4 md:w-4/12 xl:w-1/2 text-2xl sm:text-4xl lg:text-5xl md:space-y-4 font-medium flex flex-row md:flex-col md:justify-start md:items-start justify-between items-center",
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
        <ul className="w-full flex md:justify-start md:items-start justify-center flex-col items-start md:w-8/12 xl:w-1/2 space-y-10">
          <li
            className={cn(
              "text-xl lg:text-2xl",
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
                "self-start border w-auto py-4 lg:py-6 px-7 lg:px-10 rounded-full font-medium text-xl lg:text-2xl hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300",
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
