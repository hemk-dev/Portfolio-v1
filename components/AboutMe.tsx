"use client";

import { Button } from "@/components/ui/button";
import { Mail, Clock, MessageCircle, User, Users, Globe, Code2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Happy Clients" },
];

const workProcess = [
  { step: 1, title: "Discovery", description: "Understanding your requirements and goals" },
  { step: 2, title: "Planning", description: "Architecture design and technology selection" },
  { step: 3, title: "Development", description: "Clean, scalable code with best practices" },
  { step: 4, title: "Testing", description: "Thorough testing and quality assurance" },
  { step: 5, title: "Deployment", description: "Smooth launch and ongoing support" },
];

const testimonials = [
  {
    name: "Aditya",
    role: "Founder of SynviaPharma",
    quote: "Working with Hem on the Synvia Pharma website was a smooth and rewarding experience. He delivered a clean, professional site that perfectly represents our global brand and makes inquiries seamless for our clients.",
    rating: 5,
    image: "/aditya.jpg "
  },
  {
    name: "Anonymous",
    role: "Upwork Client",
    quote: "Hem delivered outstanding work on our web application project. His expertise in both frontend and backend made the entire development process smooth and efficient. He was proactive, detail-oriented, and communicated clearly throughout the project. Highly recommended for any full-stack development work!",
    rating: 4,
    image: "/sarah-chen.jpg"
  },
  {
    name: "Anonymous",
    role: "Upwork Client",
    quote: "Hem was exceptional in building the backend architecture of our platform. His API development was clean, secure, and well-documented. He also ensured smooth integration with the frontend and handled database design with precision",
    rating: 5,
    image: "/mike-johnson.jpg"
  }
];

export default function AboutMe() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="w-full py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-24 xl:px-36 2xl:px-48 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-light tracking-tight mb-10"
        >
          <span className="text-foreground">About </span><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E87B3D] to-[#E87B3D]">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-8 col-span-full md:col-span-4 lg:col-span-8 hover-card transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-primary/5 border border-primary/5 hover:border-primary/10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              {/* Avatar Section with animated gradient border */}
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-spin-slow" />
                <div className="absolute inset-0.5 rounded-full bg-background" />
                <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-primary/60" />
                </div>
              </div>

              {/* Info Section */}
              <div className="flex-1 text-center md:text-left space-y-4">
                {/* Available Status with enhanced animation */}
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-emerald-500 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-[glow_2s_ease-in-out_infinite]" 
                    style={{
                      boxShadow: '0 0 10px rgba(16, 185, 129, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)'
                    }}
                  />
                  <span>AVAILABLE TO WORK</span>
                </div>

                <div>
                  <h2 className="text-3xl font-normal mb-2 tracking-wide">
                    <span className="relative inline-block">
                      <span className="text-primary">Hem Kamli</span>
                    </span>
                  </h2>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                    <Code2 className="w-4 h-4 text-primary animate-pulse" />
                    <span className="font-normal">Software Developer</span>
                  </div>
                </div>

                <p className="text-muted-foreground font-normal leading-relaxed">
                  Passionate about crafting efficient, scalable solutions and delivering exceptional user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Always Available Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-6 col-span-full md:col-span-2 lg:col-span-4 flex flex-col items-center justify-center text-center hover-card transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-primary/5 border border-primary/5 hover:border-primary/10 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold shadow-sm tracking-wide">
                24/7 Availability
              </span>
              <h3 className="text-xl font-medium mb-2 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">Always Available</h3>
              <p className="text-muted-foreground/90 font-normal leading-relaxed text-sm max-w-xs mx-auto">
                Flexible schedule across time zones with quick response times.<br/>Your project's success is my priority.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid with enhanced animations */}
          {stats.map((stat, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="glass-card rounded-xl p-8 col-span-full md:col-span-2 lg:col-span-4 text-center hover-card transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-primary/5 border border-primary/5 hover:border-primary/10 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-3xl font-medium gradient-text mb-2 transition-all duration-500 ease-in-out group-hover:scale-110">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-normal">{stat.label}</div>
              </motion.div>
            );
          })}

          {/* Work Process with enhanced step indicators */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-8 col-span-full md:col-span-3 lg:col-span-6 hover-card transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-primary/5 border border-primary/5 hover:border-primary/10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h3 className="text-2xl font-medium mb-8 inline-flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work Process</span>
                <div className="h-px flex-1 min-w-[2rem] bg-gradient-to-r from-primary/20 to-accent/20" />
              </h3>
            </div>
            <div className="space-y-6">
              {workProcess.map((process, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={process.step}
                  className="flex items-start gap-4 group/item"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-[2px]" />
                    <div className="relative bg-gradient-to-br from-background via-background to-background/80 w-8 h-8 rounded-full flex items-center justify-center font-medium shadow-lg shadow-primary/10 transition-all duration-500 ease-in-out group-hover/item:scale-110 z-10 border border-primary/20">
                      <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {process.step}
                      </span>
                    </div>
                    {index < workProcess.length - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-10 bg-gradient-to-b from-primary/50 to-accent/50 transform -translate-x-1/2" />
                    )}
                  </div>
                  <div className="transform transition-all duration-300 ease-in-out group-hover/item:translate-x-2">
                    <h4 className="font-medium text-lg bg-gradient-to-br from-primary/90 to-accent/90 bg-clip-text text-transparent">{process.title}</h4>
                    <p className="text-sm text-muted-foreground/90 font-normal leading-relaxed mt-1">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Success Box */}
          <div className="glass-card rounded-xl p-6 col-span-full md:col-span-3 lg:col-span-6 hover-card overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-primary/5 border border-primary/5 hover:border-primary/10">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium inline-flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Clients Say</span>
                  <div className="h-px flex-1 min-w-[2rem] bg-gradient-to-r from-primary/20 to-accent/20" />
                </h3>
                {/* Client Avatars */}
                <div className="flex -space-x-2">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full bg-gradient-to-br from-background to-muted flex items-center justify-center ring-2 ring-background transition-all duration-500 ease-in-out cursor-pointer ${
                        index === currentTestimonial ? 'opacity-100 scale-110 ring-primary/20' : 'opacity-50 scale-100 hover:opacity-75'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    >
                      <User className="w-3 h-3 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="flex-1 relative">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-all duration-300 ease-in-out hover:scale-110" />
                    ))}
                  </div>

                  <div className="relative">
                    <div className="absolute top-0 left-0 w-8 h-8 -translate-x-2 -translate-y-2 text-4xl text-primary/20">"</div>
                    <p className="text-lg text-muted-foreground italic font-normal leading-relaxed px-6">
                      {testimonials[currentTestimonial].quote}
                    </p>
                    <div className="absolute bottom-0 right-0 w-8 h-8 translate-x-2 translate-y-2 text-4xl text-primary/20 rotate-180">"</div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-[2px] group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <User className="w-5 h-5 text-primary/60" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-base bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-sm text-muted-foreground/80">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-2 mt-6 pt-4 border-t border-primary/5">
                <button
                  onClick={previousTestimonial}
                  className="p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110 text-primary/60 hover:text-primary hover:bg-primary/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-sm text-primary/60">
                  {currentTestimonial + 1} / {testimonials.length}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110 text-primary/60 hover:text-primary hover:bg-primary/10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Let's Work Together Card */}
          <div className="glass-card-primary col-span-full p-10 hover-card transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-primary/5 border border-primary/5 hover:border-primary/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-normal mb-4 bg-gradient-to-br from-background to-background/80 bg-clip-text">Let's Work Together</h2>
              <p className="text-lg mb-8 font-normal leading-relaxed opacity-90">
                Ready to bring your project to life? Let's discuss how I can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="gradient-button flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 text-base px-8"
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      const yOffset = -100; // Match your navbar offset
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Connect
                </Button>
                <Button 
                  variant="outline"
                  className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 text-base px-8 border-2"
                  size="lg"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx global>{`
        @keyframes glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-gradient {
          background: linear-gradient(to right, var(--primary), var(--accent), var(--primary));
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradient 3s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        @keyframes spin-slow-30 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow-60 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(720deg);
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-spin-slow-30 {
          animation: spin-slow-30 30s linear infinite;
        }
        .animate-spin-slow-60 {
          animation: spin-slow-60 60s linear infinite;
        }
      `}</style>
    </section>
  );
} 