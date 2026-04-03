import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodeTicks Solutions | We Build AI Agents',
  description: 'CodeTicks Solutions builds autonomous AI agents that work for your business. From workflow automation to custom LLM solutions.',
  openGraph: {
    title: 'CodeTicks Solutions | We Build AI Agents',
    description: 'Autonomous AI agents that work while you sleep.',
    url: 'https://codeticks.com',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
