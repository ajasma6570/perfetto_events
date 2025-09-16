import { workflowSteps } from "@/static-data/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkflowSection() {
  return (
    <section className="relative">
      <Image
        src="/images/home/vector-3.webp"
        alt="Background"
        fill
        priority
        sizes="(min-width: 768px) 100vw, 0px"
        className="object-cover object-center md:block hidden"
      />
      <Image
        src="/images/home/vector-3-sm.webp"
        alt="Background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 0px"
        className="object-cover object-center md:hidden block"
      />

      <div className="relative mx-auto max-w-[102rem] px-6 py-16 sm:py-20">
        <p
          className={
            " inline-flex justify-start items-center w-5/12 gap-2 text-xl uppercase text-white font-light font-manrope"
          }
        >
          <span className="relative w-5 h-6">
            <Image
              src="/images/logo-inline.webp"
              alt="Logo"
              fill
              sizes="24px"
              className="object-contain"
            />
          </span>
          What we do
        </p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <p className="text-4xl lg:text-6xl text-white font-medium">
            What Goes on Behind the Scenes
          </p>
          <Link
            href={"/contact"}
            className="self-stretch xl:block hidden sm:self-auto border w-auto py-4 lg:py-6 px-7 lg:px-10 text-xl lg:text-2xl rounded-full font-medium text-white border-white hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300"
          >
            Know the Process
          </Link>
        </div>

        <div className="my-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {workflowSteps.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white md:group md:hover:border-white/10 md:hover:bg-white/10  md:hover:backdrop-blur-sm flex flex-col justify-center items-center text-center p-6 sm:p-7 min-h-[210px] sm:min-h-[298px] transform transition-all duration-300"
            >
              <div className="h-16 w-16 sm:h-20 sm:w-20 border group-hover:bg-[#F7A41E] group-hover:border-[#F7A41E] border-white rounded-full flex items-center justify-center transform transition-all duration-300">
                <Image
                  src={`/images/icons/${item.src}`}
                  alt={`${item.title} Icon`}
                  height={55}
                  width={55}
                  sizes="55px"
                  className="p-1"
                />
              </div>
              <p className="mt-4 sm:mt-5 text-white font-medium text-xl sm:text-2xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={"/contact"}
          className="self-stretch mt-10 xl:hidden sm:self-auto border w-auto py-4 lg:py-6 px-7 lg:px-10 text-xl lg:text-2xl font-medium rounded-full text-white border-white hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300"
        >
          Know the Process
        </Link>
      </div>
    </section>
  );
}
