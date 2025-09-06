"use client";

import GetInTouch from "@/components/home/GetInTouch";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function GalleryPage() {
  const [selectedTab, setSelectedTab] = useState("all");

  const tabs = [
    {
      title: "All",
      value: "all",
    },
    {
      title: "Conferences & Exhibitions",
      value: "conferences",
    },
    {
      title: "Destination Meetings",
      value: "destination",
    },
    {
      title: "Product Launches & Activations",
      value: "product-launches",
    },
    {
      title: "Hybrid Events",
      value: "hybrid-events",
    },
    {
      title: "Weddings & Private Events",
      value: "weddings",
    },
  ];

  const gallery = [
    {
      id: 1,
      type: "Conferences & Exhibitions",
      title: "Meeting Name 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector.webp",
    },
    {
      id: 2,
      type: "Destination Meetings",
      title: "Meeting Name 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector-2.webp",
    },
    {
      id: 3,
      type: "Conferences & Exhibitions",
      title: "Meeting Name 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector-3.webp",
    },
    {
      id: 4,
      type: "Destination Meetings",
      title: "Meeting Name 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector-4.webp",
    },
    {
      id: 5,
      type: "Product Launches & Activations",
      title: "Meeting Name 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector-5.webp",
    },
    {
      id: 6,
      type: "Product Launches & Activations",
      title: "Meeting Name 6",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector-6.webp",
    },
    {
      id: 7,
      type: "Destination Meetings",
      title: "Meeting Name 7",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector-7.webp",
    },
    {
      id: 8,
      type: "Hybrid Events",
      title: "Meeting Name 8",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector-8.webp",
    },
    {
      id: 9,
      type: "Weddings & Private Events",
      title: "Meeting Name 9",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "vector-9.webp",
    },
  ];

  // Modal state and handlers
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleOpenModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);
  const handlePrevModal = () =>
    setModalIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNextModal = () =>
    setModalIndex((prev) =>
      prev < filteredGallery.length - 1 ? prev + 1 : prev
    );

  // Filter gallery by selected tab
  const filteredGallery =
    selectedTab === "all"
      ? gallery
      : gallery.filter((item) => {
          if (selectedTab === "conferences")
            return item.type === "Conferences & Exhibitions";
          if (selectedTab === "destination")
            return item.type === "Destination Meetings";
          if (selectedTab === "product-launches")
            return item.type === "Product Launches & Activations";
          if (selectedTab === "hybrid-events")
            return item.type === "Hybrid Events";
          if (selectedTab === "weddings")
            return item.type === "Weddings & Private Events";
          return false;
        });

  return (
    <div className="pt-24 space-y-20 ">
      <div className="pt-24 flex justify-center flex-col items-center text-center space-y-4 max-w-6xl mx-auto px-6">
        <p
          className={cn(
            "text-xl uppercase text-[#C4161C] font-light",
            manrope.className
          )}
        >
          gallery
        </p>
        <h1 className="text-5xl lg:text-6xl text-[#00325B] font-medium">
          Gallery of Work
        </h1>
        <p className="text-2xl text-[#4B5563] font-medium">
          Explore the highlights of conferences, exhibitions, weddings, product
          launches, and destination events we’ve had the honor of delivering.
        </p>
      </div>

      <div className="mt-20 w-full max-w-[102rem] mx-auto  px-6">
        <div className="flex justify-start lg:justify-center gap-1 overflow-x-auto space-x-5">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={cn(
                "px-5 border hover:border-[#C4161C] rounded-full text-xl cursor-pointer whitespace-nowrap transition-all duration-300",
                selectedTab === tab.value
                  ? "border-[#C4161C]"
                  : "border-transparent"
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-14"
          >
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                className="relative h-[600px] w-full group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => handleOpenModal(idx)}
              >
                <Image
                  src={`/images/gallery/${item.src}`}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-fill transform transition-all duration-500 ease-in-out group-hover:scale-110"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                />

                <div className="absolute bottom-0 gap-2 left-0 w-full h-[50%] bg-gradient-to-t from-[#C4161C] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start justify-end px-5 pb-8">
                  <p className="text-white rounded-full  text-lg font-medium">
                    {item.type}
                  </p>
                  <p className="text-white rounded-full text-3xl font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <GetInTouch />

      {modalOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={handleCloseModal}
          />
          <div className="relative= w-full h-screen  overflow-hidden z-10 bg-black/80">
            <div className="w-full max-w-[102rem] mx-auto pt-28">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-[40vh] md:h-[60vh] md:w-1/2 w-full">
                  <Image
                    src={`/images/gallery/${filteredGallery[modalIndex].src}`}
                    alt={filteredGallery[modalIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 md:p-8 text-white backdrop-blur-sm md:w-1/2 w-full flex flex-col justify-start">
                  <p className="text-sm uppercase tracking-wide text-white/70 mb-2">
                    {filteredGallery[modalIndex].type}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8">
                    {filteredGallery[modalIndex].title}
                  </h3>
                  <p className="text-base md:text-lg">
                    {filteredGallery[modalIndex].desc}
                  </p>
                </div>
              </div>
              <button
                aria-label="Close"
                className="absolute top-5 right-8 cursor-pointer inline-flex text-5xl  items-center justify-center rounded-full text-white "
                onClick={handleCloseModal}
              >
                ×
              </button>
              <button
                aria-label="Previous"
                className="absolute left-8 top-1/2 cursor-pointer -translate-y-1/2 inline-flex items-center justify-center rounded-full  text-white "
                onClick={handlePrevModal}
                disabled={modalIndex === 0}
              >
                <FaChevronLeft className="h-8 w-8" />
              </button>
              <button
                aria-label="Next"
                className="absolute right-8 top-1/2 cursor-pointer -translate-y-1/2 inline-flex items-center justify-center rounded-full text-white"
                onClick={handleNextModal}
                disabled={modalIndex === filteredGallery.length - 1}
              >
                <FaChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
