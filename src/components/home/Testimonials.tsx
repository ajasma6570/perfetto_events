import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function Testimonials() {
  const testimonials = [
    {
      img: "/images/home/testimonial/client-img.webp",
      quote:
        "Our wedding was beyond magical. The Perfetto team handled everything with such precision and care that we were able to just live the moment. Truly unforgettable!",
      clientImg: "/images/home/testimonial/client.webp",
      name: "Nisha & Arjun",
      company: "Newlyweds",
    },
    {
      img: "/images/home/testimonial/client-img-1.webp",
      quote:
        "Perfetto turned what could have been a stressful international conference into a seamless experience. Every detail from logistics to delegate management was flawless.",
      clientImg: "/images/home/testimonial/client-1.webp",
      name: "Amit Rao, Director",
      company: "GlobalTech Solutions",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // current and next
  const nextIndex = (current + 1) % testimonials.length;

  return (
    <section className="py-12 w-full">
      <p
        className={cn(
          " inline-flex justify-center w-full items-center gap-2 text-xl uppercase text-[#C4161C] font-light text-center mt-20",
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
        Testimonials
      </p>

      <p
        className={`${manrope.className} text-[#00325B] font-medium text-[55px] text-center leading-tight mt-4`}
      >
        Client Stories,
        <br /> Event Success
      </p>

      <div className="w-full flex flex-col items-center mt-20 overflow-hidden">
        {/* Slide Content */}
        <div className="pl-36 flex gap-28  transition-all duration-500 ">
          {/* Current Testimonial */}
          <div className="flex gap-12">
            <div className="relative h-[400px] w-[400px] rounded-xl">
              <Image
                src={testimonials[current].img}
                alt="Client Event"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-4 justify-between py-3 h-[400px] w-[400px]">
              <p className="text-2xl text-[#001A2E] font-medium">
                {testimonials[current].quote}
              </p>

              <div className="relative flex">
                <div className="h-[72px] w-[72px] border border-[#F7A41E] rounded-full flex items-center justify-center ">
                  {/* Quote Icon */}
                  <svg
                    width="31"
                    height="24"
                    viewBox="0 0 31 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.54838 9.39641C10.4498 9.39641 11.5466 9.9523 12.8386 11.0641C14.1608 12.1458 14.8218 13.6933 14.8218 15.7065C14.8218 17.6897 14.0856 19.5076 12.6133 21.1602C11.1409 22.8129 9.38311 23.6392 7.33984 23.6392C5.29657 23.6392 3.61388 23.0533 2.29177 21.8814C0.969651 20.7095 0.308594 18.8315 0.308594 16.2474C0.308594 13.6632 1.49549 10.7035 3.86929 7.36816C6.27314 4.03283 9.02254 1.88439 12.1175 0.922852C13.1391 1.46372 13.695 2.29004 13.7852 3.40182C12.6734 4.27321 11.6968 5.35494 10.8555 6.64701C10.0442 7.90903 9.60847 8.8255 9.54838 9.39641ZM25.6842 9.39641C26.5856 9.39641 27.6824 9.9523 28.9745 11.0641C30.2966 12.1458 30.9576 13.6933 30.9576 15.7065C30.9576 17.6897 30.2215 19.5076 28.7491 21.1602C27.2767 22.8129 25.5189 23.6392 23.4757 23.6392C21.4324 23.6392 19.7497 23.0533 18.4276 21.8814C17.1355 20.7095 16.4895 19.1019 16.4895 17.0587C16.4895 15.0154 17.0153 12.882 18.067 10.6584C19.1487 8.40482 20.6061 6.37658 22.439 4.57369C24.2719 2.77081 26.2251 1.55386 28.2984 0.922852C29.32 1.49376 29.8759 2.32009 29.966 3.40182C28.8242 4.27321 27.8326 5.35494 26.9913 6.64701C26.18 7.90903 25.7443 8.8255 25.6842 9.39641Z"
                      fill="#F7A41E"
                    />
                  </svg>
                </div>
                <div className="h-[72px] w-[72px] rounded-full flex items-center justify-center -translate-x-6">
                  <Image
                    src={testimonials[current].clientImg}
                    alt="Client"
                    width={72}
                    height={72}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              <div>
                <p className="text-2xl text-[#001A2E] font-medium ">
                  {testimonials[nextIndex].name}
                </p>
                <p className="text-2xl text-[#001A2E] font-medium ">
                  {testimonials[nextIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Next Testimonial */}
          <div className="flex gap-12">
            <div className="relative h-[400px] w-[400px] rounded-xl">
              <Image
                src={testimonials[nextIndex].img}
                alt="Client Event"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-4 justify-between py-3 h-[400px] w-[400px]">
              <p className="text-2xl text-[#001A2E] font-medium">
                {testimonials[nextIndex].quote}
              </p>

              <div className="relative flex">
                <div className="h-[72px] w-[72px] border border-[#F7A41E] rounded-full flex items-center justify-center ">
                  <svg
                    width="31"
                    height="24"
                    viewBox="0 0 31 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.54838 9.39641C10.4498 9.39641 11.5466 9.9523 12.8386 11.0641C14.1608 12.1458 14.8218 13.6933 14.8218 15.7065C14.8218 17.6897 14.0856 19.5076 12.6133 21.1602C11.1409 22.8129 9.38311 23.6392 7.33984 23.6392C5.29657 23.6392 3.61388 23.0533 2.29177 21.8814C0.969651 20.7095 0.308594 18.8315 0.308594 16.2474C0.308594 13.6632 1.49549 10.7035 3.86929 7.36816C6.27314 4.03283 9.02254 1.88439 12.1175 0.922852C13.1391 1.46372 13.695 2.29004 13.7852 3.40182C12.6734 4.27321 11.6968 5.35494 10.8555 6.64701C10.0442 7.90903 9.60847 8.8255 9.54838 9.39641ZM25.6842 9.39641C26.5856 9.39641 27.6824 9.9523 28.9745 11.0641C30.2966 12.1458 30.9576 13.6933 30.9576 15.7065C30.9576 17.6897 30.2215 19.5076 28.7491 21.1602C27.2767 22.8129 25.5189 23.6392 23.4757 23.6392C21.4324 23.6392 19.7497 23.0533 18.4276 21.8814C17.1355 20.7095 16.4895 19.1019 16.4895 17.0587C16.4895 15.0154 17.0153 12.882 18.067 10.6584C19.1487 8.40482 20.6061 6.37658 22.439 4.57369C24.2719 2.77081 26.2251 1.55386 28.2984 0.922852C29.32 1.49376 29.8759 2.32009 29.966 3.40182C28.8242 4.27321 27.8326 5.35494 26.9913 6.64701C26.18 7.90903 25.7443 8.8255 25.6842 9.39641Z"
                      fill="#F7A41E"
                    />
                  </svg>
                </div>
                <div className="h-[72px] w-[72px] rounded-full flex items-center justify-center -translate-x-6">
                  <Image
                    src={testimonials[nextIndex].clientImg}
                    alt="Client"
                    width={72}
                    height={72}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              <div>
                <p className="text-2xl text-[#001A2E] font-medium ">
                  {testimonials[nextIndex].name}
                </p>
                <p className="text-2xl text-[#001A2E] font-medium ">
                  {testimonials[nextIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-20">
          <button
            onClick={prevSlide}
            className="text-[#C4161C] hover:text-[#C4161C] cursor-pointer"
          >
            <BiChevronLeft size={35} />
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full border-2 border-[#C4161C] ${
                  current === index ? "bg-[#C4161C]" : "bg-transparent"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-[#C4161C] hover:text-[#C4161C] cursor-pointer"
          >
            <BiChevronRight size={35} />
          </button>
        </div>
      </div>
    </section>
  );
}
