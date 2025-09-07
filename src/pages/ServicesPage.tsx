"use client";

import ProcessSection from "@/components/ProcessSection";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

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

  const handleTabClick = (service: "event-management" | "event-permits") => {
    setSelectedService(service);

    // Scroll to section after state update
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

  const eventManagemnet = [
    {
      title: "Conferences, Exhibitions and Destination Meetings",
      desc: "We deliver seamless large-scale events backed by innovative, cost-effective solutions. From logistics to execution, our focus is on creating impactful experiences without compromise.",
      src: "event.webp",
    },
    {
      title: "Product Launches",
      desc: "We help you make a strong market entry with events that connect your brand to your audience. Whether it’s promoters or a full-scale roadshow, our expertise ensures your launch leaves a lasting impression.",
      src: "event-2.webp",
    },
    {
      title: "Hybrid Events– The New Normal",
      desc: "Physical or virtual, your events shouldn’t stop. Our hybrid solutions supercharge engagement across platforms, ensuring all attendees connect effortlessly, no matter where they are.",
      src: "event-3.webp",
    },
    {
      title: "Private and Social Events",
      desc: "From birthdays and anniversaries to engagements and graduations, we design celebrations that reflect your personality and style. Our team brings your vision to life with creativity and precision.",
      src: "event-4.webp",
    },
    {
      title: "Weddings",
      desc: "Your wedding deserves nothing short of perfection. Our planners and decorators craft unforgettable experiences tailored to your wishes, delivering an event that feels truly magical.",
      src: "event-5.webp",
    },
    {
      title: "Permits and City Liaisons",
      desc: "Paperwork shouldn’t slow you down. We handle the necessary permits and city coordination so your event runs smoothly without bureaucratic hurdles.",
      src: "event-6.webp",
    },
    {
      title: "RSVP Management",
      desc: "Managing guest lists can be overwhelming, we take it off your plate. Our team ensures streamlined RSVP tracking and communication so you can focus on your event.",
      src: "event-7.webp",
    },
    {
      title: "Event Concept Creation and Design",
      desc: "Every great event begins with a powerful idea. From simple conference setups to elaborate multi-day weddings, we design concepts that captivate and engage.",
      src: "event-8.webp",
    },
    {
      title: "Pop-up Activation Design",
      desc: "We create immersive pop-up spaces that amplify your brand presence. From concept to styling, construction, and installation, our solutions are built to grab attention and drive impact.",
      src: "event-9.webp",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const permits = [
    {
      title: "DTCM Event permits",
      src: "event-permits.webp",
      full: "The DTCM Event Permit Service is a crucial aspect of event planning in Dubai, ensuring that events are held in compliance with local laws and regulations. The service provides a centralized platform for event organizers to obtain the necessary permits. And approvals for their events, from venue approvals to security clearances and public safety requirements. Our expertise in navigating the DTCM event permit and other regulatory bodies allows us to offer. A hassle-free experience for our clients, saving them time, money, and stress. We ensure that all permits and approvals are obtained well in advance of the event, so our clients can focus on the other aspects of their event without worrying about regulatory compliance.",
    },
    {
      title: "Entertainment permits",
      src: "event-permits-1.webp",
      full: "Entertainment permits are an essential part of organizing any event in Dubai. At Perfetto Events, we offer comprehensive event management services, including permit and liaison services, to ensure that our clients’ events comply with all necessary regulations. Our expert team has extensive experience dealing with Dubai Tourism and Commerce Marketing (DTCM) and other local regulatory bodies, ensuring timely and hassle-free acquisition of all necessary permits and approvals. We handle everything from obtaining permits for performers to coordinating with local authorities for sound and lighting permits. Trust us to ensure that your event is a success while complying with all local regulations.",
    },
  ];
  return (
    <div className="pt-24  space-y-20">
      <div className="pt-24 px-6 flex justify-center flex-col items-center text-center space-y-4 max-w-6xl mx-auto">
        <p
          className={cn(
            "text-xl uppercase text-[#C4161C] font-light",
            manrope.className
          )}
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

      <div className="my-7 px-6 relative flex lg:px-6 text-lg md:text-4xl font-medium gap-4 justify-center">
        <span
          className="absolute bottom-0 h-12 lg:h-16 rounded-full border border-[#C4161C] transition-all duration-500"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />

        <button
          ref={eventManagementRef}
          className={`relative w-auto px-3 py-1.5 lg:py-3 lg:px-6 whitespace-nowrap cursor-pointer ${
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
          className={`relative px-3 py-1.5 lg:py-3 lg:px-6 whitespace-nowrap cursor-pointer ${
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
                <p className="w-full lg:w-5/12 text-3xl xl:text-[35px] font-medium text-[#00325B] pr-10">
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

            <div className="flex lg:flex-row flex-col gap-6">
              <button className="self-start border py-3 px-5 w-auto rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl lg:text-2xl">
                Book Your Free Consultation
              </button>
              <button className="self-start border py-3 px-5 w-auto rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl lg:text-2xl">
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
        <Image
          src="/images/services/banner-1.webp"
          alt="Services Banner"
          width={1600}
          height={540}
          className="object-cover"
        />

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
              <button className="self-start border py-3 px-5 w-auto rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl lg:text-2xl">
                Book Your Free Consultation
              </button>
              <button className="self-start border py-3 px-5 w-auto rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl lg:text-2xl">
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
              <button className="border py-3 px-8 lg:px-14 rounded-full border-[#F7931E] text-[#00325B] font-medium text-xl lg:text-2xl">
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
