"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

// ==========================
//      ABOUT HERO
// ==========================
const AboutHero = () => {
  const images = [
    "/images/insta1.jpeg",
    "/images/insta2.jpeg",
    "/images/insta3.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* --- Carousel Images --- */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            current === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={img} alt="About Hero" fill className="object-cover" />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* --- Content --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-3">
          About Us
        </h1>

        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <span className="hover:text-[#cf432d] cursor-pointer transition-colors">
            Home
          </span>
          <span className="mx-2">/</span>
          <span>About Us</span>
        </p>
      </div>

      {/* --- Outline Watermark --- */}
      <div
        className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none"
        style={{
          WebkitTextStroke: "2px rgba(255, 255, 255, 0.2)",
          color: "transparent",
        }}
      >
        <span className="text-6xl md:text-[90px] lg:text-[120px] font-black uppercase whitespace-nowrap">
          About Us
        </span>
      </div>

      {/* --- Left/Right Buttons --- */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md text-white z-20"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md text-white z-20"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
};




// ==========================
//      FOOD GALLERY POSTS
// ==========================

const FoodGalleryPosts = () => {
  // Use your actual image paths here
  const galleryImages = [
    "/images/insta6.jpeg",
    "/images/restaurant.jpg",
    "/images/waiter3.jpg",
    "/images/welcome-img.jpg",
    "/images/insta5.JPEG",
    "/images/fries.webp",
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden ">
      
      {/* --- Background Doodles (Decorative) --- */}
      {/* Pizza/Pie - Top Left */}
      <div className="absolute top-12 left-12  opacity-10 pointer-events-none hidden lg:block">
         <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500">
             <circle cx="12" cy="12" r="10" />
             <path d="M12 2 L12 22" />
             <path d="M2 12 L22 12" />
             <circle cx="12" cy="12" r="6" />
         </svg>
      </div>

      {/* Soda - Top Right */}
      <div className="absolute top-24 right-12 opacity-10 pointer-events-none hidden lg:block rotate-12">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500">
            <path d="M7 22h10l1-14H6z" />
            <path d="M5 8h14" />
            <path d="M10 2L12 8" />
        </svg>
      </div>

      {/* Cheese - Bottom Left */}
      <div className="absolute bottom-12 left-8 opacity-10 pointer-events-none hidden lg:block -rotate-12">
        <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500">
            <path d="M3 12 L21 4 L21 20 L3 20 Z" />
            <circle cx="10" cy="14" r="1.5" />
            <circle cx="16" cy="10" r="1.5" />
            <circle cx="14" cy="16" r="1.5" />
        </svg>
      </div>


      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-5 py-2 uppercase tracking-widest mb-4 rounded-sm">
            Food Gallery
          </span>
          <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight mb-4">
            Food Gallery Posts
          </h2>
          {/* Dot Divider */}
          <div className="flex justify-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-[#cf432d]"></span>
             <span className="w-1.5 h-1.5 rounded-full bg-[#cf432d]"></span>
             <span className="w-1.5 h-1.5 rounded-full bg-[#cf432d]"></span>
             <span className="w-1.5 h-1.5 rounded-full bg-[#cf432d]"></span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden cursor-pointer">
              
              {/* Image */}
              <Image 
                src={img} 
                alt={`Gallery Image ${i+1}`} 
                fill 
                className="object-cover p-6 bg-gray-200 transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#cf432d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* White Box for Icon */}
                <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center text-[#cf432d] shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                  <Eye size={20} />
                </div>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




// ==========================
//      BOTTOM CTA STRIP
// ==========================
const NeedTableCta = () => {
  return (
    <section className="bg-[#dcdcdc] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 block">
            Book A Table For Your And Family Members
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Need A Table On Coffee House
          </h2>
        </div>
        <button className="bg-transparent border-2 border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all">
          Book A Table
        </button>
      </div>
    </section>
  );
};

// ==========================
//      MAIN PAGE
// ==========================
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      {/* <DeliciousFoodSection /> */}
      <FoodGalleryPosts />
      {/* <DiscoverCategory /> */}
      <NeedTableCta />
    </main>
  );
}
