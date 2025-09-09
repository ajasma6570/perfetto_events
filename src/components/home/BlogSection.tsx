import { blogs } from "@/static-data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function BlogSection() {
  return (
    <section className="bg-[#FAF8F5] pb-20">
      <div className="mx-auto max-w-[102rem] px-4 sm:px-6 py-12 sm:py-16">
        <p
          className={
            "inline-flex justify-start items-center w-full xl:w-5/12 gap-2 text-xl uppercase text-[#C4161C] font-light font-manrope"
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
          Blog
        </p>

        <h2 className="text-5xl lg:text-[55px] text-[#00325B] font-medium md:text-center lg:-translate-y-12">
          Event Trends, Tips & Stories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-6 max-w-[102rem] mx-auto  ">
        {blogs.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            href={`/blog/${item.slug}`}
            className="space-y-4 px-4 sm:px-6 hover:shadow-xl rounded-2xl transform transition-all duration-300"
          >
            <p className={"text-[#4E4E4E] text-xl font-medium font-manrope"}>
              Events | {item.date}
            </p>

            <div className="relative group cursor-pointer overflow-hidden rounded-xl w-full  h-56 sm:h-[300px]">
              <Image
                src={`/images/blog/${item.src}`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#C4161C] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            <p className="text-2xl md:text-[28px] font-medium text-[#001A2E] pr-10">
              {item.title}
            </p>

            <span className="text-2xl font-medium items-center text-[#4B5563] inline-flex">
              Read more <FaChevronRight size={15} />
            </span>
          </Link>
        ))}
      </div>

      <div className="flex px-6 md:justify-center mt-10 md:mt-20">
        <Link
          href={"/blog"}
          className="border   border-[#F7931E] text-[#001A2E] text-xl lg:text-2xl rounded-full w-auto py-4 lg:py-6 px-7 lg:px-10 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300"
        >
          Discover the Blog
        </Link>
      </div>
    </section>
  );
}
