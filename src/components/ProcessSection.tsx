import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProcessSection({
  isContactPage = false,
}: {
  isContactPage?: boolean;
}) {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-0">
      {!isContactPage ? (
        <div className="relative h-[400px] md:h-[600px]">
          <Image
            src="/images/services/vector.webp"
            alt="Service Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40  px-6">
            <p className="text-5xl font-semibold mb-6 ">
              See how we work from <br className="hidden lg:block" />
              start to finish
            </p>
            <button className="w-auto px-8 py-5 border border-white rounded-full text-lg hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300">
              Our Process
            </button>
          </div>
        </div>
      ) : (
        <div className="relative h-[400px] md:h-[600px] ">
          <Image
            src="/images/services/vector.webp"
            alt="Service Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40  px-6">
            <p className="text-3xl md:text-5xl font-semibold mb-6 max-w-xl">
              Want to see everything <br /> we can do?
            </p>
            <Link
              href="/services"
              className="px-8 py-5 border border-white rounded-full text-lg hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300"
            >
              Services
            </Link>
          </div>
        </div>
      )}

      <div className="relative h-[400px] md:h-[600px]">
        <Image
          src="/images/services/vector-1.webp"
          alt="Service Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40  px-6">
          <p className="text-5xl font-semibold mb-6 max-w-xl">
            Learn more about <br /> who we are
          </p>
          <button className="w-auto px-8 py-5 border border-white rounded-full text-lg hover:bg-[#C4161C] hover:border-[#C4161C] hover:text-white transition-all duration-300">
            Who we are
          </button>
        </div>
      </div>
    </div>
  );
}
