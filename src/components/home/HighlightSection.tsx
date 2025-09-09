"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HighlightSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [translate, setTranslate] = useState(0);
  const [direction, setDirection] = useState(-1);
  const [maxScroll, setMaxScroll] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  const images = [
    { src: "vector-4.webp", width: 600, height: 700 },
    { src: "vector-5.webp", width: 900, height: 700 },
    { src: "vector-6.webp", width: 600, height: 700 },
    { src: "vector-7.webp", width: 900, height: 700 },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (imagesLoaded === images.length) {
      setAllLoaded(true);
      const container = containerRef.current;
      if (container) {
        const parentWidth = container.parentElement?.offsetWidth || 0;
        setMaxScroll(container.scrollWidth - parentWidth);
      }
    }
  }, [imagesLoaded, images.length]);

  useEffect(() => {
    if (!allLoaded || !inView) return;
    let frame: number;
    const speed = 1.5;
    const animate = () => {
      setTranslate((prev) => {
        let next = prev + direction * speed;
        if (next <= -maxScroll) {
          setDirection(1);
          next = -maxScroll;
        } else if (next >= 0) {
          setDirection(-1);
          next = 0;
        }
        return next;
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [direction, maxScroll, allLoaded, inView]);

  return (
    <section ref={sectionRef} className="pb-20">
      <div className="max-w-[102rem] w-full mx-auto space-y-8 px-5 sm:px-6">
        <p
          className={
            " inline-flex justify-start w-full items-center gap-2 text-xl uppercase text-[#C4161C] font-light text-center mt-20 font-manrope"
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
          Gallery
        </p>
        <p className="text-4xl  lg:text-5xl text-[#00325B] font-medium leading-tight">
          Highlights From Our Creations
        </p>
        <p
          className={
            "text-xl lg:text-2xl font-medium text-[#4B5563] font-manrope"
          }
        >
          See how ideas turn into unforgettable experiences{" "}
          <br className="hidden lg:block" />
          through our event showcase.
        </p>
      </div>
      <div className="w-full ml-auto max-w-[110.5rem] overflow-hidden lg:pl-6 space-y-12">
        <div className="overflow-hidden mt-20 px-5 sm:px-6">
          <div
            ref={containerRef}
            className="flex gap-4"
            style={{
              transform: `translateX(${translate}px)`,
              transition: "transform 0.05s linear",
            }}
          >
            {images.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[calc(1*3+1)/3] w-auto flex-shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={`/images/home/${item.src}`}
                  alt={`Gallery ${i + 1}`}
                  height={item.height}
                  width={item.width}
                  className="object-cover"
                  style={{ height: "auto", width: "auto" }}
                  onLoad={() => setImagesLoaded((c) => c + 1)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      <div className="px-6 mt-16 w-full ml-auto max-w-[110.5rem]">
        <Link
          href={"/gallery"}
          className="border border-[#F7931E] text-[#001A2E] text-xl lg:text-2xl rounded-full w-auto py-4 lg:py-6 px-7 lg:px-10 font-medium hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300"
        >
          See the Moments
        </Link>
      </div>
    </section>
  );
}
