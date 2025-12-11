import React from "react";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { useRef } from "react";

export default function App() {
  const contactSectionRef = useRef<HTMLElement | null>(null);
  const portfolioSectionRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (Ref: React.RefObject<HTMLElement | null>) => {
    if (Ref == null) return;
    Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <HeroSection
        portfolioSectionRef={portfolioSectionRef}
        contactSectionRef={contactSectionRef}
        handleScrollFn={scrollToSection}
      />
      <ServicesSection />
      <PortfolioSection ref={portfolioSectionRef} /> {/* ref */}
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <ContactSection ref={contactSectionRef} />
      <Footer />
    </div>
  );
}
