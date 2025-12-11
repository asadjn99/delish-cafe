"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight,ArrowRight,  ChevronDown,MessageCircle, User  } from 'lucide-react';

// ==========================
//      MENU HERO (Reused)
// ==========================
const MenuHero = () => {
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
          <Image src={img} alt="Menu Hero" fill className="object-cover" />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* --- Content --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-3">
          Our Menu
        </h1>

        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <Link href="/" className="hover:text-[#d34b35] cursor-pointer transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Menu</span>
        </p>
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
//      MENU GRID SECTION
// ==========================
const MenuGrid = () => {
    const menuItems = [
        {
            name: "Wild Mushroom Arancini",
            desc: "Ricotta, goat cheese, beetroot and datterino.",
            price: "15.00",
            image: "/images/food-1.jpg" // Ensure you have these images or placeholders
        },
        {
            name: "Honey Glazed Salmon",
            desc: "Ricotta, goat cheese, beetroot and datterino.",
            price: "15.00",
            image: "/images/food-2.jpg"
        },
        {
            name: "Truffle Mushroom Risotto",
            desc: "Ricotta, goat cheese, beetroot and datterino.",
            price: "15.00",
            image: "/images/food-3.jpg"
        },
        {
            name: "Mediterranean Quinoa Salad",
            desc: "Ricotta, goat cheese, beetroot and datterino.",
            price: "15.00",
            image: "/images/food-4.jpg"
        },
        {
            name: "Braised Short Ribs",
            desc: "Ricotta, goat cheese, beetroot and datterino.",
            price: "15.00",
            image: "/images/food-5.jpg"
        },
        {
            name: "Roasted Vegetable Platter",
            desc: "Ricotta, goat cheese, beetroot and datterino.",
            price: "15.00",
            image: "/images/food-6.jpg"
        },
        {
            name: "Braised Short Ribs",
            desc: "Ricotta, goat cheese, beetroot and datterino.",
            price: "15.00",
            image: "/images/food-5.jpg"
        },
        {
            name: "Roasted Vegetable Platter",
            desc: "Ricotta, goat cheese, beetroot and datterino.",
            price: "15.00",
            image: "/images/food-6.jpg"
        }
    ];

    return (
        <section className="bg-white py-20 lg:py-32 text-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                             {/* Image */}
                             <div className="w-16 h-16 relative rounded-full overflow-hidden shrink-0 bg-gray-200">
                                 <Image src={item.image} alt={item.name} fill className="object-cover" />
                             </div>
                             
                             {/* Content */}
                             <div className="flex-1">
                                 <div className="flex justify-between items-baseline mb-1 border-b border-dashed border-gray-300 pb-1">
                                     <h3 className="text-lg font-bold text-[#333] group-hover:text-[#d34b35] transition-colors">
                                         {item.name}
                                     </h3>
                                     <span className="text-lg font-bold text-[#d34b35]">
                                         ${item.price}
                                     </span>
                                 </div>
                                 <p className="text-sm text-gray-500 font-light">
                                     {item.desc}
                                 </p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ==========================
//    DARK BOOKING STRIP
// ==========================
const BookingStrip = () => {
  const [personOpen, setPersonOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);

  const [selectedPerson, setSelectedPerson] = useState("1 Person");
  const [selectedTime, setSelectedTime] = useState("11:00 AM");

  const personOptions = ["1 Person", "2 Person", "3 Person", "4+ Person"];
  const timeOptions = ["11:00 AM", "12:00 PM", "01:00 PM", "06:00 PM"];

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Text */}
        <div className="text-center lg:text-left">
          <h3 className="text-white text-2xl font-bold uppercase tracking-wide">Book A Table</h3>
          <p className="text-white/70 text-xs mt-1">Book A Open Table For Your Happy Time Spent</p>
        </div>

        {/* Form */}
        <form className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          
          {/* Person Dropdown */}
          <div className="relative w-full md:w-40">
            <button
              type="button"
              onClick={() => setPersonOpen(!personOpen)}
              className="w-full bg-transparent border border-gray-700 text-white text-xs p-3 rounded-sm focus:outline-none text-left uppercase flex justify-between items-center"
            >
              {selectedPerson}
              <ChevronDown className="text-gray-400 ml-2" size={14} />
            </button>
            {personOpen && (
              <ul className="absolute w-full mt-1 bg-white border text-gray-600 border-gray-800 rounded shadow z-20 overflow-hidden">
                {personOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => { setSelectedPerson(option); setPersonOpen(false); }}
                    className="px-4 py-2 cursor-pointer hover:bg-[#d34b35] hover:text-white transition"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Date Input */}
          <div className="w-full md:w-40">
            <input 
              type="text" 
              placeholder="05.18.2024"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              className="w-full bg-transparent border border-gray-700 text-white text-xs p-3 rounded-sm focus:outline-none focus:border-[#d34b35] uppercase"
            />
          </div>

          {/* Time Dropdown */}
          <div className="relative w-full md:w-40">
            <button
              type="button"
              onClick={() => setTimeOpen(!timeOpen)}
              className="w-full bg-transparent border border-gray-700 text-white text-xs p-3 rounded-sm focus:outline-none text-left uppercase flex justify-between items-center"
            >
              {selectedTime}
              <ChevronDown className="text-black ml-2" size={14} />
            </button>
            {timeOpen && (
              <ul className="absolute w-full mt-1 bg-white text-gray-600 border border-gray-800 rounded shadow z-20 overflow-hidden">
                {timeOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => { setSelectedTime(option); setTimeOpen(false); }}
                    className="px-4 py-2 cursor-pointer hover:bg-[#d34b35] hover:text-white transition text-gray-600"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <button className="bg-[#d34b35] text-white text-xs font-bold uppercase px-8 py-3 rounded-sm hover:bg-[#b5402b] transition-colors w-full md:w-auto cursor-pointer">
            Submit
          </button>

        </form>
      </div>
    </section>
  );
};






// ==========================
//    SPECIAL OFFERS SECTION
// ==========================
const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Margherita Pizza",
      desc: "Classic pizza with tomato sauce, mozzarella, and basil.",
      newPrice: "12.99",
      oldPrice: "15.99",
      image: "/images/food-1.jpg"
    },
    {
      id: 2,
      title: "Cheeseburger",
      desc: "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
      newPrice: "10.99",
      oldPrice: "13.99",
      image: "/images/food-2.jpg"
    },
    {
      id: 3,
      title: "Pasta Carbonara",
      desc: "Creamy pasta with pancetta, egg, and parmesan cheese.",
      newPrice: "14.99",
      oldPrice: "17.99",
      image: "/images/food-3.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Special Offers</h2>
        <p className="text-gray-500 mb-16 text-lg">Don t Miss Our Latest Offers</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 text-left flex flex-col h-full">
              <div className="relative h-64 w-full">
                <Image src={offer.image} alt={offer.title} fill className="object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-6 flex-1 line-clamp-3">{offer.desc}</p>
                
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl font-bold text-[#d34b35]">${offer.newPrice}</span>
                  <span className="text-lg text-gray-400 line-through">${offer.oldPrice}</span>
                </div>
                
                <button className="w-full bg-[#d34b35] text-white font-bold py-3.5 rounded-md hover:bg-[#b5402b] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide cursor-pointer">
                  Order Now
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



// ==========================
//    PARTNERS & CLIENTS
// ==========================



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

// export default PopularChefsSection;







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
//        MAIN PAGE
// ==========================
export default function MenuPage() {
  return (
    <main>
      <MenuHero />
      <MenuGrid />
      <BookingStrip />
      <SpecialOffers />
      <PopularChefsSection />
      <NeedTableCta/>
    </main>
  );
}