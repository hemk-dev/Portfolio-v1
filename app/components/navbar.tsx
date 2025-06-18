"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Projects", href: "#work" },
  { name: "About Me", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ["home", "about", "services", "skills", "work", "contact"];
    sections.forEach((sectionId) => {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -100; // Adjust this value to match your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const yOffset = -100; // Adjust this value to match your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
        <nav className={cn(
          "backdrop-blur-md bg-background/70 shadow-lg border-0",
          "transition-all duration-500 ease-out py-3 w-full px-4 md:px-8",
          isScrolled ? "rounded-full" : "rounded-2xl",
          "md:w-[calc(100%-8rem)]",
          "lg:w-[calc(100%-16rem)]",
          isScrolled && "md:w-[calc(100%-16rem)] lg:w-[calc(100%-28rem)] shadow-xl bg-background/80"
        )}>
          <div className="relative">
            <div className="flex justify-between items-center h-10">
              {/* Logo */}
              <button
                onClick={() => scrollToSection("#home")}
                className={cn(
                  "flex items-center space-x-3 group transition-all duration-300 ease-in-out",
                  isScrolled ? "scale-95" : "scale-100"
                )}
              >
                <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  H
                </div>
                <span className="font-medium text-base tracking-tight group-hover:text-primary transition-colors duration-300">Hem Kamli</span>
              </button>
              
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-base font-normal transition-all duration-300 ease-in-out relative py-1 focus:outline-none",
                      "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300",
                      activeSection === item.href.slice(1)
                        ? "text-primary after:opacity-100 after:scale-x-100"
                        : "after:opacity-0 after:scale-x-0 hover:text-primary hover:after:opacity-100 hover:after:scale-x-100 focus:after:opacity-0 focus:after:scale-x-0"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Desktop Contact Button */}
              <Button 
                onClick={scrollToContact}
                size="sm"
                className={cn(
                  "hidden md:flex px-6 py-2 text-sm font-medium rounded-full gradient-warm text-white shadow-sm hover:shadow-md transition-all duration-300",
                  isScrolled ? "scale-95" : "scale-100"
                )}
              >
                Contact
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-md z-40 transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-card/80 backdrop-blur-md z-50 shadow-xl transition-transform duration-300 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6">
          <div className="flex flex-col space-y-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-lg font-normal transition-colors duration-300 text-left relative group",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
          </div>
          <div className="mt-auto">
            <Button
              onClick={scrollToContact}
              className="w-full gradient-warm text-white text-base py-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}