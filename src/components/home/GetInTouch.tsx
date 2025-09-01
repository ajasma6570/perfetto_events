import { section } from "motion/react-m";
import Image from "next/image";
import React from "react";

export default function GetInTouch() {
  return (
    <section className="relative h-[570px]">
      <Image
        src="/images/home/event-4.webp"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[102rem]">
          <p className="text-[55px] font-medium text-white w-lg leading-tight">
            Plan your next event with us.
          </p>
          <div className="flex gap-6">
            <button className="border  border-white text-white text-xl  rounded-full px-10 mt-12 py-6 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300">
              Book Your Free Consultation
            </button>{" "}
            <button className="border  border-white text-white text-xl  rounded-full px-10 mt-12 py-6 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
