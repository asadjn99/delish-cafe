import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MenuPage() {
  return (
    <section className="w-full bg-white py-20 lg:py-32 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black text-[#111] uppercase tracking-wider mb-6">
          Our Menu
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          We are currently updating our delicious menu items. Check back soon for our new offerings!
        </p>
        
        <Link href="/">
            <button className="flex items-center gap-4 border border-[#d34b35] text-[#d34b35] px-8 py-3 text-sm font-bold tracking-widest hover:bg-[#d34b35] hover:text-white transition-all group mx-auto">
              GO BACK HOME
              <ArrowRight size={16} />
            </button>
        </Link>
      </div>
    </section>
  );
}