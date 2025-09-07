"use client";

import ProcessSection from "@/components/ProcessSection";
import { faqs } from "@/static-data/contact";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  const [faqOpen, setFaqOpen] = useState<number>(0);
  return (
    <div className="pt-24">
      <section className="w-full pt-10 ">
        <div className="max-w-[102rem] mx-auto px-5 sm:px-6 py-8 lg:py-10 bg-[#FAF8F5]">
          <div className="flex flex-col gap-6 rounded-2x p-6 sm:p-8 lg:p-20">
            <p className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#C4161C] uppercase text-md tracking-[0.16em] font-light font-manrope">
              Contact us
            </p>

            <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 items-center lg:items-start">
              <div className="w-full lg:w-6/12 h-full text-center lg:text-left">
                <h2 className="mt-4 text-[#00325B] font-medium  text-4xl lg:text-6xl">
                  Ready to Plan
                  <br />
                  an Event ?
                </h2>
              </div>

              <div className="w-full lg:w-6/12 h-full text-center lg:text-left">
                <p className="text-[#4B5563] font-normal text-xl leading-tight max-w-[746px]">
                  Every great event starts with organized details while
                  executing them brilliantly, We offer a variety of options to
                  assist in making your event as perfect as you have imagined
                  it!
                </p>

                <ul className="mt-6 lg:mt-8 flex justify-center lg:justify-start gap-4 sm:gap-6">
                  {[
                    { Icon: FaInstagram, label: "Instagram" },
                    { Icon: FaFacebookF, label: "Facebook" },
                    { Icon: FaXTwitter, label: "X" },
                    { Icon: FaLinkedinIn, label: "LinkedIn" },
                  ].map(({ Icon, label }, i) => (
                    <li key={i}>
                      <button
                        aria-label={label}
                        className="h-14 w-14 rounded-full border border-[#093b64] text-[#093b64] grid place-items-center text-[22px] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                      >
                        <Icon />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="w-full my-20 px-6">
        <div className="mx-auto max-w-[102rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-24 gap-y-10">
            <div>
              <h3 className="text-[#00325B] text-[28px] font-medium">Phone</h3>
              <div className="mt-4 space-y-2 text-[#4B5563] text-[22px] font-medium">
                <p>
                  <a href="tel:+97143962335" className="hover:underline">
                    +971-4-396-2335
                  </a>
                </p>
                <p>
                  <a href="tel:+971585060786" className="hover:underline">
                    +971-58-5060-786
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[#00325B] text-[28px] font-medium">Email</h3>
              <div className="mt-4 text-[#4B5563] text-[22px] font-medium">
                <a
                  href="mailto:events@perfettogroup.ae"
                  className="hover:underline break-all"
                >
                  events@perfettogroup.ae
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[#00325B] text-[28px] font-medium">
                Head Office
              </h3>
              <div className="mt-4 space-y-2 text-[#4B5563] text-[22px] font-medium">
                <p>Dubai Park Lane Towers</p>
                <p>Office # 2013 Business Bay Dubai</p>
              </div>
            </div>

            <div>
              <h3 className="text-[#00325B] text-[28px] font-medium">
                Branch Office
              </h3>
              <div className="mt-4 space-y-2 text-[#4B5563] text-[22px] font-medium">
                <p>Naressco 4 Building</p>
                <p>Office # M05 Al Karama Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-6">
        <div className="mx-auto max-w-[102rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-stretch">
            <div
              className="relative overflow-hidden rounded-xl
                      aspect-[16/9] sm:aspect-[4/3]
                      lg:aspect-auto lg:h-full lg:min-h-[520px]"
            >
              <Image
                src="/images/contact/contact.webp"
                alt="Contact"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="rounded-xl bg-[#FBF8F4] p-10 lg:p-16
                      flex flex-col justify-center
                      lg:h-full lg:min-h-[520px]"
            >
              <h3 className="text-[#00325B] text-center lg:text-left text-2xl sm:text-3xl lg:text-[35px] font-semibold">
                We’d love to hear from you
              </h3>

              <form className="mt-10 flex flex-col gap-8">
                <label className="block">
                  <input
                    type="text"
                    placeholder="First name*"
                    className="w-full bg-transparent border-0 border-b border-[#CDD1D5] focus:border-[#00325B] focus:ring-0 py-3 text-[15px] placeholder:text-[#A3A8AE] outline-none"
                  />
                </label>

                <label className="block">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full bg-transparent border-0 border-b border-[#CDD1D5] focus:border-[#00325B] focus:ring-0 py-3 text-[15px] placeholder:text-[#A3A8AE] outline-none"
                  />
                </label>

                <label className="block">
                  <textarea
                    rows={6}
                    placeholder="Message*"
                    className="w-full resize-none bg-transparent border-0 border-b border-[#CDD1D5] focus:border-[#00325B] focus:ring-0 py-3 text-[15px] placeholder:text-[#A3A8AE] outline-none"
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="block h-16 px-10 rounded-full border border-[#F0A04B] text-[#00325B] text-3xl hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-10 mb-20">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-8">
          <h2 className="text-center text-[#00325B] text-5xl lg:text-6xl font-semibold tracking-wide mb-12">
            FAQ
          </h2>

          <ul className="space-y-6">
            {faqs.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <li
                  key={i}
                  className={[
                    "rounded-xl transition-colors",
                    isOpen
                      ? "bg-[#FAF8F5] border border-[#FAF8F5]"
                      : "bg-white border border-[#FFE5BE]",
                  ].join(" ")}
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-4 px-7 py-6"
                  >
                    <span className="flex-1 text-left text-[#00325B] text-xl sm:text-2xl font-medium">
                      {item.que}
                    </span>

                    <span
                      className={[
                        "h-8 w-8 grid place-items-center rounded-full border border-[#F7931E] text-black shrink-0 transition-transform",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                    >
                      <BiChevronDown size={18} strokeWidth={2} />
                    </span>
                  </button>

                  <div
                    className={[
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      {item.ans && (
                        <p className="px-7 pb-6 text-xl lg:text-2xl text-[#4B5563]">
                          {item.ans}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <ProcessSection isContactPage={true} />
    </div>
  );
}
