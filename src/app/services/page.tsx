import React from "react";
import ServicesPage from "@/pages/ServicesPage";
import { Metadata } from "next";
import { icons, title } from "@/utils/meta";

const siteName = process.env.SITE_NAME;
const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  title: `DTCM Event Permit Service UAE | ${siteName}`,
  description:
    "DTCM Event Permit Service UAE,  Event management services Dubai, Event planning companies Dubai, Event management companies Dubai.",
  icons,
  openGraph: {
    title: `DTCM Event Permit Service UAE | ${siteName}`,
    description:
      "DTCM Event Permit Service UAE,  Event management services Dubai, Event planning companies Dubai, Event management companies Dubai.",
    images: [
      {
        url: `${siteUrl}/images/opengraph/300x300.png`,
        width: 300,
        height: 300,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x627.png`,
        width: 1200,
        height: 627,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x630.png`,
        width: 1200,
        height: 630,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x675.png`,
        width: 1200,
        height: 675,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1080x1080.png`,
        width: 1080,
        height: 1080,
        alt: `${title} | ${siteName}`,
      },
    ],
  },
  alternates: {
    canonical: "https://perfettoevents.ae",
  },
};

export default function page() {
  return <ServicesPage />;
}
