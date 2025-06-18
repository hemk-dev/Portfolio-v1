"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Animate background elements
      tl.from(".hero-bg-element", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
      });

      // Animate content elements
      tl.from(".hero-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2
      }, "-=0.4")
      .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3")
      .from(".hero-image", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-bg-element absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="hero-bg-element absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
      </div>

      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="hero-subtitle inline-flex items-center px-4 py-2 glass-card-primary rounded-full text-primary font-medium text-sm">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-soft" />
                Available for freelance work
              </div>
              
              <h1 className="hero-title font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                Hi, I'm
                <span className="block gradient-text font-light">
                  Hem Kamli
                </span>
              </h1>

              <p className="hero-subtitle text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I craft exceptional digital experiences through clean code, innovative design, and thoughtful user interactions. 
                Let's bring your vision to life with modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group px-8 py-6 gradient-warm text-white rounded-full transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group px-8 py-6 rounded-full glass-card-primary border-primary/20 transition-all duration-500 hover:scale-105 hover:border-primary/30 hover:bg-primary/5"
              >
                <a href="/files/Hem-Kamli-CV.pdf" download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="hero-cta flex items-center space-x-6 pt-8">
              <span className="text-muted-foreground font-medium">Follow me:</span>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:hem@kamli.dev', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="outline"
                    size="icon"
                    asChild
                    className="group p-3 rounded-full glass-card-primary border-primary/20 transition-all duration-300 hover:scale-110 hover:border-primary/30 hover:bg-primary/5"
                  >
                    <a href={href} title={label}>
                      <Icon className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="hero-image lg:justify-self-end">
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main card */}
                <div className="relative glass-card-primary rounded-3xl p-8 border border-primary/20 shadow-xl backdrop-blur-xl bg-background/40 hover:bg-background/50 transition-all duration-300">
                  <div className="space-y-8">
                    {/* Code window */}
                    <div className="bg-background/95 rounded-2xl p-6 font-mono text-sm shadow-lg border border-primary/10">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <div className="text-green-400">
                        <div>const developer = <span className="text-foreground">{`{`}</span></div>
                        <div className="ml-4 text-blue-400">name: <span className="text-yellow-400">"Hem Kamli"</span>,</div>
                        <div className="ml-4 text-blue-400">skills: <span className="text-purple-400">["React", "Node.js", "GSAP"]</span>,</div>
                        <div className="ml-4 text-blue-400">passion: <span className="text-yellow-400">"Creating Amazing UX"</span></div>
                        <div className="text-foreground">{`}`}</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="group">
                        <div className="text-center p-4 glass-card rounded-xl border border-primary/10 bg-background/80 hover:bg-background/90 transition-all duration-300">
                          <div className="text-2xl font-bold bg-gradient-to-br from-primary/90 to-accent/90 bg-clip-text text-transparent">20+</div>
                          <div className="text-sm font-medium text-muted-foreground mt-1">Projects</div>
                        </div>
                      </div>
                      <div className="group">
                        <div className="text-center p-4 glass-card rounded-xl border border-primary/10 bg-background/80 hover:bg-background/90 transition-all duration-300">
                          <div className="text-2xl font-bold bg-gradient-to-br from-accent/90 to-primary/90 bg-clip-text text-transparent">3+</div>
                          <div className="text-sm font-medium text-muted-foreground mt-1">Years Exp</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg rotate-12 animate-float opacity-90" />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-2xl shadow-lg -rotate-12 animate-float" style={{ animationDelay: '-0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}