"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);

  const routes = [
    { name: "Home", path: "/" },
    { name: "What We Do", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest("button") // ignore toggle button clicks
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute z-50 top-0 left-0 w-full bg-transparent">
      <div className="max-w-[102rem] w-full mx-auto flex justify-between items-center px-5 sm:px-6 py-5">
        <ul>
          <li>
            <Link href="/">
              <div className="relative w-[180px] lg:w-[200px] xl:w-[205px] h-[69px]">
                <Image
                  src="/images/logo.webp"
                  alt="Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 150px, (max-width: 1024px) 180px, 205px"
                  className="object-contain"
                />
              </div>
            </Link>
          </li>
        </ul>

        <ul className="text-white md:space-x-5 xl:space-x-14 text-xl lg:text-lg xl:text-xl items-center hidden lg:flex">
          {routes.map((route) => {
            const isActive = pathname === route.path;

            return (
              <li
                key={route.name}
                className={cn(
                  "tracking-tight cursor-pointer transition-colors duration-300",
                  {
                    "text-red-700": isActive,
                    "text-white hover:text-red-700":
                      !isActive && pathname === "/",
                    "text-[#00325B] hover:text-red-700":
                      !isActive && pathname !== "/",
                  }
                )}
              >
                <Link href={route.path}>{route.name}</Link>
              </li>
            );
          })}

          <li>
            <Link href="/contact">
              <button
                className={cn(
                  "w-auto px-4 py-1 lg:px-6 lg:py-2.5 text-xl border rounded-3xl cursor-pointer tracking-tight transition-all duration-300",
                  {
                    "text-red-700 border-red-700 hover:bg-[#C4161C] hover:text-white":
                      pathname === "/contact",

                    "text-white border-white hover:border-red-700 hover:bg-[#C4161C]":
                      pathname === "/",

                    "text-[#00325B] border-[#00325B] hover:border-[#C4161C] hover:bg-[#C4161C] hover:text-white":
                      pathname !== "/" && pathname !== "/contact",
                  }
                )}
              >
                Contact Us
              </button>
            </Link>
          </li>
        </ul>

        <button
          className="text-[#00325B] lg:hidden z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={40} /> : <IoMenu size={40} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ y: "-80%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-80%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 bg-[#174880] h-[80vh] lg:h-[90vh] flex flex-col justify-center items-center text-white space-y-6 text-3xl"
            >
              <ul className="space-y-6 text-center">
                {routes.map((route) => (
                  <li
                    key={route.name}
                    className={cn("cursor-pointer", {
                      "text-red-700": pathname === route.path,
                    })}
                  >
                    <Link href={route.path} onClick={() => setIsOpen(false)}>
                      {route.name}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button className="py-3 px-6 text-3xl border rounded-3xl">
                      Contact Us
                    </button>
                  </Link>
                </li>
              </ul>

              <div className="flex space-x-6 mt-8">
                <a href="#" className="border p-3 rounded-full">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="border p-3 rounded-full">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="border p-3 rounded-full">
                  <FaXTwitter size={18} />
                </a>
                <a href="#" className="border p-3 rounded-full">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
