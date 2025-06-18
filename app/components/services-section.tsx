"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Database, Globe, Cloud, Blocks, CodeSquare } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Code,
    title: "API Development",
    description: "Build robust RESTful APIs and GraphQL endpoints with proper authentication, validation, and documentation.",
    features: [
      "REST & GraphQL APIs",
      "Authentication & Security",
      "API Documentation",
      "Rate Limiting"
    ]
  },
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    description: "Create complete web applications from database design to user interface with modern technologies.",
    features: [
      "React/Next.js Frontend",
      "Node.js Backend",
      "Database Design",
      "Responsive UI/UX"
    ]
  },
  {
    icon: Cloud,
    title: "AWS Deployments",
    description: "Deploy and scale your applications on AWS with best practices for security and performance.",
    features: [
      "EC2 & Lambda",
      "RDS & DynamoDB",
      "S3 & CloudFront",
      "CI/CD Pipelines"
    ]
  },
  {
    icon: Blocks,
    title: "Automation with n8n",
    description: "Streamline your workflows with custom automation solutions using n8n and other tools.",
    features: [
      "Workflow Automation",
      "API Integrations",
      "Data Synchronization",
      "Custom Scripts"
    ]
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Design and optimize databases for performance, scalability, and data integrity.",
    features: [
      "Database Design",
      "Query Optimization",
      "Data Migration",
      "Backup Strategies"
    ]
  },
  {
    icon: CodeSquare,
    title: "Code Review & Consulting",
    description: "Provide expert code reviews, architecture guidance, and technical consulting services.",
    features: [
      "Code Review",
      "Architecture Design",
      "Performance Optimization",
      "Best Practices"
    ]
  }
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -8,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section id="services" className="py-24 lg:py-32">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E87B3D] to-[#E87B3D]">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
              className="group cursor-pointer"
            >
              <div className="border border-primary/20 rounded-lg p-8 h-full bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary/5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-6">
                  <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary/80" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-foreground group-hover:text-primary/90">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6 group-hover:text-foreground/80">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}