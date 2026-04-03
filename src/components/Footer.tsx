'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto border-t border-gray-100">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="CodeTicks" width={32} height={32} unoptimized />
          <span className="text-sm text-gray-400">© 2026 CodeTicks Solutions, Inc.</span>
        </div>
        <a
          href="mailto:contact@codeticks.com"
          className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
        >
          contact@codeticks.com
        </a>
      </div>
    </footer>
  );
}
