"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const clients = [
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
];

export default function ClientScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState(0);
  const [direction, setDirection] = useState(-1);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const parentWidth = container.parentElement?.offsetWidth || 0;
      setMaxScroll(container.scrollWidth - parentWidth);
    }
  }, []);

  useEffect(() => {
    let frame: number;
    const speed = 2.5;

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
  }, [direction, maxScroll]);

  return (
    <section className="h-[200px] w-full overflow-hidden relative bg-white py-10">
      <div
        ref={containerRef}
        className="flex gap-20 absolute"
        style={{ transform: `translateX(${translate}px)` }}
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[130px] h-[130px] relative bg-white"
          >
            <Image
              src={`/images/clients/${client}`}
              alt={`Client ${index + 1}`}
              width={130}
              height={130}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
