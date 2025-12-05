"use client";
import React, { useState, useEffect } from 'react';

const AboutHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // You can replace these with your actual 1920px wide images
  const slides = [
    '/images/about-bg-1.jpg', 
    '/images/about-bg-2.jpg', 
    '/images/about-bg-3.jpg'
  ];

  // Auto-slide logic (2 seconds as requested)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] bg-[#333] flex items-center justify-center overflow-hidden">
      
      {/* --- Background Slider (Low Opacity) --- */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-20' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          {/* Dark Overlay to ensure text pop */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* --- Content Container --- */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-4 relative z-20">
          About Us
        </h1>
        
        {/* Breadcrumbs */}
        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest relative z-20">
          <span className="hover:text-[#cf432d] cursor-pointer transition-colors">Home</span>
          <span className="mx-2">/</span>
          <span>About Us</span>
        </p>

        {/* --- Watermark Text (Behind) --- */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-10"
          style={{ 
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)', 
            color: 'transparent',
          }}
        >
          <span className="text-6xl md:text-[120px] lg:text-[150px] font-black uppercase tracking-widest opacity-30 whitespace-nowrap">
            About Us
          </span>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;