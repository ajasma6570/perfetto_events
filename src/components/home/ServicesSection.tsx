import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { eventManagement, eventPermits } from "@/static-data/home";
import Link from "next/link";

export default function ServicesOverview() {
  const [selectedService, setSelectedService] = useState<
    "event-management" | "event-permits"
  >("event-management");
  const [isMobile, setIsMobile] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const eventManagementRef = useRef<HTMLButtonElement>(null);
  const eventPermitsRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handle = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      const ref =
        selectedService === "event-management"
          ? eventManagementRef.current
          : eventPermitsRef.current;
      if (ref) {
        setIndicatorStyle({
          left: ref.offsetLeft,
          width: ref.offsetWidth,
        });
      }
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [selectedService]);

  const servicesToShow =
    selectedService === "event-management" ? eventManagement : eventPermits;

  return (
    <section className="h-full py-20 bg-[#FAF8F5] px-5 sm:px-6">
      <div className="w-full max-w-[102rem] mx-auto lg:py-20 flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0">
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
          our services
        </p>

        <div className="w-full xl:w-7/12">
          <div className="w-full space-y-8">
            <p className="text-4xl lg:text-5xl text-[#00325B] font-medium leading-tight">
              Exclusive Services for <br className="hidden lg:block" /> Every
              Occasion
            </p>
            <p className="text-xl lg:text-2xl text-[#4B5563] font-manrope">
              Every detail matters, from securing the right approvals{" "}
              <br className="hidden lg:block" /> to delivering a flawless
              celebration.
            </p>
          </div>

          <div className="mt-8 mb-14 lg:mb-0 relative flex text-xl md:text-3xl xl:text-4xl font-medium gap-4">
            <span
              className="absolute bottom-0 h-12 lg:h-16 rounded-full border border-[#C4161C] transition-all duration-500"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />

            <button
              ref={eventManagementRef}
              className={cn(
                "relative py-2 md:py-3 px-2 md:px-6 whitespace-nowrap cursor-pointer transition-colors",
                selectedService === "event-management"
                  ? "text-black"
                  : "text-gray-600"
              )}
              onClick={() => setSelectedService("event-management")}
            >
              Event Management
            </button>

            <button
              ref={eventPermitsRef}
              className={cn(
                "relative py-2 md:py-3 px-2 md:px-6 whitespace-nowrap cursor-pointer transition-colors",
                selectedService === "event-permits"
                  ? "text-black"
                  : "text-gray-600"
              )}
              onClick={() => setSelectedService("event-permits")}
            >
              Event Permits
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[102rem] mx-auto">
        {isMobile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicesToShow.map((service, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <Image
                  src={`/images/home/services/${service.src}`}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-[340px] object-cover rounded-2xl"
                />
                <p className="mt-4 text-3xl font-medium">{service.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            >
              {servicesToShow.map((service, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl h-[550px]"
                >
                  <Image
                    src={`/images/home/services/${service.src}`}
                    alt={service.title}
                    width={500}
                    height={571}
                    className="object-cover rounded-xl h-[419px] w-full transform transition-all duration-500 lg:group-hover:h-full"
                  />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#C4161C] to-transparent opacity-0 translate-y-full lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500" />
                  <p className="hidden md:block absolute top-[450px] w-full lg:text-center text-2xl xl:text-4xl font-medium lg:px-8 transform transition-all duration-500 lg:group-hover:-translate-y-5 lg:group-hover:text-white">
                    {service.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-10 lg:py-10 gap-8">
          <p
            className={
              "text-[#4B5563] lg:w-1/2 text-[22px] font-medium font-manrope"
            }
          >
            Our expertise spans across corporate and social occasions, ensuring
            every detail is executed with precision and creativity.
          </p>

          <Link
            href={"/services"}
            className="self-start inline-flex w-auto py-4 lg:py-6 px-7 lg:px-10 border border-[#F7931E] hover:bg-[#C4161C] hover:text-white rounded-full text-[#001A2E] font-medium text-xl lg:text-[24px]"
          >
            Discover our Services
          </Link>
        </div>

        <div className="mt-20 h-[430px] lg:h-[172px] w-full relative rounded-2xl overflow-hidden">
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
          <div className="absolute inset-0 flex lg:flex-row flex-col justify-center lg:justify-between items-start lg:items-center gap-10 w-full px-4 lg:px-12 text-white py-10 lg:py-0">
            <p className="text-4xl xl:text-5xl font-medium">
              Have something <br className="block lg:hidden" /> on mind to
              <br className="block lg:hidden" />
              discuss?
            </p>
            <div className="flex lg:flex-row flex-col gap-4 ">
              <Link
                href={"/contact"}
                className="self-start w-auto py-4 lg:py-6 px-7 lg:px-10 text-xl sm:text-2xl font-medium whitespace-nowrap border rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300"
              >
                Book Your Free Consultation
              </Link>
              <Link
                href={"/contact"}
                className="self-start w-auto py-4 lg:py-6 px-7 lg:px-10 text-xl sm:text-2xl font-medium whitespace-nowrap border rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
