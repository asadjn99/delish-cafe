"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Link as LinkIcon } from "lucide-react";

const StatItem = ({ number, label1, label2 }) => (
  <div className="text-center group cursor-default">
    <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:text-[#cf432d] transition-colors duration-300">
      {number}
    </div>
    <div className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase flex flex-col leading-tight">
      <span>{label1}</span>
      <span>{label2}</span>
    </div>
  </div>
);

const GalleryCard = ({ src, active }) => (
  <div
    className={`relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] flex-shrink-0 overflow-hidden rounded-md transition-all duration-300 
      ${active ? "scale-100 opacity-100" : "scale-90 opacity-50"}`}
  >
    {/* Background Image */}
    <img
      src={src}
      alt="Food"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Active Orange Overlay */}
    {/* If you want the overlay back, just uncomment */}
    {/* 
    {active && (
      <div className="absolute inset-0 bg-[#cf432d]/90 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#cf432d] hover:scale-110 transition-transform cursor-pointer">
          <LinkIcon size={20} />
        </div>
      </div>
    )}
    */}
  </div>
);

const StatsGallerySection = () => {
  const images = [
    "/menu/food1.jpg",
    "/menu/food2.jpeg",
    "/menu/food3.avif",
    "/menu/food4.jpg",
    "/menu/food5.webp",
  ];

  const [index, setIndex] = useState(1);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-[#101010] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #333 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">

        {/* ⭐ TOP STATS ROW (Added Back) ⭐ */}
        <div className="flex flex-wrap justify-between gap-12 border-b border-white/10 pb-20 mb-20">
          <StatItem number="15" label1="NEW" label2="COOL PROJECTS" />
          <StatItem number="15" label1="TOTAL" label2="AWARDS WIN" />
          <StatItem number="20" label1="UNIQUE" label2="FOOD SPECIALITIES" />
          <StatItem number="69" label1="HARD" label2="TEAM MEMBERS" />
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
              View Our Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Our Food Gallery
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-[#cf432d] hover:border-[#cf432d] transition-all group"
            >
              <ArrowLeft size={18} className="text-gray-400 group-hover:text-white" />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-[#cf432d] hover:border-[#cf432d] transition-all group"
            >
              <ArrowRight size={18} className="text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* CENTERED CAROUSEL */}
      <div className="flex justify-center gap-6 pb-20 transition-all">
        {images.map((src, i) => (
          <GalleryCard key={i} src={src} active={i === index} />
        ))}
      </div>
    </section>
  );
};

export default StatsGallerySection;
