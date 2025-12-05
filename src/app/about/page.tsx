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
//      DELICIOUS FOOD SECTION
// ==========================
const DeliciousFoodSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest mb-4 shadow-sm">
            Crispy, Every Bite Taste
          </span>
          <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight mb-10 leading-none">
            Delicious Food For <br /> Healthy Life
          </h2>

          <div className="space-y-8 mb-10">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full shrink-0 text-[#cf432d]">
                <Image src="/icons/quality-food.png" alt="Quality-food-icon" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-bold text-lg uppercase mb-2 text-[#111]">Quality Food</h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                  The wise man therefore always holds Indies matters this principle information
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full shrink-0 text-[#cf432d]">
                <Image src="/icons/supply-chain.png" alt="Supply Chain Icon" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-bold text-lg uppercase mb-2 text-[#111]">Supply Chain Maintain</h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                  The wise man therefore always holds Indies matters this principle information
                </p>
              </div>
            </div>
          </div>

          <button className="text-xs font-bold uppercase tracking-widest border border-gray-800 text-[#111] px-8 py-4 hover:bg-[#cf432d] hover:text-white hover:border-[#cf432d] transition-all">
            Book A Table
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#e5e5e5] w-full aspect-4/3 relative flex items-center justify-center border-8 border-white shadow-xl">
            <Image src="/images/restaurant.jpg" alt="Restaurant" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================
//      FOOD GALLERY POSTS
// ==========================
const FoodGalleryPosts = () => {
  const galleryImages = [
    "/images/insta6.jpeg",
    "/images/restaurant.jpg",
    "/images/waiter3.jpg",
    "/images/welcome-img.jpg",
    "/images/insta5.JPEG",
    "/images/fries.webp",
  ];

  return (
    <section className="py-24 bg-[#f9f9f9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
            Food Gallery
          </span>
          <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight mb-4">
            Food Gallery Posts
          </h2>
          <div className="flex justify-center gap-1.5 text-[#cf432d] text-xl">
            <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden">
              <Image 
                src={img} 
                alt={`Gallery Image ${i+1}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#cf432d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center text-[#cf432d]">
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
//      DISCOVER CATEGORY
// ==========================
const DiscoverCategory = () => {
  const categories = [
    { title: "Quality Cheese", desc: "Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus", image: "/images/cheese.webp" },
    { title: "Crunchy French Fry", desc: "Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus", image: "/images/fries.webp" },
    { title: "100% Halal Meat", desc: "Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus", image: "/images/meat.jpg" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
            Make Reservation
          </span>
          <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight mb-4">
            Discover Our Category
          </h2>
          <div className="flex justify-center gap-1.5 text-[#cf432d] text-xl">
            <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="text-center group">
              <div className="bg-[#e0e0e0] w-full aspect-4/3 mb-8 relative overflow-hidden">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 text-[#111] group-hover:text-[#cf432d] transition-colors">{cat.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed px-4">{cat.desc}</p>
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
      <DeliciousFoodSection />
      <FoodGalleryPosts />
      <DiscoverCategory />
      <NeedTableCta />
    </main>
  );
}
