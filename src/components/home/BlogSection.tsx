import { cn } from "@/lib/utils";
import { i, section } from "motion/react-m";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function BlogSection() {
  const blogs = [
    {
      title: "Unlocking strategies of corporate tax 2023",
      date: "August 01, 2025",
      image: "event.webp",
    },
    {
      title:
        "Perfetto Events Unveils an Unforgettable Event for BSI Lifestyle Concierge",
      date: "August 01, 2025",
      image: "event-2.webp",
    },
    {
      title:
        "The Future of Hybrid Events: Blending Virtual and In-Person Experiences",
      date: "August 01, 2025",
      image: "event-3.webp",
    },
  ];
  return (
    <section className="bg-[#FAF8F5] h-screen">
      <div className="max-w-[102rem] mx-auto relative">
        <div
          className={cn(
            "inline-flex justify-start w-full items-center gap-2 text-xl uppercase text-[#C4161C] font-light mt-20",
            manrope.className
          )}
        >
          <Image
            src="/images/logo-inline.webp"
            alt="Logo"
            width={16}
            height={16}
          />
          <span>Blog</span>
        </div>

        <h2 className="text-[55px] text-[#00325B] font-medium text-center -translate-y-12">
          Event Trends, Tips & Stories
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-16 max-w-[102rem] mx-auto">
        {blogs.map((item, index) => (
          <div key={index} className="space-y-4">
            <p className={cn("text-[#4E4E4E] text-xl font-medium", manrope)}>
              Events | {item.date}
            </p>

            <div className="relative group cursor-pointer overflow-hidden rounded-xl w-full h-[300px]">
              <Image
                src={`/images/home/${item.image}`}
                alt={item.title}
                fill
                className="object-cover hover:scale-110 transform transition-all duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#C4161C] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            <p className="text-[28px] font-medium text-[#001A2E] pr-10">
              {item.title}
            </p>

            <span className="text-2xl font-medium items-center text-[#4B5563] inline-flex">
              Read more <FaChevronRight size={15} />
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="border  border-[#F7931E] text-[#001A2E] text-xl  rounded-full px-10 mt-12 py-6 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300">
          Discover the Blog
        </button>
      </div>
    </section>
  );
}
