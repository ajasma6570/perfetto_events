import { clientsLogo } from "@/static-data/home";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function ClientsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const recalc = () => {
      const c = containerRef.current,
        r = rowRef.current;
      if (!c || !r) return;
      const delta = r.scrollWidth - c.clientWidth;
      setShift(delta > 0 ? -delta : 0);
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  return (
    <section className="bg-white pt-10 pb-20 lg:pb-28 lg:pt-16">
      <div
        ref={containerRef}
        className="h-[120px] lg:h-[160px] w-full overflow-hidden relative"
      >
        <div
          ref={rowRef}
          className="flex gap-20 absolute marquee"
          style={{
            ["--shift" as any]: `${shift}px`,
            ["--duration" as any]: "15s",
          }}
        >
          {clientsLogo.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] relative"
            >
              <Image
                src={`/images/home/clients/${client}`}
                alt={`Client ${index + 1}`}
                height={130}
                width={130}
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-bounce {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--shift));
          }
        }
        .marquee {
          animation: marquee-bounce var(--duration) linear infinite alternate;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
