import GetInTouch from "@/components/home/GetInTouch";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function AboutPage() {
  const ourProcess = [
    {
      title: "Briefing",
      body: "At this step, the best minds in the business huddle around a table to draw out the best plan for you. We are as invested in this as you are.",
      icon: "icon-12.webp",
    },
    {
      title: "Conceptualization",
      body: "Our creative team transforms insights into ideas, mapping out themes, formats, and experiences that resonate. Every concept is tailored to your vision and brand identity.",
      icon: "icon-13.webp",
    },
    {
      title: "Planning",
      body: "Here, creativity meets structure. From vendor selection and timelines to logistics and budgeting, we ensure every moving part is coordinated with precision.",
      icon: "icon-14.webp",
    },
    {
      title: "Execution",
      body: "With the support of our partners, the work to breathe life into the event starts here. A smattering of pixie dust, we work tirelessly to ensure our clients are nothing short of amazed.",
      icon: "icon-15.webp",
    },
    {
      title: "Evaluation",
      body: "A fine-toothed comb in hand, we make sure every little detail is on point. After all, everything has to be just Perfecto!",
      icon: "icon-16.webp",
    },
  ];

  const whyChooseUs = [
    {
      icon: "icon-6.webp",
      title: "Certified Experience",
      desc: "Our portfolio is backed by years of expertise and proven excellence in delivering standout events.",
    },
    {
      icon: "icon-7.webp",
      title: "Great Support",
      desc: "From concepts to logistics, our expert team provides unmatched support every step of the way.",
    },
    {
      icon: "icon-8.webp",
      title: "Memorable Events",
      desc: "Through innovation and creativity, we create events that leave lasting impressions.",
    },
    {
      icon: "icon-9.webp",
      title: "Quality Service",
      desc: "Dedicated to delivering high standards while ensuring cost-effectiveness and reliability.",
    },
    {
      icon: "icon-10.webp",
      title: "Success Guaranteed",
      desc: "We measure success by delivering seamless results and exceeding expectations.",
    },
    {
      icon: "icon-11.webp",
      title: "Global Reach",
      desc: "With international presence, we bring your brand’s story to life across borders.",
    },
  ];

  let clients = [
    "image-1.webp",
    "image-2.webp",
    "image-3.webp",
    "image-4.webp",
    "image-5.webp",
    "image-6.webp",
    "image-7.webp",
    "image-8.webp",
    "image-9.webp",
    "image-10.webp",
    "image-11.webp",
    "image-12.webp",
    "image-13.webp",
    "image-14.webp",
  ];

  return (
    <div className="pt-24 space-y-20 ">
      <div className="pt-24 flex justify-center flex-col px-6 items-center text-center space-y-4 max-w-6xl mx-auto">
        <p
          className={cn(
            "text-xl uppercase text-[#C4161C] font-light",
            manrope.className
          )}
        >
          About us
        </p>
        <h1 className="text-4xl lg:text-[55px] text-[#00325B] font-medium">
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
        <ul className="p-5 space-y-8 text-center text-2xl mt-10">
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
          <p className="text-3xl lg:text-[40px] font-medium">75+ Clients</p>
          <span className="w-[4px] h-8 bg-[#00325B] hidden lg:block" />
          <span className="sr-only">600+ Events</span>
          <p className="text-3xl lg:text-[40px] font-medium">600+ Events</p>
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
            Why choose us
          </p>
          <h2 className="text-4xl font-bold text-[#00325B] mt-2">
            The Perfetto Advantage
          </h2>
          <p className="text-[#4B5563] text-2xl mt-4 font-normal">
            Perfetto Event Management takes pride in the fact that we are known
            for our hands-on <br className="hidden lg:block" /> and multifaceted
            approach when it comes to getting a job done. We have got it all to{" "}
            <br className="hidden lg:block" /> make your event a success – an
            eye for detail as well as the talent to see the big picture.
          </p>
        </div>

        <div className="w-full flex mt-20">
          <div className="hidden lg:block w-2/12"></div>
          <div className="w-full lg:w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

                <p className="text-[#4B5563] text-xl font-medium">
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
            className={cn(
              " inline-flex justify-center items-center w-full  gap-2 text-xl uppercase text-[#C4161C] font-light",
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

          <h2 className="text-[55px] font-medium tracking-tight text-[#00325B] text-center">
            What Goes on Behind the Scenes
          </h2>

          <p className="mt-3 font-normal text-center text-2xl mx-auto text-[#4B5563]">
            Every great event starts with organizing all the details, followed
            by the beautiful journey of executing them brilliantly. We offer a
            variety of options to help you make your event as perfect as you
            imagined it!
          </p>

          <div className="mt-20">
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
                      />
                    </div>

                    <h3 className="text-[33px] font-medium leading-tight col-span-12 lg:col-span-3 text-[#00325B]">
                      {s.title}
                    </h3>

                    <p className="text-[22px] leading-8 col-span-12 lg:col-span-7 text-[#4B5563]">
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
        <div className="text-center">
          <p
            className={cn(
              " inline-flex justify-center items-center w-full gap-2 text-xl uppercase text-[#C4161C] font-light",
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
            Clients
          </p>

          <h2 className="text-[55px] font-medium tracking-tight text-[#00325B] text-center">
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
