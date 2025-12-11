"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  UtensilsCrossed,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Toggle Main Menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Close menu on route change
  // FIXED: Wrapped in setTimeout to prevent synchronous render error
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileDropdownOpen(false);
      document.body.style.overflow = "auto";
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  type NavLink =
    | { label: string; href: string; dropdown?: false }
    | {
        label: string;
        dropdown: true;
        items: { href: string; label: string }[];
      };

  const navLinks: NavLink[] = [
    { href: "/", label: "HOME" },
    // { href: "/reservation", label: "RESERVATION" },
    { href: "/food-menu", label: "FOOD MENU" },
    { href: "/shop", label: "SHOP" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    {
      label: "MORE",
      dropdown: true,
      items: [
        // { href: "/shop", label: "SHOP" },
        { href: "/gallery", label: "GALLERY" },
        { href: "/team", label: "TEAM" },
        { href: "/blog", label: "BLOG" },
      ],
    },
  ];

  return (
    <>
      <nav className="bg-[#111] text-white py-4 md:py-6 px-4 md:px-6 lg:px-20 relative z-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative h-12">
          
          {/* --- LOGO --- */}
          <div className="flex items-center gap-4 z-50 relative shrink-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12 border border-[#d34b35] flex items-center justify-center rotate-45">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-[#d34b35] absolute flex items-center justify-center">
                <UtensilsCrossed className="text-[#d34b35] -rotate-45 w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-widest text-white whitespace-nowrap">
              DELISH
            </span>
          </div>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-xs tracking-wider absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            {navLinks.map((link, i) => {
              if (!link.dropdown) {
                return (
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
                  </Link>
                );
              }
              return (
                <div key={i} className="relative group cursor-pointer pb-0">
                  <span className="flex items-center gap-1 hover:text-[#d34b35]">
                    {link.label} <ChevronDown size={14} />
                  </span>
                  <div className="absolute top-full left-0 mt-0 bg-[#111] border border-white/10 p-4 hidden group-hover:block shadow-xl rounded-sm min-w-[150px]">
                    {link.items.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.href}
                        className={`block py-2 whitespace-nowrap ${
                          pathname === sub.href
                            ? "text-[#d34b35]"
                            : "hover:text-[#d34b35]"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* --- DESKTOP CTA --- */}
          <div className="hidden lg:block z-20 shrink-0">
            <Link href="/book-a-table">
              <button className=" cursor-pointer flex items-center gap-4 border border-[#d34b35] text-white px-6 xl:px-8 py-3 text-xs xl:text-xs font-bold tracking-widest hover:bg-[#d34b35] transition-all group">
                BOOK A TABLE
                <span className="flex items-center text-[#d34b35] group-hover:text-white transition-colors">
                  <span className="w-6 xl:w-8 h-1px bg-current mr-2"></span>
                  <ArrowRight size={16} />
                </span>
              </button>
            </Link>
          </div>

          {/* --- MOBILE BUTTON --- */}
          <div className="lg:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 bg-[#111] z-60 flex flex-col transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex-none flex justify-between items-center px-4 py-4 md:px-6 md:py-6 border-b border-white/5 bg-[#111]">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 border border-[#d34b35] flex items-center justify-center rotate-45">
              <div className="w-8 h-8 border border-[#d34b35] absolute flex items-center justify-center">
                <UtensilsCrossed className="text-[#d34b35] -rotate-45 w-5 h-5" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-widest text-white whitespace-nowrap">
              DELISH
            </span>
          </div>
          <button onClick={toggleMenu} className="text-white p-2">
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links List */}
        <div className="overflow-y-auto py-8 px-4 flex flex-col items-center gap-6">
          {navLinks.map((link, i) => {
            if (!link.dropdown) {
              return (
                <Link
                  key={i}
                  href={link.href}
                  className={`text-lg font-bold tracking-widest transition-colors ${
                    pathname === link.href
                      ? "text-[#d34b35]"
                      : "text-white hover:text-[#d34b35]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            {/* Mobile Dropdown Group */}
            return (
              <div key={i} className="flex flex-col items-center w-full">
                <button 
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className={`flex items-center gap-2 text-lg font-bold tracking-widest transition-colors ${
                     isMobileDropdownOpen ? "text-[#d34b35]" : "text-white hover:text-[#d34b35]"
                  }`}
                >
                  {link.label}
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center gap-4 w-full ${
                    isMobileDropdownOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {link.items.map((sub, j) => (
                    <Link
                      key={j}
                      href={sub.href}
                      className={`text-base font-medium tracking-wide ${
                        pathname === sub.href
                          ? "text-[#d34b35]"
                          : "text-white hover:text-[#d34b35]"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Footer */}
        <div className="flex-none p-6 border-t border-white/5 bg-[#111]">
          <Link href="/book-a-table" className="block w-full">
            <button className="cursor-pointer w-full flex justify-center items-center gap-4 border border-[#d34b35] text-white px-6 py-4 text-sm font-bold tracking-widest hover:bg-[#d34b35] transition-all group">
              BOOK A TABLE
              <span className="flex items-center text-[#d34b35] group-hover:text-white transition-colors">
                <span className="w-6 h-1px bg-current mr-2"></span>
                <ArrowRight size={16} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;