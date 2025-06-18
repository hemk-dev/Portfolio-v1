"use client";

import { Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/hemk-dev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hem-kamli/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hemk.dev@gmail.com", label: "Email" },
];

export function Footer() {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { gsap } = require('gsap');
    gsap.to(e.currentTarget, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <footer className="py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <div className="flex flex-col space-y-1">
              <span className="font-semibold text-lg">Hem Kamli</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                onClick={handleButtonClick}
                className="h-10 w-10 hover:bg-foreground/5 transition-colors"
                asChild
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hem Kamli. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}