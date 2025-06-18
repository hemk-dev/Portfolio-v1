import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hem Kamli - Full-Stack Developer',
  description: 'Freelance Full-Stack Developer specializing in modern web applications, API development, and user experience design.',
  keywords: [
    'Full-Stack Developer',
    'Web Development',
    'React Developer',
    'Node.js Developer',
    'UI/UX Design',
    'JavaScript Expert',
    'TypeScript Developer',
    'Modern Web Applications',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative min-h-screen">
          {/* Background gradient ornaments */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
          </div>

          {/* Main content */}
          <main className="relative z-10">
            {children}
          </main>

          {/* Noise texture overlay */}
          <div 
            className="pointer-events-none fixed inset-0 z-30 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </body>
    </html>
  );
}