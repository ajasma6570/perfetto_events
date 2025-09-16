import GetInTouch from "@/components/home/GetInTouch";
import { clients, ourProcess, whyChooseUs } from "@/static-data/about";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-10 lg:pt-24 space-y-20 ">
      <div className="pt-24 flex justify-center flex-col px-6 items-center text-center space-y-4 max-w-6xl mx-auto">
        <p
          className={"text-xl uppercase text-[#C4161C] font-light font-manrope"}
        >
          About us
        </p>
        <h1 className="text-4xl lg:text-6xl text-[#00325B] font-medium">
          Crafting Experiences, Defining Moments
        </h1>
      </div>

      <div className="w-full max-w-[102rem] mx-auto px-6">
        <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[80/27]">
          <Image
            src="/images/about/banner.webp"
            alt="Perfetto Event Management — event highlights collage"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <section
        aria-labelledby="overview-heading"
        className="w-full mx-auto max-w-[900px] px-6"
      >
        <h2 className="text-4xl lg:text-5xl text-[#00325B] font-semibold text-center">
          Seamless Events, Enduring Impact
        </h2>
        <ul className="lg:p-5 space-y-8 text-center text-2xl mt-10">
          <li className="font-normal text-[#4B5563]">
            We believe that every brand has a special story to tell – one that
            is unique and personal. That’s where Perfetto Event Management steps
            in: to help you showcase that story in our most distinctive style.
          </li>
          <li className="font-normal text-[#4B5563]">
            We understand that your vision board isn’t just a few vague ideas
            but it is an amalgamation of well-thought-out details that you, as a
            company or individual, want to see come to life. And Perfetto
            promises to make that happen.
          </li>
          <li className="font-normal text-[#4B5563]">
            From creative ideation and designing a plan to leveraging our
            extensive supplier relationships to picking the best-suited
            packages, the relationship we form with our clients around the globe
            is long-standing, transparent, and one that is based on mutual
            trust.
          </li>
        </ul>{" "}
      </section>

      <section
        aria-labelledby="highlights-heading"
        className="max-w-[102rem] w-full mx-auto px-6"
      >
        <div className="flex justify-center items-center gap-10  font-semibold text-[#00325B]">
          <span className="sr-only">75+ Clients</span>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-medium">
            75+ Clients
          </p>
          <span className="w-[4px] h-8 bg-[#00325B] hidden lg:block" />
          <span className="sr-only">600+ Events</span>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-medium">
            600+ Events
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:gap-6">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[5/3]">
            <Image
              src="/images/about/vector-3.webp"
              alt="Service Image"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[5/3]">
            <Image
              src="/images/about/vector-2.webp"
              alt="Service Image"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[102rem] mx-auto px-6 pb-16 lg:py-16 ">
        <div className="text-left  mb-12 space-y-8">
          <p
            className={
              " inline-flex justify-start items-center w-full lg:w-5/12 gap-2 text-xl uppercase text-[#C4161C] font-light font-manrope"
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
            Why choose us
          </p>
          <h2 className="text-4xl font-bold text-[#00325B] mt-2">
            The Perfetto Advantage
          </h2>
          <p className="text-[#4B5563] text-xl lg:text-2xl mt-4 font-normal">
            Perfetto Event Management takes pride in the fact that we are known
            for our hands-on <br className="hidden lg:block" /> and multifaceted
            approach when it comes to getting a job done. We have got it all to{" "}
            <br className="hidden lg:block" /> make your event a success – an
            eye for detail as well as the talent to see the big picture.
          </p>
        </div>

        <div className="w-full flex mt-10 lg:mt-20">
          <div className="hidden xl:block w-2/12"></div>
          <div className="w-full xl:w-10/12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-left p-6">
                <div className="w-[108px] h-[108px] flex items-center justify-center border border-[#00325B] rounded-full mb-6">
                  <img
                    src={`/images/icons/${item.icon}`}
                    alt={item.title}
                    height={50}
                    width={50}
                  />
                </div>

                <h3 className="text-[33px] font-semibold text-[#00325B] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#4B5563] text-xl font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="process-heading"
        className="bg-[#FAF8F5] w-full"
      >
        <div className="mx-auto max-w-[95rem] px-6 py-16 space-y-8">
          <p
            className={
              " inline-flex justify-center items-center w-full  gap-2 text-xl uppercase text-[#C4161C] font-light font-manrope"
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

          <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-[#00325B] text-center">
            What Goes on Behind the Scenes
          </h2>

          <p className="mt-3 font-normal text-center text-xl lg:text-2xl mx-auto text-[#4B5563]">
            Every great event starts with organizing all the details, followed
            by the beautiful journey of executing them brilliantly. We offer a
            variety of options to help you make your event as perfect as you
            imagined it!
          </p>

          <div className="mt-14 lg:mt-20">
            <ul role="list" className="space-y-8">
              {ourProcess.map((s) => (
                <li
                  key={s.title}
                  className="rounded-2xl border border-[#FFE5BE] p-7 "
                >
                  <div className="grid items-center gap-4 lg:gap-12 grid-cols-12">
                    <div className="w-[108px] h-[108px] col-span-12 lg:col-span-2 flex items-center justify-center border border-[#00325B] rounded-full mb-6">
                      <Image
                        src={`/images/icons/${s.icon}`}
                        alt={s.title}
                        height={50}
                        width={50}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>

                    <h3 className="text-4xl font-medium leading-tight col-span-12 lg:col-span-3 text-[#00325B]">
                      {s.title}
                    </h3>

                    <p className="text-2xl font-normal col-span-12 lg:col-span-7 text-[#4B5563]">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <section className="mt-20 h-[500px]  lg:h-[172px] w-full relative rounded-2xl overflow-hidden">
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
          </section>
        </div>
      </section>

      <section aria-labelledby="clients-heading" className="py-12 px-6">
        <div className="text-center space-y-6">
          <p
            className={
              " inline-flex justify-center items-center w-full gap-2 text-xl uppercase text-[#C4161C] font-light font-manrope"
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
            Clients
          </p>

          <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-[#00325B] text-center">
            Brands We’ve Worked With
          </h2>
        </div>

        <ul
          role="list"
          className="mx-auto mt-10 max-w-[102rem] grid place-items-center  gap-x-12 gap-y-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7"
        >
          {clients.map((client, i) => (
            <li
              key={client}
              className="flex-shrink-0 lg:w-[130px] w-[100px] h-[100px] lg:h-[130px] relative"
            >
              <Image
                src={`/images/home/clients/${client}`}
                alt={`Client ${i + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 140px, 140px"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </section>
      <GetInTouch />
    </div>
  );
}
