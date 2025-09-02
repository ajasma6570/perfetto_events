import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function ContactPage() {
  return (
    <div className="pt-24 space-y-20">
      <div className="pt-24 flex justify-center flex-col items-center text-center space-y-4 max-w-6xl mx-auto">
        <p
          className={cn(
            "text-xl uppercase text-[#C4161C] font-light",
            manrope.className
          )}
        >
          our services
        </p>
        <p className="text-[55px] text-[#00325B] font-medium">
          The Services Behind Every Great Event
        </p>
        <p className="text-2xl text-[#4B5563] font-medium">
          Discover how we combine creativity, precision, and compliance to make
          events unforgettable. Our full spectrum of services are crafted to
          deliver impact, compliance, and unforgettable memories.
        </p>
      </div>
    </div>
  );
}
