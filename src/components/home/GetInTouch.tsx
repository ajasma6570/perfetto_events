import { section } from "motion/react-m";
import Image from "next/image";
import React from "react";

export default function GetInTouch() {
  return (
    <section className="relative h-[570px] ">
      <Image
        src="/images/home/event-4.webp"
        alt="Background"
        fill
        priority
        className="object-cover object-center hidden lg:block"
      />

      <Image
        src="/images/home/event-4-sm.webp"
        alt="Background"
        fill
        priority
        className="object-cover object-center lg:hidden"
      />

      <div className="absolute inset-0 flex items-end lg:items-center justify-center px-4 lg:px-6 py-10">
        <div className="w-full max-w-[102rem] mx-auto">
          <p className="text-5xl lg:text-[55px] font-medium text-white leading-tight">
            Plan your next <br /> event with us.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-6 items-start lg:items-center">
            <button className="w-auto border border-white text-white text-base sm:text-lg lg:text-xl rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 mt-6 lg:mt-12 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300">
              Book Your Free Consultation
            </button>
            <button className="w-auto border border-white text-white text-base sm:text-lg lg:text-xl rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 mt-4 lg:mt-12 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
