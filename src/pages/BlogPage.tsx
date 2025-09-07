"use client";

import ProcessSection from "@/components/ProcessSection";
import { cn } from "@/lib/utils";
import { blogs } from "@/static-data/blogs";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function BlogPage() {
  const router = useRouter();

  function handleBlogClick(blogId: string) {
    router.push(`/blog/${blogId}`);
  }

  return (
    <div className="pt-24 space-y-20">
      <div className="pt-24 flex justify-center flex-col items-center text-center space-y-4 mx-auto px-6">
        <p
          className={cn(
            "text-xl uppercase text-[#C4161C] font-light",
            manrope.className
          )}
        >
          Blog
        </p>
        <p className="text-5xl lg:text-6xl text-[#00325B] font-medium">
          The Latest from Perfetto
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[102rem] mx-auto mb-20">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => handleBlogClick(blog.slug)}
            className="p-4 flex flex-col relative group overflow-hidden cursor-pointer hover:shadow-xl rounded-2xl"
          >
            <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9]">
              <Image
                src={`/images/blog/${blog.src}`}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                priority={false}
              />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#C4161C] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"></div>{" "}
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-[28px] leading-tight font-medium mt-2 text-[#001A2E]">
              {blog.title}
            </h3>

            <div className="mt-auto flex flex-col items-start space-y-2.5 pt-2">
              <p className="text-[22px] text-[#4E4E4E]">Events | {blog.date}</p>
              <button
                onClick={() => handleBlogClick(blog.slug)}
                className="self-start border border-[#F7931E] cursor-pointer text-[#001A2E] px-5 lg:px-10 py-3 rounded-full group-hover:text-white group-hover:bg-[#c4161c] group-hover:border-[#c4161c] transform transition-all duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProcessSection />
    </div>
  );
}
