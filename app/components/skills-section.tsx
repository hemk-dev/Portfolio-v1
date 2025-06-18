"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  {
    name: "HTML",
    logo: "/images/skills/html.svg",
    hours: "300+ hrs"
  },,

  {
    name: "Tailwind",
    logo: "/images/skills/tailwind.svg",
    hours: "450+ hrs"
  },
  {
    name: "Bootstrap",
    logo: "/images/skills/bootstrap.svg",
    hours: "200+ hrs"
  },
  {
    name: "Framer",
    logo: "/images/skills/framer.svg",
    hours: "150+ hrs"
  },
  {
    name: "JavaScript",
    logo: "/images/skills/js.svg",
    hours: "600+ hrs"
  },
  {
    name: "Python",
    logo: "/images/skills/python.svg",
    hours: "500+ hrs"
  },
  {
    name: "NodeJs",
    logo: "/images/skills/node.svg",
    hours: "600+ hrs"
  },
  {
    name: "React",
    logo: "/images/skills/react.svg",
    hours: "400+ hrs"
  },
  {
    name: "Django",
    logo: "/images/skills/django.svg",
    hours: "200+ hrs"
  },
  {
    name: "NextJs",
    logo: "/images/skills/nextjs.svg",
    hours: "400+ hrs"
  },
  {
    name: "NestJs",
    logo: "/images/skills/nest.svg",
    hours: "450+ hrs"
  },
  {
    name: "n8n",
    logo: "/images/skills/n8n.svg",
    hours: "100+ hrs"
  },
  {
    name: "GraphQL",
    logo: "/images/skills/graphql.svg",
    hours: "180+ hrs"
  },
  {
    name: "MySQL",
    logo: "/images/skills/mysql.svg",
    hours: "350+ hrs"
  },
  {
    name: "MongoDB",
    logo: "/images/skills/mongodb.svg",
    hours: "400+ hrs"
  },
  {
    name: "PostgreSQL",
    logo: "/images/skills/postgresql.svg",
    hours: "350+ hrs"
  },
  {
    name: "Redis",
    logo: "/images/skills/redis.svg",
    hours: "300+ hrs"
  },
  {
    name: "Git",
    logo: "/images/skills/git.svg",
    hours: "150+ hrs"
  },
  {
    name: "Docker",
    logo: "/images/skills/docker.svg",
    hours: "250+ hrs"
  },
  {
    name: "AWS",
    logo: "/images/skills/aws.svg",
    hours: "300+ hrs"
  }
];

const expertiseCapsules = [
  "Agile Development",
  "RESTful APIs",
  "Microservices",
  "CI/CD",
  "Test-Driven Development",
  "Responsive Design",
  "Performance Optimization",
  "Security Best Practices",
  "Code Review",
  "Technical Documentation",
  "Version Control",
  "Cloud Architecture"
];

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const capsulesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      // Animate capsules
      if (capsulesRef.current) {
        gsap.from(capsulesRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: capsulesRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E87B3D] to-[#E87B3D]">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I use to build scalable, performant applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill?.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden cursor-pointer rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 flex flex-col items-center hover-card glow transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
              
              <div className="w-12 h-12 mb-4 relative z-10 flex items-center justify-center">
                <Image
                  src={skill?.logo || ""}
                  alt={`${skill?.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain w-12 h-12 filter drop-shadow-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
                />
              </div>
              
              <h3 className="text-xl font-medium text-foreground mb-1 relative z-10 transition-all duration-500 ease-out group-hover:text-primary">
                {skill?.name}
              </h3>
              
              <p className="text-sm font-medium text-primary/80 relative z-10 transition-all duration-500 ease-out group-hover:text-primary">
                {skill?.hours}
              </p>
            </div>
          ))}
        </div>

        <div ref={capsulesRef} className="mt-16">
          <h3 className="text-2xl font-normal tracking-wide font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseCapsules.map((capsule, index) => (
              <div
                key={index}
                className="cursor-pointer group relative px-4 py-2 rounded-full border border-border/50 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm text-sm font-medium text-foreground/90 hover:text-primary transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(var(--primary-rgb),0.15)] hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/5"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-accent/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">{capsule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}