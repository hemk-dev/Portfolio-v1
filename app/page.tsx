"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { SkillsSection } from "./components/skills-section";
import { WorkSection } from "./components/work-section";
import { Footer } from "./components/footer";
import { ContactSection } from "./components/contact-section";
import AboutMe from "@/components/AboutMe";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling behavior
    gsap.set("html", {
      scrollBehavior: "smooth"
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ServicesSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}