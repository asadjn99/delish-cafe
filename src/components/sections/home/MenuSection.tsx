"use client"; // Required for state (tabs)
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Image from "next/image";


const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('ALL FOOD');
  const categories = ['ALL FOOD', 'BREAKFAST', 'LUNCH', 'DINNER'];

  // Left column list data
  const listItems = [
    { name: "Braised Short Ribs", desc: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Roasted Vegetable Platter", desc: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Classic Caesar Salad", desc: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Szechuan Beef Stir-Fry", desc: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Vegan Buddha Bowl", desc: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Vegan Buddha Bowl", desc: "Non nisi est sit amet facilisis magna", price: "$15.00" },
  ];

  // Right column grid data
  const gridItems = [
  { name: "Classic Caesar Salad", price: "$15.00", stars: 5, image: "/menu/salad.jpg" },
  { name: "Braised Short Ribs", price: "$15.00", stars: 5, image: "/menu/ribs.jpg" },
  { name: "Chicken Masala", price: "$15.00", stars: 5, image: "/menu/chicken.jpg" },
  { name: "Chicken Alfredo Pasta", price: "$15.00", stars: 5, image: "/menu/alfredo.jpg" },
  { name: "Vegan Buddha Bowl", price: "$15.00", stars: 5, image: "/menu/bowl.jpg" },
  { name: "Chocolate Lava Cake", price: "$15.00", stars: 5, image: "/menu/cake.webp" },
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* --- Header & Tabs --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
             <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-3">
              Food Menu
            </span>
            <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight">
              Our Delicious Foods
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cats => (
              <button 
                key={cats}
                onClick={() => setActiveTab(cats)}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-all duration-300
                  ${activeTab === cats 
                    ? 'border-[#cf432d] text-[#cf432d]' 
                    : 'border-gray-200 text-gray-500 hover:border-gray-400'
                  }`}
              >
                {cats}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* --- Left Column (Featured + List) --- */}
           <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Featured Image Placeholder */}
             <div className="w-full aspect-square relative overflow-hidden">
                        <Image 
                            src="/menu/feature.jpg"
                            alt="Featured Dish"
                            fill
                            className="object-cover"
                        />
                        </div>

              
              {/* List Items */}
              <div className="space-y-6">
                 {listItems.map((item, i) => (
                    <div key={i} className="flex justify-between items-start group cursor-pointer border-b border-gray-100 pb-4 last:border-0 hover:pl-2 transition-all">
                       <div>
                          <h4 className="font-bold text-[#111] group-hover:text-[#cf432d] transition-colors">{item.name}</h4>
                          <p className="text-xs text-gray-400 mt-1 italic">{item.desc}</p>
                       </div>
                       <span className="text-[#cf432d] font-bold text-sm shrink-0 ml-4">{item.price}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* --- Right Column (Grid Cards) --- */}
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridItems.map((item, i) => (
                 <div key={i} className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-full aspect-square relative mb-5 overflow-hidden">
                        <Image 
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                        </div>

                    <div className="flex gap-1 mb-3 text-[#cf432d]">
                       {[...Array(item.stars)].map((_, s) => <Star key={s} size={12} fill="currentColor" />)}
                    </div>
                    <h4 className="font-bold text-[#111] mb-2 text-lg group-hover:text-[#cf432d] transition-colors">{item.name}</h4>
                    <span className="text-[#cf432d] font-bold text-sm">{item.price}</span>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}

export default MenuSection;