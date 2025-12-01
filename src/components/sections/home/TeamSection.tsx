import React from 'react';
import Image from 'next/image';

const ChefCard = ({ image, name, role }) => (
  <div className="flex flex-col group cursor-pointer">
    {/* Image */}
    <div className="w-full aspect-[4/5] relative overflow-hidden rounded-md">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    
    {/* Info Box */}
    <div className="bg-[#1f1f1f] text-white text-center py-6 transition-colors group-hover:bg-[#cf432d]">
      <h3 className="text-lg font-black uppercase tracking-wide mb-1">{name}</h3>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white/80">{role}</p>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="relative pt-24 pb-0 bg-white">
      
      {/* Background Split */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#101010] z-0">
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'radial-gradient(circle, #555 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
            Make Reservation
          </span>
          <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight mb-4">
            Meet The Expert Chef
          </h2>
          <div className="flex justify-center gap-1.5 text-[#cf432d] text-xl">
             <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
          <ChefCard image="/images/waiter1.jpg" name="Kuman Tunman" role="Head Chef" />
          <ChefCard image="/images/waiter2.webp" name="Anna Smith" role="Sous Chef" />
          <ChefCard image="/images/waiter3.jpg" name="John Doe" role="Pastry Chef" />
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
