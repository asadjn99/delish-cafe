"use client";
import React, { useState } from 'react';
import { ChevronDown, ArrowRight, UtensilsCrossed, Menu, X } from 'lucide-react';
// import Link from 'next/link'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-[#111] text-white py-6 px-6 lg:px-12 relative z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative h-12">
        
        {/* --- Logo (Left) --- */}
        <div className="flex items-center gap-4 z-50 relative">
          <div className="relative w-10 h-10 md:w-12 md:h-12 border border-[#d34b35] flex items-center justify-center rotate-45">
            <div className="w-8 h-8 md:w-10 md:h-10 border border-[#d34b35] absolute flex items-center justify-center">
              <UtensilsCrossed className="text-[#d34b35] -rotate-45 w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          <span className="text-2xl md:text-3xl font-bold tracking-widest text-white">DELISH</span>
        </div>

        {/* --- Desktop Navigation (Absolute Center) --- */}
        {/* Hidden on mobile/tablet, Visible on LG screens and up */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-sm tracking-wider absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          <a href="/" className="flex items-center gap-1 hover:text-[#d34b35] transition-colors">HOME <ChevronDown size={14} /></a>
          <a href="/pages" className="flex items-center gap-1 hover:text-[#d34b35] transition-colors">PAGES <ChevronDown size={14} /></a>
          <a href="/menu" className="flex items-center gap-1 hover:text-[#d34b35] transition-colors">MENU <ChevronDown size={14} /></a>
          <a href="/shop" className="flex items-center gap-1 hover:text-[#d34b35] transition-colors">SHOP <ChevronDown size={14} /></a>
          <a href="/blog" className="flex items-center gap-1 hover:text-[#d34b35] transition-colors">BLOG <ChevronDown size={14} /></a>
          <a href="/contact" className="hover:text-[#d34b35] transition-colors">CONTACT</a>
        </div>

        {/* --- Desktop CTA (Right) --- */}
        {/* Hidden on mobile/tablet, Visible on LG screens and up */}
        <div className="hidden lg:block z-20">
            <button className="flex items-center gap-4 border border-[#d34b35] text-white px-6 xl:px-8 py-3 text-xs xl:text-sm font-bold tracking-widest hover:bg-[#d34b35] transition-all group">
            BOOK A TABLE
            <span className="flex items-center text-[#d34b35] group-hover:text-white transition-colors">
                <span className="w-6 xl:w-8 h-[1px] bg-current mr-2"></span>
                <ArrowRight size={16} />
            </span>
            </button>
        </div>

        {/* --- Mobile Menu Toggle (Right) --- */}
        {/* Visible on mobile/tablet, Hidden on LG screens */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* --- Mobile Menu Overlay --- */}
      {/* This covers the screen when the hamburger is clicked */}
      <div 
        className={`fixed inset-0 bg-[#111] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-lg font-bold tracking-widest">
            <a href="/home" onClick={toggleMenu} className="hover:text-[#d34b35] transition-colors">HOME</a>
            <a href="/pages" onClick={toggleMenu} className="hover:text-[#d34b35] transition-colors">PAGES</a>
            <a href="/menu" onClick={toggleMenu} className="hover:text-[#d34b35] transition-colors">MENU</a>
            <a href="/shop" onClick={toggleMenu} className="hover:text-[#d34b35] transition-colors">SHOP</a>
            <a href="/blog" onClick={toggleMenu} className="hover:text-[#d34b35] transition-colors">BLOG</a>
            <a href="/contact" onClick={toggleMenu} className="hover:text-[#d34b35] transition-colors">CONTACT</a>
        </div>

        <button className="flex items-center gap-4 border border-[#d34b35] text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-[#d34b35] transition-all group mt-4">
            BOOK A TABLE
            <span className="flex items-center text-[#d34b35] group-hover:text-white transition-colors">
                <span className="w-8 h-[1px] bg-current mr-2"></span>
                <ArrowRight size={16} />
            </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;