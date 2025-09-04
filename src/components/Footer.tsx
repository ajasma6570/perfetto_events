"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUpLong, FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] pt-12 sm:pt-16 space-y-10 sm:space-y-12">
      <div className="flex justify-center">
        <Image
          src="/images/logo.webp"
          alt="Perfetto logo"
          width={230}
          height={69}
          priority
        />
      </div>

      <nav aria-label="Footer" className="px-4 sm:px-6">
        <ul
          className={cn(
            "grid grid-cols-3 gap-x-6 gap-y-4 text-base sm:text-lg md:text-xl font-medium",
            "md:flex md:justify-center md:space-x-10",
            manrope.className
          )}
        >
          <li className="justify-self-center md:justify-self-auto hover:text-[#C4161C]">
            <Link href="/">Home</Link>
          </li>
          <li className="justify-self-center md:justify-self-auto hover:text-[#C4161C]">
            <Link href="/about">About Us</Link>
          </li>
          <li className="justify-self-center md:justify-self-auto hover:text-[#C4161C]">
            <Link href="/services">Our Services</Link>
          </li>
          <li className="justify-self-center md:justify-self-auto hover:text-[#C4161C]">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="justify-self-center md:justify-self-auto hover:text-[#C4161C]">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="justify-self-center md:justify-self-auto hover:text-[#C4161C]">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <ul className="flex justify-center gap-4 sm:gap-6">
        {[
          {
            icon: <FaInstagram size={22} />,
            label: "Instagram",
            href: "https://instagram.com",
          },
          {
            icon: <FaFacebookF size={22} />,
            label: "Facebook",
            href: "https://facebook.com",
          },
          {
            icon: <FaXTwitter size={22} />,
            label: "X (Twitter)",
            href: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn size={22} />,
            label: "LinkedIn",
            href: "https://linkedin.com",
          },
        ].map((s, i) => (
          <li key={i}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#C4161C] text-[#F7A41E] hover:translate-y-[-1px] transition-transform"
            >
              {s.icon}
            </a>
          </li>
        ))}
      </ul>

      <p
        className={cn(
          "text-sm sm:text-base text-center px-4",
          manrope.className
        )}
      >
        © {new Date().getFullYear()} Perfetto Events. All rights reserved.
      </p>

      <div className="h-[56px] sm:h-[64px] bg-[#001A2E] flex justify-center items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "text-white text-sm sm:text-base inline-flex items-center gap-2",
            "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-md px-2",
            manrope.className
          )}
          aria-label="Back to top"
        >
          Bottom reached. Back to the top. <FaArrowUpLong />
        </button>
      </div>
    </footer>
  );
}
