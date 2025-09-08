"use client";

import ProcessSection from "@/components/ProcessSection";
import { eventManagemnet, permits } from "@/static-data/services";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function servicesPage() {
  const [selectedService, setSelectedService] = useState<
    "event-management" | "event-permits"
  >("event-management");

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const eventManagementRef = useRef<HTMLButtonElement>(null);
  const eventPermitsRef = useRef<HTMLButtonElement>(null);

  const eventManagementSectionRef = useRef<HTMLDivElement>(null);
  const eventPermitsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
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

    updateIndicator(); // run once on mount
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [selectedService]);

  const handleTabClick = (service: "event-management" | "event-permits") => {
    setSelectedService(service);

    setTimeout(() => {
      if (service === "event-management" && eventManagementSectionRef.current) {
        eventManagementSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (
        service === "event-permits" &&
        eventPermitsSectionRef.current
      ) {
        eventPermitsSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="pt-10 lg:pt-24  space-y-20">
      <div className="pt-24 px-6 flex justify-center flex-col items-center text-center space-y-4 max-w-6xl mx-auto">
        <p
          className={"text-xl uppercase text-[#C4161C] font-light font-manrope"}
        >
          our services
        </p>
        <p className="text-5xl lg:text-6xl mb-10 lg:mb-5 text-[#00325B] font-medium">
          The Services Behind Every Great Event
        </p>
        <p className="text-2xl text-[#4B5563] font-normal">
          Discover how we combine creativity, precision, and compliance to make
          events unforgettable. Our full spectrum of services are crafted to
          deliver impact, compliance, and unforgettable memories.
        </p>
      </div>

      <div className="mb-16 px-6 relative flex text-xl md:text-3xl xl:text-4xl font-medium gap-4 lg:justify-center">
        <span
          className="absolute bottom-0 h-12 lg:h-16 rounded-full border border-[#C4161C] transition-all duration-500"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />

        <button
          ref={eventManagementRef}
          className={`relative py-2 md:py-3 px-2 md:px-6 whitespace-nowrap cursor-pointer ${
            selectedService === "event-management"
              ? "text-black"
              : "text-[#A6A6A6]"
          }`}
          onClick={() => handleTabClick("event-management")}
        >
          Event Management
        </button>

        <button
          ref={eventPermitsRef}
          className={`relative py-2 md:py-3 px-2 md:px-6 whitespace-nowrap cursor-pointer ${
            selectedService === "event-permits"
              ? "text-black"
              : "text-[#A6A6A6]"
          }`}
          onClick={() => handleTabClick("event-permits")}
        >
          Event Permits
        </button>
      </div>

      <div
        ref={eventManagementSectionRef}
        className="w-full max-w-[102rem] mx-auto px-6"
      >
        <div className="relative w-full">
          <Image
            src="/images/services/banner.webp"
            alt="Services Banner"
            width={1600}
            height={540}
            className="object-cover hidden md:block"
          />

          <Image
            src="/images/services/banner-sm.webp"
            alt="Services Banner"
            width={1600}
            height={540}
            className="object-cover md:hidden"
          />
          <div className="absolute top-5 left-5 w-16 h-16 md:w-24 md:h-24">
            <Image
              src="/images/services/vector-2.webp"
              alt="Vector Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex mt-20">
          <div className="w-full lg:w-5/12 hidden lg:block"></div>
          <div className="w-full lg:w-7/12 space-y-4 lg:px-12">
            <p className="text-[#00325B] font-medium text-[55px] leading-tight">
              Event <br /> Management
            </p>
            <p className="text-[#4B5563] font-normal text-2xl">
              Great events don’t happen by chance, they’re built with precision,
              creativity, and flawless execution. We manage every detail from
              planning to delivery, ensuring your event not only runs smoothly
              but leaves a lasting impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 mt-20">
          {eventManagemnet.map((event, index) => (
            <div key={index} className="space-y-4">
              <div className="relative group cursor-pointer overflow-hidden rounded-xl w-full h-[280px] lg:h-[400px]">
                <Image
                  src={`/images/services/${event.src}`}
                  alt={event.title}
                  fill
                  className="object-cover hover:scale-110 transform transition-all duration-500 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#C4161C] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start gap-6 px-5 pb-10">
                  <button className="text-white px-5 py-2 rounded-full border border-white text-2xl font-medium">
                    View work
                  </button>
                  <Link
                    href="/contact"
                    className="text-white px-5 py-2 rounded-full border border-white text-2xl font-medium"
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <p className="w-full lg:w-5/12 text-3xl xl:text-4xl font-medium text-[#00325B] pr-10">
                  {event.title}
                </p>
                <p className="w-full lg:w-7/12 text-[#4B5563] text-xl xl:text-2xl font-normal">
                  {event.desc}
                </p>
              </div>

              <div className="lg:hidden items-center my-6 justify-start w-full flex gap-4 lg:gap-8">
                <button className="border px-5 py-2 rounded-full border-[#F7931E] text-[#00325B] font-normal text-xl lg:text-2xl">
                  View work
                </button>
                <Link
                  href="/contact"
                  className="border px-5 py-2 rounded-full border-[#F7931E] text-[#00325B] font-normal text-xl lg:text-2xl"
                >
                  Contact us
                </Link>
              </div>
            </div>
          ))}

          <div className="bg-[#FAF8F5] p-8 lg:p-20 space-y-6">
            <p className="text-[#00325B] font-medium text-4xl xl:text-5xl tracking-tight leading-tight">
              Have any thoughts or <br /> doubts? Feel free to <br /> contact
              us.
            </p>

            <div className="flex flex-col gap-6">
              <button className="self-start border w-auto py-4 lg:py-6 px-7 lg:px-10 rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl xl:text-2xl">
                Book Your Free Consultation
              </button>
              <button className="self-start border w-auto py-4 lg:py-6 px-7 lg:px-10 rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl xl:text-2xl">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={eventPermitsSectionRef}
        className="w-full max-w-[102rem] mx-auto pt-10 px-6"
      >
        <div className="relative w-full">
          <Image
            src="/images/services/banner-1.webp"
            alt="Services Banner"
            width={1600}
            height={540}
            className="object-cover w-full hidden md:block"
            priority
          />

          <Image
            src="/images/services/banner-1-sm.webp"
            alt="Services Banner"
            width={1600}
            height={540}
            className="object-cover w-full md:hidden"
            priority
          />

          <div className="absolute top-5 left-5 w-16 h-16 md:w-24 md:h-24">
            <Image
              src="/images/services/vector-3.webp"
              alt="Vector Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex mt-20">
          <div className="w-full hidden lg:block lg:w-5/12"></div>
          <div className="w-full lg:w-7/12 space-y-4 lg:px-12">
            <p className="text-[#00325B] font-medium text-[55px] leading-tight">
              Event <br className="hidden lg:block" /> Permits
            </p>
            <p className="text-[#4B5563] font-normal text-2xl">
              Securing event permits in Dubai can be complex, we make it simple.
              Our team manages the entire approval process with DTCM and other
              local authorities, ensuring compliance with all regulations. From
              venue permits to traffic and security coordination, we handle the
              paperwork and liaison so your event runs smoothly without delays
              or hassles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-28 mt-20">
          {permits.map((permit, index) => (
            <div key={index} className="space-y-4">
              <Image
                src={`/images/services/${permit.src}`}
                alt={permit.title}
                width={1600}
                height={600}
                className="object-cover w-full rounded-lg"
              />

              <h2 className="text-[35px] font-semibold text-[#00325B]">
                {permit.title}
              </h2>
              <div className="text-xl text-gray-600">
                <p
                  className={`${
                    expanded === index ? "line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {permit.full}
                </p>
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="text-red-600 font-medium hover:underline"
                >
                  {expanded === index ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FAF8F5] p-8 lg:p-20 mt-20 space-y-6">
          <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center gap-6">
            <p className="text-4xl xl:text-5xl font-medium text-[#00325B] tracking-tight leading-tight">
              Have any thoughts or doubts? <br className="hidden lg:block" />{" "}
              Feel free to contact us.
            </p>
            <div className="flex lg:flex-row flex-col gap-4">
              <button className="self-start border w-auto py-4 lg:py-6 px-7 lg:px-10 rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl lg:text-2xl">
                Book Your Free Consultation
              </button>
              <button className="self-start border w-auto py-4 lg:py-6 px-7 lg:px-10 rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl lg:text-2xl">
                Get in Touch
              </button>
            </div>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t "></div>
            <span className="mx-4 text-xl font-medium">OR</span>
            <div className="flex-grow border-t "></div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-6">
            <p className="text-4xl xl:text-5xl font-medium text-[#00325B] tracking-tight leading-tight">
              Got questions? Check out our FAQ{" "}
              <br className="hidden lg:block" /> section for quick answers.
            </p>
            <div>
              <button className="border w-auto py-4 lg:py-6 px-7 lg:px-14 rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl lg:text-2xl">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProcessSection />
    </div>
  );
}
