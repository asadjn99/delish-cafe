import React from 'react';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';

const WelcomeSection = () => (
  <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
    {/* Broccoli & Outline */}
    <div className="absolute top-96px left-40px w-[120px] h-[120px] hidden lg:block animate-bounce-slow">
      {/* Broccoli */}
      <Image
        src="/images/broccoli.png"
        alt="Broccoli"
        width={120}
        height={120}
        className="w-full h-full object-contain drop-shadow-xl"
      />
    </div>

    <div className="absolute top-40px right-0 pointer-events-none hidden lg:block">
      {/* Burger */}
      <Image
        src="/images/pizza.png"
        alt="Pizza"
        width={128}
        height={128}
        className="w-32 h-32"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-16 gap-16">
        
        {/* Left Image Placeholder */}
        <div className="relative">
          <div className="w-full max-w-[570px] aspect-square shadow-lg mx-auto relative">
            <Image
              src="/images/restaurant.jpg"
              alt="Welcome to our luxury Rest"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full max-w-[720px] mx-auto mt-5">
          <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-6">
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
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">
                Hotline 24/7
              </p>
              <p className="text-xl font-bold text-[#111]">+256 3254-2568</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default WelcomeSection;
