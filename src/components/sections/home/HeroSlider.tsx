"use client";
import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/welcome-img.jpg', 
    '/images/restaurant.jpg', 
    '/images/welcome-img.jpg'
  ];

  // Auto-slide logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[85vh] bg-[#4a4949] flex items-center justify-center overflow-hidden">
      
      {/* --- Background Slider with Low Opacity --- */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          {/* Dark Overlay for "down opacity" effect */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Decorative Border Box */}
      <div className="absolute inset-8 lg:inset-16 border border-white/10 pointer-events-none z-10"></div>

      {/* Vertical Side Text (Now visible on ALL screens) */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-[75%] -translate-y-1/2 -rotate-90 origin-left text-white/80 text-[10px] md:text-xs tracking-[0.2em] z-10">
        OPENING HOURS: 18:00 - 02:00
      </div>
      <div className="absolute right-6 md:right-12 lg:right-24 top-[75%] -translate-y-1/2 rotate-90 origin-right text-white/80 text-[10px] md:text-xs tracking-[0.2em] z-10">
        OPENING HOURS: 18:00 - 02:00
      </div>

      {/* Main Content - Centered Box */}
      <div className="relative z-10 text-center text-white flex flex-col items-center w-[90%] md:w-[680px] h-[245px] justify-center">
        <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] mb-2 uppercase">
          The Great
        </h3>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-3 uppercase tracking-tight leading-none">
          Flavored Food
        </h1>

        <div className="flex items-center gap-4 md:gap-6 w-full justify-center mb-5">
          <div className="h-[1px] w-8 md:w-24 bg-white/40"></div>
          <h2 className="text-sm md:text-2xl font-bold tracking-widest uppercase">
            Part of Us
          </h2>
          <div className="h-[1px] w-8 md:w-24 bg-white/40"></div>
        </div>

        <div className="flex gap-6 md:gap-12 mt-2">
          <button className="text-xs md:text-sm font-bold tracking-widest border-b-2 border-white pb-1 hover:text-[#d34b35] hover:border-[#d34b35] transition-colors">
            BOOK A TABLE
          </button>
          <button className="text-xs md:text-sm font-bold tracking-widest border-b-2 border-transparent pb-1 hover:border-white transition-colors text-white/80 hover:text-white">
            VIEW MENU
          </button>
        </div>
      </div>

      {/* Pagination Dots (Centered on bottom line) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <div 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-6 md:h-6 rounded-full cursor-pointer transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;