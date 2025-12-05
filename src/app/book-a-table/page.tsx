"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight,ChevronLeft, ArrowRight } from "lucide-react";
import Image from "next/image";




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
      <div
        key={i}
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          current === i ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={img}
          alt="About Hero"
          fill
          className="object-cover"
        />
      </div>
    ))}

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Text Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-3">
        Book A Table
      </h1>

      <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
        <span className="hover:text-[#cf432d] cursor-pointer transition-colors">
          Home
        </span>
        <span className="mx-2">/</span>
        <span>Book a table</span>
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
        reservation
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
//       Table Form
// ==========================

const BookATable = () => {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center py-20 px-4 relative overflow-hidden">
      
      {/* Background Geometric Pattern (Optional CSS simulation) */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         {/* Simple geometric pattern using radial gradients */}
        <div 
            style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}
            className="w-full h-full"
        ></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Book A Table</h2>
            <p className="text-gray-400 text-sm md:text-base">
                We consider all the drivers of change gives you the components <br className="hidden md:block"/> 
                you need to change to create a truly happens.
            </p>
        </div>

        {/* Form Container */}
        <form className="w-full">
            
            {/* Grid Layout: 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                
                {/* 1. Number of Guest */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-xs font-bold uppercase tracking-wider">Number of Guest *</label>
                    <div className="relative">
                        <select className="w-full bg-transparent border border-gray-700 text-gray-400 text-sm p-4 rounded-sm focus:outline-none focus:border-[#d34b35] appearance-none cursor-pointer">
                            <option>1 Person</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4+ Person</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                </div>

                {/* 2. Date */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-xs font-bold uppercase tracking-wider">Date *</label>
                    <input 
                        type="date" 
                        className="w-full bg-transparent border border-gray-700 text-gray-400 text-sm p-4 rounded-sm focus:outline-none focus:border-[#d34b35] uppercase placeholder-gray-500"
                    />
                </div>

                {/* 3. Time */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-xs font-bold uppercase tracking-wider">Time *</label>
                    <div className="relative">
                        <select className="w-full bg-transparent border border-gray-700 text-gray-400 text-sm p-4 rounded-sm focus:outline-none focus:border-[#d34b35] appearance-none cursor-pointer">
                            <option>08:00 AM</option>
                            <option>09:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                </div>

                {/* 4. Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-xs font-bold uppercase tracking-wider">Your Name *</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name"
                        className="w-full bg-transparent border border-gray-700 text-white text-sm p-4 rounded-sm focus:outline-none focus:border-[#d34b35] placeholder-gray-500"
                    />
                </div>

                {/* 5. Phone */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-xs font-bold uppercase tracking-wider">Phone Number *</label>
                    <input 
                        type="tel" 
                        placeholder="Enter phone number"
                        className="w-full bg-transparent border border-gray-700 text-white text-sm p-4 rounded-sm focus:outline-none focus:border-[#d34b35] placeholder-gray-500"
                    />
                </div>

                {/* 6. Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-xs font-bold uppercase tracking-wider">Email Address *</label>
                    <input 
                        type="email" 
                        placeholder="Enter email address"
                        className="w-full bg-transparent border border-gray-700 text-white text-sm p-4 rounded-sm focus:outline-none focus:border-[#d34b35] placeholder-gray-500"
                    />
                </div>

            </div>

            {/* Special Message Area */}
            <div className="flex flex-col gap-2 mb-8">
                <label className="text-white text-xs font-bold uppercase tracking-wider">Type Your Special Message *</label>
                <textarea 
                    rows={6}
                    placeholder="Tell us more about your special message"
                    className="w-full bg-transparent border border-gray-700 text-white text-sm p-4 rounded-sm focus:outline-none focus:border-[#d34b35] placeholder-gray-500 resize-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
                <button className="bg-[#d34b35] hover:bg-[#b53a26] text-white font-bold py-4 px-12 text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-2">
                    Book A Table  
                    <ArrowRight className="ml-2" size={20} />
                    {/* <span className="w-4 h-4 border border-white flex items-center justify-center rounded-full text-[10px]">&rarr;</span> */}
                </button>
            </div>

        </form>
      </div>
    </section>
  );
};


// ==========================
//       Table Form
// ==========================


const ContactInfoSection = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* --- LEFT SIDE: IMAGES --- */}
          {/* We use a relative container to handle the overlapping effect */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
             
             {/* Main Image (Back/Left) */}
             <div className="absolute top-0 left-0 w-[85%] h-[85%] bg-gray-200">
                {/* Replace src with your actual image path */}
                 <Image 
                    src="/images/party.webp" 
                    alt="Restaurant Ambience"
                    fill
                    className="object-cover"
                 />
             </div>

             {/* Overlapping Image (Front/Right) */}
             <div className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-gray-300 border-[10px] border-white shadow-lg">
                {/* Replace src with your actual image path */}
                 <Image 
                    src="/images/cheese.webp" 
                    alt="Food Detail"
                    fill
                    className="object-cover"
                 />
             </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8">
            
            {/* Block 1: Opening Hours */}
            <div className="bg-white p-6 max-w-[400px] border-2 border-gray-300">
                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
                    Opening Hours
                </h3>
                <div className="space-y-2 text-gray-600 font-light text-sm md:text-base">
                    <p className="flex justify-between max-w-[300px]">
                        <span>Lunch:</span>
                        <span>12pm - 3pm</span>
                    </p>
                    <p className="flex justify-between max-w-[300px]">
                        <span>Dinner:</span>
                        <span>7pm - 2am (Last Order 11:30pm)</span>
                    </p>
                </div>
            </div>

            {/* Block 2: Visit Our Restaurant */}
            <div className="bg-white p-6 max-w-[400px]  border-gray-300 border-2">
                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
                    Visit Our Restaurant
                </h3>
                <div className="space-y-2 text-gray-600 font-light text-sm md:text-base">
                    <p>Eight Avenue 487, NY</p>
                    <p className="text-gray-600  font-medium">T. +12 344 0567899</p>
                    <p>M. fidalgo@example.com</p>
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};





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
      <BookATable />
      <ContactInfoSection />
      <NeedTableCta/>
    </main>
  );
}
