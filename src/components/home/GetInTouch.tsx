import Image from "next/image";
import Link from "next/link";
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
          <p className="text-4xl lg:text-6xl font-medium text-white leading-tight">
            Plan your next <br /> event with us.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-6 items-start lg:items-center">
            <Link
              href={"/contact"}
              className="w-auto border border-white text-white text-xl lg:text-2xl rounded-full py-4 lg:py-6 px-7 lg:px-10 mt-6 lg:mt-12 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300"
            >
              Book Your Free Consultation
            </Link>
            <Link
              href={"/contact"}
              className="w-auto border border-white text-white text-xl lg:text-2xl rounded-full py-4 lg:py-6 px-7 lg:px-10 mt-4 lg:mt-12 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
