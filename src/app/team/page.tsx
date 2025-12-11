"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight,ArrowRight, MessageCircle, User } from "lucide-react";
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
  }, );

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">

      {/* Background Images */}
      {images.map((img, i) => (
        <div key={i} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${current === i ? "opacity-100" : "opacity-0"}`}>
          <Image 
            src={img} 
            alt="About Hero"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-3">
          Our chef
        </h1>

        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <span className="hover:text-[#cf432d] cursor-pointer transition-colors">Home</span>
          <span className="mx-2">/</span>
          <span>Our Chef</span>
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
          our expert team
        </span>
      </div>


      {/* Carousel Buttons */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md text-white z-30">
        <ChevronLeft size={22} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md text-white z-30">
        <ChevronRight size={22} />
      </button>
    </section>
  );
};



// ==========================
//      TEAM SECTION
// ==========================
const TeamSection = () => {
  return (
    <section className="w-full flex justify-center bg-white py-16">
      <div className="w-full max-w-[1300px] px-4 md:px-8 lg:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {teamMembers.slice(0, 6).map((member) => (
            <Link key={member.id} href={`/team/${member.id}`} className="group block">
              <div className="border border-gray-100 p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer h-full">
                
                <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>

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



// ==========================
//       BOTTOM CTA
// ==========================
const NeedTableCta = () => (
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




// ==========================================
// DATA SOURCE
// Make sure you have these files in: public/images/
// ==========================================
const popularChefs = [
  {
    id: 1,
    day: "09",
    month: "DEC",
    title: "HOW RESTAURANTS FOSTER CONNECTIONS AND CREATE MEMORIES",
    author: "MARKUS DANIEL",
    comments: 2,
    // Path to image in public folder
    image: "/images/food-2.jpg", 
  },
  {
    id: 2,
    day: "09",
    month: "DEC",
    title: "DISCOVERING AFFORDABLE GOURMET EXPERIENCES IN YOUR CITY",
    author: "MARKUS DANIEL",
    comments: 2,
    // Path to image in public folder
    image: "/images/restaurant.jpg",
  },
];








// ==========================
//        POPULAR CHEFs
// ==========================
const PopularChefsSection = () => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <button className="bg-[#c2412e] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-sm mb-5 tracking-wider hover:bg-[#a63626] transition-colors">
            Make Reservation
          </button>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-black uppercase mb-4 tracking-tight">
            Our Popular Chefs
          </h2>
          
          {/* 4 Dots Divider */}
          <div className="flex justify-center gap-1.5">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-[#c2412e] rounded-full"></span>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-sm">
          {popularChefs.map((post, index) => {
            // Determine layout order (Checkered pattern)
            const isTextLeft = index % 2 !== 0;

            return (
              <React.Fragment key={post.id}>
                {/* Image Block */}
                <div className={`relative h-72 md:h-auto min-h-24rem w-full ${isTextLeft ? 'md:order-2' : 'md:order-1'}`}>
                  
                  {/* Date Badge */}
                  <div className="absolute top-6 left-6 z-10 bg-[#c2412e] text-white flex flex-col items-center justify-center w-14 h-14 shadow-md">
                    <span className="text-lg font-bold leading-none">{post.day}</span>
                    <span className="text-[10px] uppercase font-medium leading-none mt-0.5">{post.month}</span>
                  </div>
                  
                  {/* Next/Image — Fully Responsive & Warning-Free */}
                  <div className="relative w-full h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill               // makes it auto-fit container
                      sizes="100vw"      // tells browser how to load image responsively
                      className="object-cover"
                      priority={true}    // remove if not needed (only for above-the-fold images)
                    />
                  </div>
                </div>

                {/* Text Block */}
                <div className={`bg-[#f9f9f9] h-auto min-h-24rem flex flex-col justify-center px-8 md:px-12 py-8 w-full border-b md:border-b-0 md:border-r border-gray-100 last:border-0 ${isTextLeft ? 'md:order-1' : 'md:order-2'}`}>
                  
                  {/* Meta Data */}
                  <div className="flex items-center gap-5 text-gray-500 text-[10px] font-bold uppercase tracking-wide mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white">
                         <User size={12} fill="currentColor" />
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} className="mb-0.5 text-[#c2412e]" />
                      <span>{post.comments} Comment</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-gray-900 text-lg md:text-xl mb-8 leading-snug uppercase">
                    {post.title}
                  </h3>

                  {/* Read More Button */}
                  <div>
                    <button className="group border border-gray-300 bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:border-[#c2412e] hover:text-[#c2412e] transition-all flex items-center gap-2">
                      Read More
                      <ArrowRight size={14} className="text-[#c2412e] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <TeamSection />
      <NeedTableCta/>
      <PopularChefsSection/>
    </main>
  );
}
