"use client";

import Hero from "@/components/home/Hero";
import CompanySection from "@/components/home/CompanySection";
import ClientsShowcase from "@/components/home/ClientsShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import Testimonials from "@/components/home/Testimonials";
import HighlightSection from "@/components/home/HighlightSection";
import BlogSection from "@/components/home/BlogSection";
import GetInTouch from "@/components/home/GetInTouch";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <main>
      <Hero />
      <CompanySection />
      <ClientsShowcase />
      <ServicesSection />
      <WorkflowSection />
      <Testimonials />
      <HighlightSection />
      <BlogSection />
      <GetInTouch />
      <Footer />
    </main>
  );
}
