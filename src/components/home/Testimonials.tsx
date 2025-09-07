import { testimonials } from "@/static-data/home";
import Image from "next/image";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const nextIndex = (current + 1) % testimonials.length;

  const nextSlide = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  const T = testimonials[current];
  const N = testimonials[nextIndex];

  return (
    <section className="py-20 lg:py-28 w-full">
      <p
        className={
          " inline-flex justify-center w-full items-center gap-2 text-xl uppercase text-[#C4161C] font-light text-center font-manrope"
        }
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

      <h2
        className={`font-manrope text-[#00325B] font-medium text-5xl md:text-6xl text-center leading-tight mt-4`}
      >
        Client Stories,
        <br /> Event Success
      </h2>

      <div className="mt-10 lg:mt-20 mx-auto max-w-3xl px-8 xl:hidden">
        <div className="space-y-8">
          <p className="text-xl lg:text-2xl text-[#001A2E] font-normal">
            {T.quote}
          </p>

          <div className="flex items-center gap-3">
            <div className="relative flex">
              <div className="h-12 w-12  border border-[#F7A41E] rounded-full flex items-center justify-center ">
                <svg
                  width="21"
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
              <div className="h-12 w-12  rounded-full flex items-center justify-center -translate-x-4">
                <Image
                  src={T.clientImg}
                  alt={T.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="text-[#001A2E] font-semibold">{T.name}</p>
              <p className="text-[#001A2E]">{T.company}</p>
            </div>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src={T.img}
                alt="Client Event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prevSlide} className="text-[#C4161C]">
            <BiChevronLeft size={40} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-4 h-4 rounded-full border-2 border-[#C4161C] ${
                  current === i ? "bg-[#C4161C]" : "bg-transparent"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="text-[#C4161C]">
            <BiChevronRight size={40} />
          </button>
        </div>
      </div>

      <div className="hidden xl:block mt-24">
        <div className="mx-auto max-w-[102rem] px-6">
          <div className="grid grid-cols-3 gap-12 items-start">
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={T.img}
                  alt="Client Event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <p className="text-xl lg:text-2xl text-[#001A2E] font-normal">
                {T.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="h-14 w-14 border border-[#F7A41E] rounded-full grid place-items-center">
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 31 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.548 9.396c.902 0 1.999.556 3.291 1.668 1.323 1.081 1.984 2.629 1.984 4.642 0 1.983-.736 3.801-2.208 5.454C11.143 22.812 9.385 23.639 7.342 23.639s-3.727-.586-5.049-1.758C.97 20.709.309 18.831.309 16.247c0-2.584 1.187-5.544 3.56-8.879C6.273 4.033 9.023 1.884 12.118.923c1.021.541 1.577 1.367 1.668 2.479-1.112.871-2.088 1.953-2.929 3.245-.812 1.262-1.248 2.178-1.308 2.749Z"
                      fill="#F7A41E"
                    />
                  </svg>
                </div>

                <Image
                  src={T.clientImg}
                  alt={T.name}
                  width={56}
                  height={56}
                  className="rounded-full -ml-4"
                />

                <div className="ml-1">
                  <p className="text-lg font-semibold text-[#001A2E]">
                    {T.name}
                  </p>
                  <p className="text-lg text-[#001A2E]">{T.company}</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={N.img}
                  alt="Client Event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-20">
            <button onClick={prevSlide} className="text-[#C4161C]">
              <BiChevronLeft size={35} />
            </button>
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-4 h-4 rounded-full border-2 border-[#C4161C] ${
                    current === i ? "bg-[#C4161C]" : "bg-transparent"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="text-[#C4161C]">
              <BiChevronRight size={35} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
