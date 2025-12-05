"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ArrowRight, UtensilsCrossed, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const pathname = usePathname(); // 🌟 Detect active page

  const navLinks = [
    { href: "/", label: "HOME", dropdown: true },
    { href: "/pages", label: "PAGES", dropdown: true },
    { href: "/menu", label: "MENU", dropdown: true },
    { href: "/shop", label: "SHOP", dropdown: true },
    { href: "/team", label: "TEAM", dropdown: false },
    { href: "/about", label: "ABOUT", dropdown: false },
    { href: "/gallery", label: "GALLERY", dropdown: false },
    { href: "/contact", label: "CONTACT", dropdown: false },
  ];

  return (
    <nav className="bg-[#111] text-white py-6 px-6 lg:px-12 relative z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between relative h-12">

        {/* Logo */}
        <div className="flex items-center gap-4 z-50 relative">
          <div className="relative w-10 h-10 md:w-12 md:h-12 border border-[#d34b35] flex items-center justify-center rotate-45">
            <div className="w-8 h-8 md:w-10 md:h-10 border border-[#d34b35] absolute flex items-center justify-center">
              <UtensilsCrossed className="text-[#d34b35] -rotate-45 w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          <span className="text-1xl md:text-2xl font-bold tracking-widest text-white">
            DELISH
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-xs tracking-wider absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`flex items-center gap-1 transition-colors ${
                pathname === link.href
                  ? "text-[#d34b35] border-b-2 border-[#d34b35] pb-1"
                  : "hover:text-[#d34b35]"
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={14} />}
            </Link>
          ))}
        </div>

                {/* ... inside your Navbar component ... */}

          {/* Desktop CTA */}
          <div className="hidden lg:block z-20">
            {/* WRAP THE BUTTON IN THIS LINK */}
            <Link href="/book-a-table">
              <button className="flex items-center gap-4 border border-[#d34b35] text-white px-6 xl:px-8 py-3 text-xs xl:text-xs font-bold tracking-widest hover:bg-[#d34b35] transition-all group">
                BOOK A TABLE
                <span className="flex items-center text-[#d34b35] group-hover:text-white transition-colors">
                  <span className="w-6 xl:w-8 h-1px bg-current mr-2"></span>
                  <ArrowRight size={16} />
                </span>
              </button>
            </Link>
          </div>








        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#111] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-lg font-bold tracking-widest">

          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={toggleMenu}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-[#d34b35] border-b-2 border-[#d34b35] pb-1"
                  : "hover:text-[#d34b35]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ... and for the Mobile CTA ... */}

          {/* Mobile CTA */}
          <Link href="/book-a-table" className="w-full flex justify-center">
              <button className="flex items-center gap-4 border border-[#d34b35] text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-[#d34b35] transition-all group mt-4">
                BOOK A TABLE
                <span className="flex items-center text-[#d34b35] group-hover:text-white transition-colors">
                  <span className="w-8 h-1px bg-current mr-2"></span>
                  <ArrowRight size={16} />
                </span>
              </button>
          </Link>

      </div>
    </nav>
  );
};

export default Navbar;
