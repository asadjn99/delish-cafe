import React from 'react';
import { PhoneCall } from 'lucide-react';
// import Image from 'next/image'

const WelcomeSection = () => (
  <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
    {/* Decorative Elements (Broccoli & Outline) */}
    <div className="absolute top-24 left-10 w-30 h-30 hidden lg:block animate-bounce-slow">
         {/* Placeholder for Broccoli */}
         <img 
            src="./images/broccoli.png" 
            alt="Broccoli" 
            className="w-full h-full object-contain drop-shadow-xl"
         />
    </div>
    <div className="absolute top-10 right-0 pointer-events-none hidden lg:block">
        {/* Placeholder for Burger Outline - using SVG */}
        <img className=' w-32 h-32' src="./images/pizza.png" alt="Pizza" />
        {/* <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#d34b35]">
            <path d="M10,50 Q50,10 90,50" />
            <path d="M10,60 L90,60" />
            <path d="M10,70 Q50,90 90,70" />
        </svg> */}
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image Placeholder */}
        <div className="relative">
          <div className=" w-[280px] md:w-[350px] aspect-square relative shadow-lg mx-auto">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold tracking-widest text-lg">
                <img src="./images/restaurant.jpg" alt="welcome to our luxury Rest" />
             </div>
          </div>
        </div>

        {/* Right Content */}
        <div className='max-w-[380px]'>
          <span className=" inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-6">
            Make Reservation
          </span>
          
          <h2 className="text-2xl md:text-3xl font-black text-[#111] leading-tight mb-8 uppercase">
            Welcome to our <br />
            Luxury Restaurant
          </h2>
          
          <p className="text-gray-500 leading-relaxed mb-6 font-light">
            The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables.
          </p>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#cf432d] flex items-center justify-center text-white shrink-0">
               <PhoneCall size={20} />
            </div>
            <div>
               <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">Hotline 24/7</p>
               <p className="text-xl font-bold text-[#111]">+256 3254-2568</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default WelcomeSection;