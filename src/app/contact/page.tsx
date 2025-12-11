"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone, MapPin, Clock } from "lucide-react";
import { User, Mail, ChevronDown, ArrowRight } from 'lucide-react';


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
        Contact us
      </h1>

      <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
        <span className="hover:text-[#cf432d] cursor-pointer transition-colors">
          Home
        </span>
        <span className="mx-2">/</span>
        <span>Contact Us</span>
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
        get in touch
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
//   OFFICE INFORMATION
// ==========================
const OfficeInfoSection = () => {
  return (
    <section className="bg-[#e5e5e5] py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="bg-white p-10 md:p-12 max-w-md shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-wide mb-4 text-[#111]">
            Office Information
          </h3>

          <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light">
            Completely recapitalize 24/7 communities via standards compliant metrics whereas.
          </p>

          <div className="space-y-8">

            {/* Phone + Email */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-100 text-[#cf432d] mt-1 hover:bg-[#cf432d] hover:text-white transition-colors duration-300">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#111] mb-1.5">Phone Number & Email</h4>
                <p className="text-xs text-gray-500 mb-1">+(310) 2591 21563</p>
                <p className="text-xs text-gray-500">help-delish@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-100 text-[#cf432d] mt-1 hover:bg-[#cf432d] hover:text-white transition-colors duration-300">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#111] mb-1.5">Our Office Address</h4>
                <p className="text-xs text-gray-500 mb-1">258 Dancing Street, Miland Line,</p>
                <p className="text-xs text-gray-500">HUYI 21563, NewYork</p>
              </div>
            </div>

            {/* Work Time */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-100 text-[#cf432d] mt-1 hover:bg-[#cf432d] hover:text-white transition-colors duration-300">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#111] mb-1.5">Official Work Time</h4>
                <p className="text-xs text-gray-500 mb-1">7:00am - 6:00pm ( Mon - Fri )</p>
                <p className="text-xs text-gray-500">
                  Sat, Sun & <span className="text-[#cf432d]">Holiday Closed</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};



// ==========================
//   CONTACT FORM   
// ==========================
const ContactFormSection = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Support" },
    { value: "feedback", label: "Feedback" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">LEAVE A MESSAGE</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, elit curae quis libero erat, justo in habitasse aliquet mi.
            Condimentum inceptos euismod eu nunc ad nisl fermentum erat gravida.
          </p>
        </div>

        <form className="space-y-6 bg-gray-100 p-18 shadow-sm rounded-lg">

          {/* ---------- Name & Email Row ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-4 pr-10 py-3 border text-black border-gray-200 
                           focus:outline-none focus:border-[#cf432d] bg-white"
              />
              <User className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-4 pr-10 py-3 border text-black border-gray-200 
                           focus:outline-none focus:border-[#cf432d] bg-white"
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* ---------- Custom Dropdown (Upgraded + Hover Enabled) ---------- */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="w-full pl-4 pr-10 py-3 border border-gray-200 text-gray-500 bg-white 
                         focus:outline-none focus:border-[#cf432d] text-left rounded"
            >
              {selected || "Select Subject"}
            </button>

            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />

            {open && (
              <ul className="absolute w-full mt-1 bg-white border text-gray-500 border-gray-200 rounded shadow z-20 overflow-hidden">
                {options.map((item) => (
                  <li
                    key={item.value}
                    onClick={() => { setSelected(item.label); setOpen(false); }}
                    className="px-4 py-2 cursor-pointer hover:bg-[#cf432d] hover:text-white transition"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ---------- Message Box ---------- */}
          <div>
            <textarea
              rows={5}
              placeholder="Type Your Message"
              className="w-full pl-4 pr-4 py-3 border border-gray-200 text-black 
                         focus:outline-none focus:border-[#cf432d] bg-white resize-none"
            ></textarea>
          </div>

          {/* ---------- Submit Button ---------- */}
          <button
            type="submit"
            className="w-full bg-[#cf432d] text-white font-bold py-4 px-6 hover:bg-[#cf4f3b] 
                       transition-colors duration-300 flex items-center justify-center cursor-pointer"
          >
            SUBMIT MESSAGE
            <ArrowRight className="ml-2" size={20} />
          </button>

        </form>
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
      <OfficeInfoSection />
      <ContactFormSection />
      <NeedTableCta/>
    </main>
  );
}
