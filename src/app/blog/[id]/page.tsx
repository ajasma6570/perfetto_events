import ProcessSection from "@/components/ProcessSection";
import { cn } from "@/lib/utils";
import { blogs } from "@/static-data/blogs";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function Page(props: Props) {
  const params = await props.params;
  const blog = blogs.find((b) => b.id === Number(params.id));

  if (!blog) {
    return (
      <div className="pt-24 flex justify-center items-center text-center">
        <h1 className="text-2xl font-semibold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-24 space-y-20">
      <div className="pt-24 flex justify-center flex-col items-center  max-w-[102rem] mx-auto mb-20">
        <p
          className={cn(
            "text-lg w-full max-w-2xl text-left text-[#4E4E4E]",
            manrope.className
          )}
        >
          Events | {blog.date}
        </p>
        <h1 className="text-3xl font-bold max-w-2xl mt-4">{blog.title}</h1>

        <div className="h-[400px] w-[800px] max-w-[102rem] relative mt-12">
          <Image
            src={`/images/blog/${blog.src}`}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-lg max-w-2xl mt-12 text-[#4B5563]">{blog.desc}</p>

        <div className="mt-10 flex gap-4 max-w-2xl w-full items-center bg-[#FAF8F5] p-8">
          <span className="text-2xl text-[#4B5563]">Share it on: </span>
          <div className="flex gap-8 text-[#00325B]">
            <FaFacebookF size={20} /> <FaXTwitter size={20} />{" "}
            <FaInstagram size={20} /> <FaLinkedinIn size={20} />
          </div>
        </div>
      </div>

      <ProcessSection />
    </div>
  );
}
