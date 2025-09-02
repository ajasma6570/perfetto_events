"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUpLong, FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function Footer() {
  return (
    <section className="bg-[#FAF8F5] pt-16 space-y-12">
      <div className="flex justify-center relative">
        <img src="/images/logo.webp" alt="Logo" width={230} height={69} />
      </div>
      <ul
        className={cn(
          "flex justify-center space-x-10 text-xl font-medium flex-wrap",
          manrope
        )}
      >
        <li className="hover:text-[#C4161C] cursor-pointer">Home</li>
        <li className="hover:text-[#C4161C] cursor-pointer">About Us</li>
        <li className="hover:text-[#C4161C] cursor-pointer">Our Services</li>
        <li className="hover:text-[#C4161C] cursor-pointer">Blog</li>
        <li className="hover:text-[#C4161C] cursor-pointer">Gallery</li>
        <li className="hover:text-[#C4161C] cursor-pointer">Contact Us</li>
      </ul>

      <ul className="flex justify-center space-x-10 text-xl">
        <li className="border rounded-full p-3 border-[#C4161C] text-[#F7A41E]">
          <FaInstagram size={35} />
        </li>
        <li className="border rounded-full p-3 border-[#C4161C] text-[#F7A41E]">
          <FaFacebookF size={35} />
        </li>
        <li className="border rounded-full p-3 border-[#C4161C] text-[#F7A41E]">
          <FaXTwitter size={35} />
        </li>
        <li className="border rounded-full p-3 border-[#C4161C] text-[#F7A41E]">
          <FaLinkedinIn size={35} />
        </li>
      </ul>

      <p
        className={cn(
          "text-xl w-full justify-center inline-flex items-center gap-1",
          manrope.className
        )}
      >
        © {new Date().getFullYear()} Perfetto Events. All rights reserved.
      </p>

      <div className="h-[71px] bg-[#001A2E]  flex justify-center items-center">
        <p
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "text-xl text-white text-center inline-flex items-center gap-1 cursor-pointer",
            manrope.className
          )}
        >
          Bottom reached. Back to the top.
          <FaArrowUpLong />
        </p>
      </div>
    </section>
  );
}
