"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'; 

// ==========================
//      MOCK DATA (For Grid)
// ==========================
const menuItems = [
  { id: 1, name: "Beef Bourguignon", price: "16.00" },
  { id: 2, name: "Spicy Tuna Tartare", price: "18.00" },
  { id: 3, name: "Margherita Pizza", price: "15.00" },
  { id: 4, name: "Braised Short Ribs", price: "16.00" },
  { id: 5, name: "Vegan Buddha Bowl", price: "12.00" },
  { id: 6, name: "Chicken Alfredo Pasta", price: "18.00" },
  { id: 7, name: "Classic Caesar Salad", price: "10.00" },
  { id: 8, name: "Roasted Vegetable Platter", price: "15.00" },
  { id: 9, name: "Pulled Pork Sandwich", price: "14.00" },
  { id: 10, name: "Ahi Poke Bowl", price: "16.00" },
  { id: 11, name: "Chocolate Lava Cake", price: "12.00" },
  { id: 12, name: "Lobster Bisque", price: "14.00" },
];

// ==========================
//      SHOP HERO
// ==========================
const ShopHero = () => {
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
          SHOp
        </h1>

        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <span className="hover:text-[#cf432d] cursor-pointer transition-colors">
            shop
          </span>
          <span className="mx-2">/</span>
          <span>shop</span>
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
          shop now
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
//      MENU GRID (New)
// ==========================
// ==========================
//      MENU GRID (Updated with Links)
// ==========================
const MenuGrid = () => {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
          
          {menuItems.map((item) => (
            // CHANGE 1: We wrap the entire card in a Link component
            // This points to /shop/1, /shop/2, etc. based on the item ID
            <Link href={`/shop/${item.id}`} key={item.id}>
              
              {/* CHANGE 2: Added 'cursor-pointer' to make it look clickable */}
              <div className="group bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                
                {/* Image Area */}
                <div className="w-full h-[250px] bg-[#e0e0e0] relative">
                   {/* Placeholder for Real Images */}
                   <Image 
                     src={`/images/food-${item.id}.jpg`} 
                     alt={item.name} 
                     fill 
                     className="object-cover" 
                   />
                </div>

                {/* Content Area */}
                <div className="p-6 text-center flex flex-col items-center justify-center">
                  
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill="#d34b35" 
                        color="#d34b35" 
                        className="text-[#d34b35]" 
                      />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wide mb-2">
                    {item.name}
                  </h3>

                  {/* Price */}
                  <span className="text-[#d34b35] font-bold text-sm">
                    ${item.price}
                  </span>

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
//      BOTTOM CTA STRIP
// ==========================
const NeedTableCta = () => {
    return (
        <section className="bg-[#dcdcdc] py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
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
//        MAIN PAGE
// ==========================
export default function MenuPage() {
  return (
    <main className="bg-[#f9f9f9]">
      <ShopHero />
      
      
      <MenuGrid />

      <NeedTableCta/>
    </main>
  );
}