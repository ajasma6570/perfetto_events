import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function WorkflowSection() {
  const steps = [
    {
      title: "Briefing",
      src: "icon.webp",
    },
    {
      title: "Conceptualization",
      src: "icon-2.webp",
    },
    {
      title: "Planning",
      src: "icon-3.webp",
    },
    {
      title: "Execution",
      src: "icon-4.webp",
    },
    {
      title: "Evaluation",
      src: "icon-5.webp",
    },
  ];
  return (
    <section className="relative">
      <Image
        src="/images/home/vector-3.webp"
        alt="Background"
        fill
        priority
        className="object-cover object-center md:block hidden"
      />
      <Image
        src="/images/home/vector-3-sm.webp"
        alt="Background"
        fill
        priority
        className="object-cover object-center md:hidden block"
      />

      <div className="relative mx-auto max-w-[102rem] px-4 sm:px-6 py-16 sm:py-20">
        <p
          className={cn(
            " inline-flex justify-start items-center w-5/12 gap-2 text-xl uppercase text-white font-light",
            manrope.className
          )}
        >
          <span>
            <Image
              src="/images/logo-inline.webp"
              alt="Logo"
              width={16}
              height={16}
            />
          </span>
          What we do
        </p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <p className="text-[55px] text-white font-medium">
            What Goes on Behind the Scenes
          </p>
          <button className="self-stretch xl:block hidden sm:self-auto border px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-2xl rounded-full text-white border-white hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300">
            Know the Process
          </button>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white group hover:border-white/10 hover:bg-white/10  hover:backdrop-blur-sm flex flex-col justify-center items-center text-center p-6 sm:p-7 min-h-[210px] sm:min-h-[298px] transform transition-all duration-300"
            >
              <div className="h-16 w-16 sm:h-20 sm:w-20 border group-hover:bg-[#F7A41E] group-hover:border-[#F7A41E] border-white rounded-full flex items-center justify-center transform transition-all duration-300">
                <Image
                  src={`/images/icons/${item.src}`}
                  alt={`${item.title} Icon`}
                  height={55}
                  width={55}
                />
              </div>
              <p className="mt-4 sm:mt-5 text-white font-medium text-xl sm:text-2xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <button className="self-stretch mt-4 xl:hidden sm:self-auto border px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-2xl rounded-full text-white border-white hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300">
          Know the Process
        </button>
      </div>
    </section>
  );
}
