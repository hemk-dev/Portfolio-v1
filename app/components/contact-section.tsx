"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset form status after 2.5 seconds
      setTimeout(() => setFormStatus('idle'), 2500);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_60%)]" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            <span className="text-foreground">Let's </span><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E87B3D] to-[#E87B3D]">get in touch</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Fill out the form and I'll get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/70 backdrop-blur-md rounded-xl shadow-lg p-5 border border-primary/15 hover:border-primary/25 transition-all duration-400 group"
          whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1 pl-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 py-2 rounded-md border border-primary/15 bg-background/80 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200 outline-none hover:border-primary/25 hover:rounded-lg focus:rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1 pl-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  required
                  className="w-full px-3 py-2 rounded-md border border-primary/15 bg-background/80 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200 outline-none hover:border-primary/25 hover:rounded-lg focus:rounded-lg text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1 pl-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full px-3 py-2 rounded-md border border-primary/15 bg-background/80 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200 outline-none hover:border-primary/25 hover:rounded-lg focus:rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1 pl-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows={4}
                className="w-full px-3 py-2 rounded-md border border-primary/15 bg-background/80 focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200 outline-none resize-none hover:border-primary/25 hover:rounded-lg focus:rounded-lg text-sm"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full bg-gradient-to-r from-primary to-primary/80 text-white font-semibold py-2.5 px-6 rounded-md hover:from-primary/90 hover:to-primary/70 transition-all duration-200 hover:rounded-lg focus:rounded-lg text-base shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>

          {formStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-3 bg-primary/10 text-primary rounded-md text-sm text-center border border-primary/15 shadow-sm"
            >
              Message sent! I'll get back to you soon.
            </motion.div>
          )}

          {formStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-3 bg-destructive/10 text-destructive rounded-md text-sm text-center border border-destructive/15 shadow-sm"
            >
              {errorMessage}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}; 