"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Service Portal",
    description: "A client-service request platform with n8n automation and real-time notifications. This project is a modern service request portal built for agencies to seamlessly handle client inquiries. This platform allows users to submit customized service requests through a responsive frontend interface.",
    tech: [
      { name: "NextJS", logo: "/images/skills/nextjs.svg" },
      { name: "GSAP", logo: "/images/skills/gsap.svg" },
      { name: "n8n", logo: "/images/skills/n8n.svg" },
      { name: "Docker", logo: "/images/skills/docker.svg" }
    ],
    liveUrl: "https://service-portal-indol.vercel.app/",
    githubUrl: "https://github.com/hemk-dev/service_portal",
    previewImages: [
      "/images/projects/service-portal-preview-1.png",
      "/images/projects/service-portal-preview-2.png",
      "/images/projects/service-portal-preview-3.png",
      "/images/projects/service-portal-preview-4.png",
      "/images/projects/service-portal-preview-5.png"
    ],
    highlights: ["Dynamic service request form", " Real-time automation with n8n", "Email notifications sent to the business", "Responsive design"]
  },
  {
    title: "Landing Page",
    description: "Pixel Pulse Studio is a modern animated landing page with smooth animations for creative agencies or digital studios seeking immersive online presence.",
    tech: [
      { name: "NextJS", logo: "/images/skills/nextjs.svg" },
      { name: "GSAP", logo: "/images/skills/gsap.svg" },
      { name: "Tailwind", logo: "/images/skills/tailwind.svg" },
      { name: "Git", logo: "/images/skills/git.svg" }
    ],
    liveUrl: "https://pixel-pulse-studio.vercel.app",
    githubUrl: "https://github.com/hemk-dev/PixelPulse-studio",
    previewImages: [
      "/images/projects/landing-page-preview-1.png",
      "/images/projects/landing-page-preview-2.png",
      "/images/projects/landing-page-preview-3.png",
      "/images/projects/landing-page-preview-4.png",
      "/images/projects/landing-page-preview-5.png"
    ],
    highlights: ["Smooth GSAP-powered animations", "Tailwind CSS for modern UI styling", "Lightweight and fast-loading", "Responsive design"]
  },
  {
    title: "E-Commerce API",
    description: "The E-commerce API is a robust and scalable backend solution built with Node.js, Express, and PostgreSQL, featuring secure Stripe integration for seamless payment processing. It supports full CRUD operations for products, users, and orders, along with role-based authentication and cart management.",
    tech: [
      { name: "NestJS", logo: "/images/skills/nest.svg" },
      { name: "Stripe", logo: "/images/skills/stripe.svg" },
      { name: "PostgreSQL", logo: "/images/skills/postgresql.svg" },
      { name: "Git", logo: "/images/skills/git.svg" }
    ],
    liveUrl: "https://e-commerce-api-dwrx.onrender.com/api",
    githubUrl: "https://github.com/hemk-dev/e-commerce-API",
    previewImages: [
      "/images/projects/e-commerce-api-preview-1.png"
    ],
    highlights: ["Secure Authentication", "Stripe payment gateway integration", "Cart & order management", "Scalable and RESTful architecture"]
  },
  {
    title: "SynviaPharma",
    description: "Global pharmaceutical export website for product showcasing and inquiry management, it is a website for a certified pharmaceutical export company, built to present a wide range of high-quality medical products to global buyers. ",
    tech: [
      { name: "NextJS", logo: "/images/skills/nextjs.svg" },
      { name: "GSAP", logo: "/images/skills/gsap.svg" },
      { name: "Tailwind", logo: "/images/skills/tailwind.svg" },
      { name: "Git", logo: "/images/skills/git.svg" }
    ],
    liveUrl: "https://synviapharma.com",
    githubUrl: "",
    previewImages: [
      "/images/projects/synviapharma-preview-1.png",
      "/images/projects/synviapharma-preview-2.png",
      "/images/projects/synviapharma-preview-3.png",
      "/images/projects/synviapharma-preview-4.png",
      "/images/projects/synviapharma-preview-5.png",
      "/images/projects/synviapharma-preview-6.png"
    ],
    highlights: ["International B2B-focused design", "Inquiry management", " Product showcase with keywords", "Responsive design"]
  },
];

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);
  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({});
  const [inView, setInView] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.from(project, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, containerRef);

    // Intersection Observer for each project
    const observers: IntersectionObserver[] = [];
    projectsRef.current.forEach((project, idx) => {
      if (!project) return;
      const projectTitle = projects[idx].title;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          setInView((prev) => ({ ...prev, [projectTitle]: entry.isIntersecting }));
        },
        { threshold: 0.3 }
      );
      observer.observe(project);
      observers.push(observer);
    });

    return () => {
      ctx.revert();
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    // Set up intervals only for cards in view
    const intervals: NodeJS.Timeout[] = [];
    projects.forEach((project) => {
      if (inView[project.title]) {
        const interval = setInterval(() => {
          setActiveImages((prev) => ({
            ...prev,
            [project.title]: ((prev[project.title] || 0) + 1) % project.previewImages.length,
          }));
        }, 5000);
        intervals.push(interval);
      }
    });
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [inView]);

  const handleImageNavigation = (projectTitle: string, direction: 'prev' | 'next') => {
    setActiveImages((prev) => {
      const currentIndex = prev[projectTitle] || 0;
      const project = projects.find((p) => p.title === projectTitle);
      if (!project) return prev;

      const newIndex = direction === 'next'
        ? (currentIndex + 1) % project.previewImages.length
        : (currentIndex - 1 + project.previewImages.length) % project.previewImages.length;

      return { ...prev, [projectTitle]: newIndex };
    });
  };

  const handleProjectHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -12,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleProjectLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <section id="work" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary/80 tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            <span className="text-foreground">Featured </span><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E87B3D] to-[#E87B3D]">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and discover how I can help bring your ideas to life
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) projectsRef.current[index] = el;
              }}
              onMouseEnter={handleProjectHover}
              onMouseLeave={handleProjectLeave}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative border border-border/40 rounded-2xl p-8 lg:p-16 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/5">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-primary/80">Project {index + 1}</span>
                        <div className="h-px w-12 bg-gradient-to-r from-primary/50 to-transparent" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-medium tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base text-justify">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-medium tracking-wide text-primary/80">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-3 text-sm text-muted-foreground group/item">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/item:scale-150 transition-transform duration-300" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-4 py-2 bg-muted/50 text-muted-foreground text-sm rounded-lg hover:bg-muted/70 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/5"
                        >
                          <div className="w-5 h-5 relative">
                            <Image
                              src={tech.logo}
                              alt={`${tech.name} logo`}
                              fill
                              className="object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons below carousel */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleButtonClick}
                        className="group/btn bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg px-6 py-3 flex items-center justify-center text-base font-medium w-full sm:w-auto"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        View Live Demo
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleButtonClick}
                          className="group/btn hover:bg-primary/5 transition-all duration-300 rounded-lg px-6 py-3 flex items-center justify-center text-base font-medium w-full sm:w-auto"
                        >
                          <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="relative group/image overflow-hidden rounded-xl aspect-video border border-border/20 bg-gradient-to-br from-primary/5 to-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/5 z-10" />
                    {project.previewImages.map((image, imageIndex) => (
                      <Image
                        key={image}
                        src={image}
                        alt={`${project.title} preview ${imageIndex + 1}`}
                        fill
                        className={`object-contain transition-all duration-700 ${
                          (activeImages[project.title] || 0) === imageIndex
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95 absolute'
                        }`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)] opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                    
                    {/* Navigation Controls */}
                    <div className="absolute inset-y-0 left-0 flex items-center z-20">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleImageNavigation(project.title, 'prev');
                        }}
                        className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-primary hover:bg-background/90 transition-all duration-300 ml-4 opacity-0 group-hover/image:opacity-100 hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center z-20">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleImageNavigation(project.title, 'next');
                        }}
                        className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-primary hover:bg-background/90 transition-all duration-300 mr-4 opacity-0 group-hover/image:opacity-100 hover:scale-110"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                      {project.previewImages.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveImages((prev) => ({
                              ...prev,
                              [project.title]: imageIndex,
                            }));
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            (activeImages[project.title] || 0) === imageIndex
                              ? 'bg-primary scale-125'
                              : 'bg-primary/30 hover:bg-primary/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}