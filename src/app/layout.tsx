import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodeTicks Solutions | AI Consulting That Delivers Results',
  description: 'CodeTicks Solutions transforms businesses with AI strategy, machine learning, and intelligent automation. Trusted by utilities, real estate, and enterprise clients nationwide.',
  keywords: 'AI consulting, machine learning, AI strategy, utilities AI, real estate AI, business automation, LLM integration',
  openGraph: {
    title: 'CodeTicks Solutions | AI Consulting That Delivers Results',
    description: 'Transform your business with AI solutions that drive real ROI.',
    url: 'https://codeticks.com',
    siteName: 'CodeTicks Solutions',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
