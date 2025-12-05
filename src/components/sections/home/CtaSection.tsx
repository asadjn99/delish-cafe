import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-[#1f1f1f] py-28 text-center relative overflow-hidden">
      {/* Optional subtle texture or gradient overlay could go here */}
      
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center relative z-10">
        
        {/* Red Badge */}
        <span className="inline-block bg-[#cf432d] text-white text-[11px] font-bold px-5 py-2.5 uppercase tracking-widest mb-10 shadow-lg">
          Crispy, Every Bite Taste
        </span>

        {/* Headline with Decorative Curve */}
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none mb-12">
          Looking for popular <br />
          <span className="relative inline-block mt-2">
            Fast Food
            {/* Yellow Smile/Underline SVG */}
            <svg 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 md:w-32 text-[#ffb400]" 
              viewBox="0 0 100 20" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4"
              strokeLinecap="round"
            >
              <path d="M5,5 Q50,20 95,5" />
            </svg>
          </span>
        </h2>

        {/* Button */}
        <button className="group flex items-center gap-4 text-xs font-bold text-white tracking-[0.2em] border border-white/20 px-10 py-5 uppercase hover:bg-[#cf432d] hover:border-[#cf432d] transition-all duration-300">
          Read More
          <ArrowRight size={16} className="text-[#cf432d] group-hover:text-white transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default CtaSection;