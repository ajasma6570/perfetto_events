import type { Metadata } from "next";
import { Geist, Geist_Mono, Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perfetto",
  description:
    "Event Management Dubai, Event planner Dubai, Event Organizer UAE, DTCM event permits UAE, Exhibition in Dubai, Dxb events UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${albertSans.className} antialiased relative`}>
        {" "}
        <Navbar />{" "}
        {/* <div className="md:bg-yellow-200 fixed left-0 text-orange-500 top-20 z-[100] flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase  sm:bg-red-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200">
          <span className="block sm:hidden ">all</span>
          <span className="hidden sm:block md:hidden">sm</span>
          <span className="hidden md:block lg:hidden">md</span>
          <span className="hidden lg:block xl:hidden">lg</span>
          <span className="hidden xl:block 2xl:hidden">xl</span>
          <span className="hidden 2xl:block">2xl</span>
        </div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
