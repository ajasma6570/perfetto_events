import { Albert_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Event Management Dubai | ${siteName}`,
  description:
    "Event Management Dubai, Event planner Dubai, Event Organizer UAE, DTCM event permits UAE, Exhibition in Dubai, Dxb events UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/home/intro.webp"
          type="image/webp"
          fetchPriority="high"
        ></link>
        <link
          rel="preload"
          as="image"
          href="/images/home/intro-sm.webp"
          type="image/webp"
          fetchPriority="high"
        ></link>
      </head>
      <body
        className={`${albertSans.variable} ${manrope.variable} font-albert-sans antialiased relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
