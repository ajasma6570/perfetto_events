import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Hero() {
  // const desktopImages = ["intro.webp", "intro-2.webp", "intro-3.webp"];
  // const mobileImages = ["intro-sm.webp", "intro-sm-2.webp", "intro-sm-3.webp"];

  const [images, setImages] = useState([
    "intro.webp",
    "intro-2.webp",
    "intro-3.webp",
  ]);
  const [current, setCurrent] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFirstLoad(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={images[current]}
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(/images/home/${images[current]})` }}
          initial={firstLoad ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <section className="relative z-20 flex flex-col min-h-screen max-w-[102rem] mx-auto px-5 sm:px-6 2xl:px-0">
        <div className="flex flex-1 flex-col justify-center items-start md:items-center md:text-center w-full space-y-10 pt-40 md:pt-20">
          <h1 className="text-[#FFA616] font-manrope text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold leading-tight flex flex-col">
            <span className="tracking-tighter  md:-translate-x-24 lg:-translate-x-30 xl:-translate-x-30 2xl:-translate-x-36">
              Crafting Experiences,
            </span>
            <span className="tracking-tighter md:translate-x-28 lg:translate-x-24 xl:translate-x-40 2xl:translate-x-60">
              Not Just Events
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-16 w-full">
            <div
              className={`text-xl lg:text-2xl text-white font-medium space-y-2`}
            >
              <p>From corporate summits to luxury weddings,</p>
              <p>Perfetto transforms your vision into reality.</p>
            </div>
            <Link
              href={"/contact"}
              className="whitespace-nowrap border w-auto py-4 lg:py-6 px-7 lg:px-10 rounded-full text-white border-white font-semibold  text-lg md:text-lg lg:text-2xl backdrop-blur-[1px] hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300"
            >
              Book your Free Consultation
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full text-white text-lg md:text-xl px-4 sm:px-6 pb-36  mt-12">
          <button
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              })
            }
            aria-label="Scroll to bottom"
            className={`font-manrope gap-2 hidden md:flex justify-center items-center cursor-pointer  `}
          >
            Scroll down
            <IoIosArrowRoundDown className="h-6 w-6" />
          </button>
          <ul className="flex space-x-6 text-3xl">
            <li className="cursor-pointer">
              <FaInstagram />
            </li>
            <li className="cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="cursor-pointer">
              <FaXTwitter />
            </li>
            <li className="cursor-pointer">
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
