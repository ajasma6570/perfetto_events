"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, hover } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function page() {
  let images = ["intro.webp", "intro-2.webp", "intro-3.webp"];
  const [current, setCurrent] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFirstLoad(false);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="min-h-screen relative ">
        <AnimatePresence>
          <motion.div
            key={images[current]}
            className="absolute inset-0 w-full h-full"
            initial={firstLoad ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 5 }}
          >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <Image
              src={`/images/home/${images[current]}`}
              alt={`${images[current]} image`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <section className="relative z-20 flex flex-col min-h-screen max-w-[85rem] mx-auto">
          <Navbar />
          <div className="flex flex-1 flex-col justify-center items-center w-full space-y-10 max-w-[85rem] mx-auto absolute top-[30%]">
            <div className="text-[#FFA616] text-8xl font-semibold w-full space-y-4 max-w-6xl">
              <h1 className="tracking-tighter">Crafting Experiences,</h1>
              <h2 className="text-right pr-30 tracking-tighter">
                Not Just Events
              </h2>
            </div>

            <div className="flex justify-between items-center max-w-3xl w-full space-x-6">
              <div
                className={`${manrope.className} text-lg text-white font-medium`}
              >
                <p>From corporate summits to luxury weddings,</p>
                <p>Perfetto transforms your vision into reality.</p>
              </div>
              <button className="whitespace-nowrap border p-5 rounded-4xl text-white border-white font-semibold text-xl backdrop-blur-[1px]">
                Book your Free Consultation
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full text-white text-xl p-5 absolute bottom-15">
            <p
              className={`${manrope.className} flex gap-2 justify-center items-center`}
            >
              Scroll down
              <IoIosArrowRoundDown className="h-6 w-6" />
            </p>
            <ul className="flex space-x-6 text-2xl">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section
        className={`h-full py-20 transition-colors duration-500  ${
          hovered ? "bg-[#001A2E]" : "bg-white"
        }`}
      >
        <p
          className={`w-3xl mx-auto text-4xl leading-snug font-medium text-center transition-colors duration-500 ${
            hovered ? "text-white" : "text-[#00325B]"
          }`}
        >
          From grand launches to gatherings, <br />
          Perfetto{" "}
          <span className="inline-flex items-center justify-center">
            <img src="/images/logo-inline.webp" alt="" width={20} height={20} />
          </span>{" "}
          crafts events that inspire action,
          <br /> build loyalty, and transform your vision into <br />
          unforgettable experiences.
        </p>

        <div className="w-[85rem] mx-auto  mt-20 relative">
          <Image
            src={
              hovered
                ? "/images/home/vector-1.webp"
                : "/images/home/vector.webp"
            }
            alt="Victor"
            width={1400}
            height={513}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={hovered ? "preview-hover" : "preview"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-5 right-5 cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Image
                src={
                  hovered
                    ? "/images/home/vector-preview.webp"
                    : "/images/home/vector-1-preview.webp"
                }
                alt="Victor"
                width={330}
                height={180}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex w-[85rem] mx-auto mt-20">
          <ul
            className={cn(
              "w-1/2 text-4xl space-y-4 font-medium",
              hovered ? "text-white" : "text-[#00325B]"
            )}
          >
            <li>
              <span className="font-bold">75+</span> Clients
            </li>
            <li>
              <span className="font-bold">600+</span> Events
            </li>
          </ul>
          <ul className="w-1/2 space-y-10">
            <li
              className={cn(
                "text-xl",
                hovered ? "text-[#476794]" : "text-[#4B5563]"
              )}
            >
              We believe every brand has a story to tell one that is unique and
              personal. That’s where Perfetto Event Management steps in: to
              showcase that story to the world in a way that is unforgettable.
              From creative ideation and planning to flawless execution, we
              craft events that capture your vision and elevate it with our
              signature style.
            </li>
            <li>
              <button
                className={cn(
                  " border  py-5 px-7 rounded-full font-medium text-xl",
                  hovered
                    ? "bg-[#001A2E] text-white"
                    : "text-[#001A2E] border-[#F7931E]"
                )}
              >
                Discover who we are
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className="h-screen"></section>
    </>
  );
}
