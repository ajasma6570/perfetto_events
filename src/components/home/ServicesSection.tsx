import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { eventManagement, eventPermits } from "@/static-data/home";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function ServicesOverview() {
  const [selectedService, setSelectedService] = useState<
    "event-management" | "event-permits"
  >("event-management");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const eventManagementRef = useRef<HTMLButtonElement>(null);
  const eventPermitsRef = useRef<HTMLButtonElement>(null);

  // detect mobile and keep indicator in sync on resize
  useEffect(() => {
    const handle = () => {
      setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
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
          className={cn(
            "inline-flex justify-start items-center w-full xl:w-5/12 gap-2 text-xl uppercase text-[#C4161C] font-light",
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

        <div className="w-full xl:w-7/12">
          <div className="w-full space-y-8">
            <p className="text-4xl sm:text-3xl lg:text-5xl text-[#00325B] font-medium leading-tight">
              Exclusive Services for <br className="hidden lg:block" /> Every
              Occasion
            </p>
            <p className="text-xl lg:text-2xl text-[#4B5563]">
              Every detail matters, from securing the right approvals{" "}
              <br className="hidden lg:block" /> to delivering a flawless
              celebration.
            </p>
          </div>

          {/* Tabs with moving pill */}
          <div className="mt-8 mb-14 lg:mb-0 relative flex flex-wrap text-lg md:text-4xl font-medium gap-4">
            <span
              className="absolute bottom-0 h-12 lg:h-16 rounded-full border border-[#C4161C] transition-all duration-500"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
            <button
              ref={eventManagementRef}
              className={cn(
                "relative py-2 md:py-3 px-2 md:px-6 w-auto whitespace-nowrap cursor-pointer",
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
                "relative py-2 md:py-3 px-2 md:px-6 w-auto whitespace-nowrap cursor-pointer",
                selectedService === "event-permits"
                  ? "text-black"
                  : "text-[#A6A6A6]"
              )}
              onClick={() => setSelectedService("event-permits")}
            >
              Event Permits
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[102rem] mx-auto">
        {/* Disable animations on mobile */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-12">
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
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
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
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#C4161C] to-transparent opacity-0 translate-y-full lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500" />
                  <p className="hidden lg:block absolute top-[450px] w-full lg:text-center text-2xl xl:text-4xl font-medium lg:px-8 transform transition-all duration-500 lg:group-hover:-translate-y-5 lg:group-hover:text-white">
                    {service.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-10 lg:py-10 gap-8">
          <p
            className={cn(
              "text-[#4B5563] lg:w-1/2 text-[22px] font-medium",
              manrope.className
            )}
          >
            Our expertise spans across corporate and social occasions, ensuring
            every detail is executed with precision and creativity.
          </p>

          <button className="self-start inline-flex w-auto py-3 lg:py-6 px-8 border border-[#F7931E] hover:bg-[#C4161C] hover:text-white rounded-full text-[#001A2E] font-medium text-xl lg:text-[24px]">
            Discover our Services
          </button>
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
              Have something <br className="block lg:hidden" /> on mind to{" "}
              <br className="block lg:hidden" />
              discuss?
            </p>
            <div className="flex lg:flex-row flex-col gap-4 ">
              <button className="self-start w-auto px-4 lg:px-6 py-4 lg:py-5 text-xl sm:text-2xl whitespace-nowrap border rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300">
                Book Your Free Consultation
              </button>
              <button className="self-start w-auto px-4 lg:px-6 py-4 lg:py-5 text-xl sm:text-2xl whitespace-nowrap border rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
