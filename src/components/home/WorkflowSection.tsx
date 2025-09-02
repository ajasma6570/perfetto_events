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
    <section className="h-[700px] relative">
      <Image
        src="/images/home/vector-3.webp"
        alt="Background"
        fill
        className="object-center"
      />

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[102rem] space-y-8">
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
        <div className="flex justify-between">
          <p className="text-[55px] text-white font-medium">
            What Goes on Behind the Scenes
          </p>
          <button className="border px-10 py-4 text-3xl rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] text-white border-white transform transition-all duration-300">
            Know the Process
          </button>
        </div>

        <div className="flex justify-around mt-20">
          {steps.map((item, index) => (
            <div
              key={index}
              className="h-[298px] w-[301px] border border-white rounded-xl flex flex-col items-center justify-center space-y-4"
            >
              <div className="h-[108px] w-[108px] border border-white rounded-full flex justify-center items-center text-6xl">
                <Image
                  src={`/images/icons/${item.src}`}
                  alt={`${item.title} Icon`}
                  height={55}
                  width={55}
                />
              </div>
              <p className="text-white font-medium text-[33px]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
