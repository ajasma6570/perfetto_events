import React, { useEffect, useState } from "react";
import { Manrope } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function Hero() {
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
  return (
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
      <section className="relative z-20 flex flex-col min-h-screen max-w-[102rem] mx-auto">
        <Navbar />
        <div className="flex flex-1 flex-col justify-center items-center w-full space-y-16 max-w-[102rem] mx-auto absolute top-[30%]">
          <div className="text-[#FFA616] text-8xl font-semibold w-full space-y-4 max-w-6xl">
            <h1 className="tracking-tighter">Crafting Experiences,</h1>
            <h2 className="text-right pr-30 tracking-tighter">
              Not Just Events
            </h2>
          </div>

          <div className="flex justify-center items-center w-full space-x-16">
            <div
              className={`${manrope.className} text-xl text-white font-medium`}
            >
              <p>From corporate summits to luxury weddings,</p>
              <p>Perfetto transforms your vision into reality.</p>
            </div>
            <button className="whitespace-nowrap border py-5 px-8 rounded-4xl text-white border-white font-semibold text-xl backdrop-blur-[1px]">
              Book your Free Consultation
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full text-white text-xl p-5 absolute bottom-20">
          <p
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              })
            }
            className={`${manrope.className} flex gap-2 justify-center items-center cursor-pointer`}
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
  );
}
