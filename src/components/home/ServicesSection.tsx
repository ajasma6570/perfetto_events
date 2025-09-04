import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function ServicesOverview() {
  const eventManagement = [
    {
      title: "Conferences, Exhibitions and Destination Meetings",
      src: "event-1.webp",
    },
    {
      title: "Product Launches",
      src: "event-2.webp",
    },
    {
      title: "Hybrid Events – The New Normal",
      src: "event-3.webp",
    },
  ];

  const eventPermits = [
    {
      title: "DTCM Event Permits",
      src: "event-permits.webp",
    },
    {
      title: "Entertainment Permits",
      src: "event-permits-1.webp",
    },
  ];

  const [selectedService, setSelectedService] = useState<
    "event-management" | "event-permits"
  >("event-management");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const eventManagementRef = useRef<HTMLButtonElement>(null);
  const eventPermitsRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const activeRef =
      selectedService === "event-management"
        ? eventManagementRef.current
        : eventPermitsRef.current;

    if (activeRef) {
      setIndicatorStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
      });
    }
  }, [selectedService]);

  const servicesToShow =
    selectedService === "event-management" ? eventManagement : eventPermits;

  return (
    <section className="h-full py-20 bg-[#FAF8F5] px-5 sm:px-6">
      <div className="w-full max-w-[102rem] mx-auto lg:py-20 flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0">
        <p
          className={cn(
            " inline-flex justify-start items-center w-full lg:w-5/12 gap-2 text-xl uppercase text-[#C4161C] font-light",
            manrope.className
          )}
        >
          <span>
            <Image
              src="/images/logo-inline.webp"
              alt="Logo"
              width={16}
              height={16}
            />
          </span>
          our services
        </p>
        <div className="w-full lg:w-7/12">
          <div className="w-full lg:w-lg space-y-8">
            <p className="text-4xl sm:text-3xl lg:text-5xl text-[#00325B] font-medium leading-tight">
              Exclusive Services for Every Occasion
            </p>
            <p className="text-xl text-[#4B5563]">
              Every detail matters, from securing the right approvals to
              delivering a flawless celebration.
            </p>{" "}
          </div>
          <div className="mt-8 mb-10 md:mb-0 relative flex text-xl md:text-4xl font-medium gap-4">
            <span
              className="absolute bottom-0 h-12 lg:h-16 rounded-full border border-[#C4161C] transition-all duration-500"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />

            <button
              ref={eventManagementRef}
              className={cn(
                "relative py-2 md:py-3 px-2 md:px-6 w-auto whitespace-nowrap cursor-pointer ",
                selectedService === "event-management"
                  ? "text-black"
                  : "text-[#A6A6A6]"
              )}
              onClick={() => setSelectedService("event-management")}
            >
              Event Management
            </button>

            <button
              ref={eventPermitsRef}
              className={cn(
                "relative py-2 md:py-3 px-2 md:px-6 w-auto whitespace-nowrap cursor-pointer ",
                selectedService === "event-permits"
                  ? "text-black"
                  : "text-[#A6A6A6]"
              )}
              onClick={() => setSelectedService("event-permits")}
            >
              Event Permits
            </button>
          </div>
        </div>{" "}
      </div>
      <div className="w-full max-w-[102rem] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 "
          >
            {servicesToShow.map((service, index) => (
              <div
                key={index}
                className="h-[550px] relative group overflow-hidden rounded-xl"
              >
                {" "}
                <Image
                  src={`/images/home/services/${service.src}`}
                  alt={service.title}
                  height={571}
                  width={500}
                  className="object-cover rounded-xl h-[419px] group-hover:h-full w-full transform transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C4161C] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"></div>
                <p className="absolute top-[450px] w-full lg:text-center text-3xl lg:text-4xl font-medium lg:px-8 group-hover:translate-y-[-20px] transform transition-all duration-500 group-hover:text-white">
                  {service.title}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex lg:flex-row flex-col justify-between mt-10 lg:mt-20 gap-8">
          <p
            className={cn(
              "text-[#4B5563] lg:w-1/2 text-[22px] font-medium",
              manrope.className
            )}
          >
            Our expertise spans across corporate and social occasions, ensuring
            every detail is executed with precision and creativity.
          </p>
          <button className="py-3 px-8 border border-[#F7931E] hover:bg-[#C4161C] hover:text-white rounded-full text-[#001A2E] font-medium text-[24px]">
            Discover our Services
          </button>
        </div>

        <div className="mt-20 h-[500px]  lg:h-[172px] w-full relative rounded-2xl overflow-hidden">
          <Image
            src="/images/home/services/rectangle-shape.webp"
            alt="Background"
            fill
            className="object-cover hidden lg:block"
          />

          <Image
            src="/images/home/services/rectangle-shape-sm.webp"
            alt="Background"
            fill
            className="object-cover lg:hidden"
          />

          <div className="absolute inset-0 flex lg:flex-row flex-col items-center gap-10 w-full px-12 text-white py-10 lg:py-0">
            <p className="text-5xl lg:text-[45px] font-medium">
              Have something on mind to discuss?
            </p>

            <div className="flex lg:flex-row flex-col gap-4 text-lg lg:text-2xl">
              <button className="w-auto border px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300">
                Book Your Free Consultation
              </button>
              <button className="w-auto border px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
