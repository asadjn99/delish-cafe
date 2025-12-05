"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; {/* , Phone, MapPin, Clock*/}
import Image from "next/image";
import Link from 'next/link';
import { teamMembers } from '../data/team-data';

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

  // Auto-slide every 3 secs
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

      {/* --- Background Carousel Images --- */}
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="About Hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            current === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-3">
          Our chef
        </h1>

        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <span className="hover:text-[#cf432d] cursor-pointer transition-colors">
            Home
          </span>
          <span className="mx-2">/</span>
          <span>our chef</span>
        </p>
      </div>

      {/* Watermark */}
      <div
        className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none"
        style={{
          WebkitTextStroke: "2px rgba(255, 255, 255, 0.2)",
          color: "transparent",
        }}
      >
        <span className="text-6xl md:text-[90px] lg:text-[120px] font-black uppercase whitespace-nowrap">
          team expert
        </span>
      </div>

      {/* --- Left Button --- */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md text-white z-30"
      >
        <ChevronLeft size={22} />
      </button>

      {/* --- Right Button --- */}
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md text-white z-30"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
};


// ==========================
//      Team Section
// ==========================



const TeamSection = () => {
  return (
    <section className="w-full flex justify-center bg-white py-16">
      <div className="w-full max-w-[1300px] px-4 md:px-8 lg:px-12 mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          
          {teamMembers.slice(0, 6).map((member) => (
            <Link 
              key={member.id} 
              href={`/team/${member.id}`} // This links to the dynamic page
              className="group block"
            >
              <div className="border border-gray-100 p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer h-full">
                
                {/* Image */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-extrabold text-black uppercase tracking-wide group-hover:text-[#cf432d] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] md:text-xs font-medium text-gray-500 uppercase mt-2 tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

// export default TeamSection;






// ==========================
//       BOTTOM CTA STRIP
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
//         MAIN PAGE
// ==========================
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <TeamSection />
      <NeedTableCta/>
    </main>
  );
}
