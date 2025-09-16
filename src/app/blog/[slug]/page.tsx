import ProcessSection from "@/components/ProcessSection";
import { cn } from "@/lib/utils";
import { blogs } from "@/static-data/blogs";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  const blog = blogs.find((blog) => blog?.slug === params?.slug);

  if (blog) {
    return {
      title: `${blog?.title || "Single blog Page"} | ${siteName}`,
      description: `${blog?.description?.slice(0, 136)}...`,
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      alternates: {
        canonical: `${siteURL}/cloud/${blog?.slug}`,
      },
      openGraph: {
        title: `${blog?.title} | ${siteName}`,
        description: blog?.description,
        url: `${siteURL}/blog/${blog?.slug}`,
        siteName: siteName,
        locale: "en_US",
        type: "article",
        images: [
          {
            url: `${siteURL}/images/opengraph/300x300.png`,
            width: 300,
            height: 300,
            alt: `${blog?.title} | ${siteName}`,
          },
          {
            url: `${siteURL}/images/opengraph/1200x627.png`,
            width: 1200,
            height: 627,
            alt: `${blog?.title} | ${siteName}`,
          },
          {
            url: `${siteURL}/images/opengraph/1200x630.png`,
            width: 1200,
            height: 630,
            alt: `${blog?.title} | ${siteName}`,
          },
          {
            url: `${siteURL}/images/opengraph/1200x675.png`,
            width: 1200,
            height: 675,
            alt: `${blog?.title} | ${siteName}`,
          },
          {
            url: `${siteURL}/images/opengraph/1080x1080.png`,
            width: 1080,
            height: 1080,
            alt: `${blog?.title} | ${siteName}`,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: `${blog?.title} | ${siteName}`,
        description: `${blog?.description?.slice(0, 136)}...`,
        creator: `@${authorName}`,
        site: `@${siteName}`,
        url: `${siteURL}/blog/${blog?.slug}`,
        images: [`${siteURL}/images/opengraph/1080x1080.png`],
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

export default async function Page(props: Props) {
  const params = await props.params;

  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="pt-24 flex justify-center items-center text-center">
        <h1 className="text-2xl font-semibold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-14 lg:pt-24 space-y-20">
      <div className="pt-24 flex justify-center flex-col items-center max-w-[102rem] mx-auto mb-20 px-6">
        <p className="text-lg w-full max-w-4xl text-left text-[#4E4E4E]">
          Events | {blog.date}
        </p>
        <h1 className="text-3xl text-left font-bold w-full max-w-4xl mt-4 text-[#001A2E]">
          {blog.title}
        </h1>

        <div className="relative w-full max-w-5xl h-[250px] sm:h-[350px] md:h-[400px] mt-12">
          <Image
            src={`/images/blog/${blog.src}`}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <p className="text-lg max-w-4xl mt-12 text-[#4B5563] font-normal">
          {blog.description}
        </p>

        <div className="mt-10 flex gap-4 max-w-4xl w-full items-center bg-[#FAF8F5] p-8">
          <span className="text-lg sm:text-xl text-[#4B5563]">
            Share it on:{" "}
          </span>
          <div className="flex gap-8 text-[#00325B]">
            <Link href="#" target="_blank">
              <FaFacebookF className="text-lg sm:text-xl" />
            </Link>
            <Link href="#" target="_blank">
              <FaXTwitter className="text-xl" />
            </Link>
            <Link href="#" target="_blank">
              <FaInstagram className="text-xl" />
            </Link>
            <Link href="#" target="_blank">
              <FaLinkedinIn className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      <ProcessSection />
    </div>
  );
}
