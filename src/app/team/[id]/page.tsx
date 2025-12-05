"use client";
import React, { useState, useEffect, use } from "react"; // Added 'use' here
import { User, Mail, Phone, Printer } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { teamMembers } from '../../data/team-data'; 

// ==========================
//      ABOUT HERO ( reused )
// ==========================
const AboutHero = () => {
  const images = [
    "/images/insta1.jpeg",
    "/images/insta2.jpeg",
    "/images/insta3.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Images */}
      {images.map((img, i) => (
        <div key={i} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${current === i ? "opacity-100" : "opacity-0"}`}>
            <Image src={img} alt="Hero" className="w-full h-full object-cover" /> 
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-3">
          Member Details
        </h1>
        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <Link href="/" className="hover:text-[#cf432d] cursor-pointer transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/team" className="hover:text-[#cf432d] cursor-pointer transition-colors">Team</Link>
          <span className="mx-2">/</span>
          <span>Details</span>
        </p>
      </div>
    </section>
  );
};

// ==========================
//    MEMBER DETAILS SECTION
// ==========================
const MemberDetails = ({ id }: { id: string }) => {
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Member not found</h2>
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-20 lg:py-32 flex justify-center">
      <div className="w-full max-w-[1300px] px-4 md:px-8 lg:px-12 mx-auto">
        
        <div className="bg-white shadow-sm border border-gray-100 p-6 md:p-12 flex flex-col-reverse lg:flex-row gap-10 items-start">
          
          {/* --- LEFT SIDE: TEXT INFO --- */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-black text-gray-900">
                {member.name}
              </h1>
              <p className="text-sm md:text-base text-[#cf432d] font-medium tracking-wide uppercase">
                {member.role}
              </p>
            </div>

            <p className="text-gray-500 leading-relaxed text-sm md:text-base text-center lg:text-left">
              {member.bio}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 py-8 my-2">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-[#cf432d] rounded-md shrink-0">
                  <User size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium uppercase">Experience</span>
                  <span className="text-sm font-bold text-black">{member.experience}</span>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-[#cf432d] rounded-md shrink-0">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium uppercase">Email</span>
                  <span className="text-sm font-bold text-black">{member.email}</span>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-[#cf432d] rounded-md shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium uppercase">Phone</span>
                  <span className="text-sm font-bold text-black">{member.phone}</span>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center justify-center w-12 h-12  text-[#cf432d] rounded-md shrink-0">
                  <Printer size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium uppercase">Fax</span>
                  <span className="text-sm font-bold text-black">{member.fax}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#cf432d] hover:bg-[#cd6150] text-white font-bold py-3 px-8 text-sm uppercase tracking-wider transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <div className="w-full lg:w-5/12">
            <div className="relative w-full aspect-4/5 bg-gray-200 overflow-hidden">
               <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
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
//        MAIN PAGE
// ==========================

// 1. Define Props Type as a Promise
export default function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. Unwrap the params using React.use()
  const { id } = use(params);

  return (
    <main>
      <AboutHero />
      <MemberDetails id={id} />
      <NeedTableCta/>
    </main>
  );
}