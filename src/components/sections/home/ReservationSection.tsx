import React from 'react';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";
const ReservationSection = () => {
  return (
    <section className="py-24 bg-[#fbfbfb] relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-30 left-30 w-20 hidden md:block pointer-events-none">
         {/* Burger/Sandwich*/}
         <img 
            src="./icons/reservation-burger-left.png" 
            alt="Decor Left" 
            className="w-full h-full object-contain"
        />
      
      </div>
      <div className="absolute top-30 right-20 w-28 hidden md:block pointer-events-none">
         {/* Coffee Beans Sketch */}
         <img 
            src="./icons/leaves-right.png" 
            alt="Decor Right" 
            className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="bg-white p-2 shadow-sm flex flex-col md:flex-row">
          
          {/* Left Side: Form */}
          <div className="w-full md:w-1/2 bg-[#f8f8f8] p-10 lg:p-16 flex flex-col justify-center text-center">
            
            <div className="mb-10">
              <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
                Book A Table
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#111] uppercase tracking-tight mb-4">
                Make Reservation
              </h2>
              {/* Decorative Dots */}
              <div className="flex justify-center gap-1.5 text-[#cf432d] text-xl">
                 <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
              </div>
            </div>

            <form className="space-y-4 w-full max-w-sm mx-auto">
              <div className="relative">
                <select className="w-full bg-white border border-transparent px-4 py-4 text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-[#cf432d]/20 cursor-pointer">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4+ People</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>

              <div className="relative">
                 {/* Using text input for clearer preview, in real app use type="date" */}
                 <input type="text" placeholder="2024-05-16" className="w-full bg-white border border-transparent px-4 py-4 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cf432d]/20" />
                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>

              <div className="relative">
                 <select className="w-full bg-white border border-transparent px-4 py-4 text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-[#cf432d]/20 cursor-pointer">
                  <option>09:00 am</option>
                  <option>10:00 am</option>
                  <option>11:00 am</option>
                  <option>12:00 pm</option>
                  <option>07:00 pm</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>

              <button type="button" className="w-full bg-[#cf432d] text-white font-bold uppercase tracking-widest py-4 text-sm hover:bg-[#b53a26] transition-colors mt-2">
                Book Now
              </button>
            </form>

          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 relative min-h-[400px]">
             {/* Main Background Image */}
             
            <div className="relative w-full h-full aspect-square overflow-hidden rounded-md border border-gray-200">
            <img
                src="/images/reser.webp" // <-- your image in public/menu/reservation.jpg
                alt="Reservation"
                fill
                className="object-cover"
            />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReservationSection;