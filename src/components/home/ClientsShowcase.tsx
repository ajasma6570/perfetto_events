import Image from "next/image";
import React from "react";

export default function ClientsShowcase() {
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
  ];
  return (
    <section className="h-[300px] w-full overflow-hidden relative bg-white py-12">
      <div className="flex gap-20 absolute animate-loop-scroll">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[130px] h-[130px] relative"
          >
            <Image
              src={`/images/clients/${client}`}
              alt={`Client ${index + 1}`}
              height={130}
              width={130}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
