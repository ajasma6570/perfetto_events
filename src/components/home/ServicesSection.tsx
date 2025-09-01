import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function ServicesOverview() {
  const [selectedService, setSelectedService] = useState("event-management");

  const eventManagement = [
    {
      title: "Conferences, Exhibitions and Destination Meetings",
      image: "event-1.webp",
    },
    {
      title: "Product Launches",
      image: "event-2.webp",
    },
    {
      title: "Hybrid Events – The New Normal",
      image: "event-3.webp",
    },
  ];
  return (
    <section className="h-full py-20 bg-[#FAF8F5]">
      <div className="w-[102rem] mx-auto py-20 flex items-start">
        <p
          className={cn(
            " inline-flex justify-start items-center w-5/12 gap-2 text-xl uppercase text-[#C4161C] font-light",
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
        <div className="w-7/12">
          <div className="w-lg space-y-8">
            <p className="text-5xl text-[#00325B] font-medium leading-tight">
              Exclusive Services for Every Occasion
            </p>
            <p className="text-xl text-[#4B5563]">
              Every detail matters, from securing the right approvals to
              delivering a flawless celebration.
            </p>{" "}
          </div>
          <div className="mt-8 space-x-8 text-4xl font-medium">
            <button
              className={`py-5 px-6 rounded-full hover:border hover:border-[#C4161C] cursor-pointer ${
                selectedService === "event-management"
                  ? "border-[#C4161C] border"
                  : ""
              }`}
              onClick={() => setSelectedService("event-management")}
            >
              Event Management
            </button>
            <button
              className={`py-5 px-6 rounded-full hover:border hover:border-[#C4161C] cursor-pointer${
                selectedService === "event-permits"
                  ? "border-[#C4161C] border"
                  : ""
              }`}
              onClick={() => setSelectedService("event-permits")}
            >
              Event Permits
            </button>
          </div>
        </div>{" "}
      </div>
      <div className="w-[102rem] mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {eventManagement.map((service, index) => (
            <div
              key={index}
              className="h-[550px] relative group overflow-hidden rounded-xl"
            >
              {" "}
              <Image
                src={`/images/services/${service.image}`}
                alt={service.title}
                height={571}
                width={500}
                className="object-cover rounded-xl h-[419px] group-hover:h-full w-full transform transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-700/90 to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"></div>
              <p className="absolute top-[450px] w-full text-center text-4xl font-medium px-8 group-hover:translate-y-[-20px] transform transition-all duration-500 group-hover:text-white">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-20">
          <p
            className={cn(
              "text-[#4B5563] w-1/2 text-[22px] font-medium",
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

        <div className="mt-20 h-[172px] w-full relative rounded-2xl overflow-hidden">
          <Image
            src="/images/services/rectangle-shape.webp"
            alt="Background"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center gap-10 w-full px-12 text-white ">
            <p className="text-[45px] font-medium">
              Have something on mind to discuss?
            </p>

            <div className="flex gap-4 text-2xl">
              <button className="border px-10 py-5 rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] transform transition-all duration-300">
                Book Your Free Consultation
              </button>
              <button className="border px-10 py-5 rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] transform transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
