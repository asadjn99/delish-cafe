import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageSquare, ArrowUpRight } from 'lucide-react';

const BlogCard = ({ image, date, month, category, title, comments }) => (
  <div className="group cursor-pointer">
    {/* Image Container */}
    <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-md">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Date Badge */}
      <div className="absolute bottom-0 left-0 bg-[#cf432d] text-white px-5 py-3 flex flex-col items-center leading-none z-10">
        <span className="text-xl font-bold">{date}</span>
        <span className="text-[10px] uppercase font-medium">{month}</span>
        
        {/* Decorative triangle */}
        <div className="absolute top-0 right-[-10px] w-0 h-0 border-t-[0px] border-r-[10px] border-b-[50px] border-l-[0px] border-t-transparent border-r-transparent border-b-[#cf432d] border-l-transparent"></div>
      </div>
    </div>

    {/* Content */}
    <div className="pr-4">
      <span className="inline-block bg-[#f4f1ea] text-gray-600 text-[10px] font-bold px-3 py-1 uppercase tracking-wider mb-3">
        {category}
      </span>
      
      <h3 className="text-lg text-black font-black uppercase leading-tight mb-4 group-hover:text-[#cf432d] transition-colors">
        {title}
      </h3>
      
      <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <MessageSquare size={14} className="text-[#cf432d]" />
          <span>{comments} Comments</span>
        </div>
        
        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#cf432d] group-hover:border-[#cf432d] group-hover:text-white transition-all">
           <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-3 shadow-sm">
              Crispy, Every Bite Taste
            </span>
            <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight">
              Latest News Insights
            </h2>
          </div>

          <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest border text-black border-black px-6 py-3 hover:bg-[#111] hover:text-white hover:border-[#111] transition-all">
            View All Posts
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            image="/images/news1.jpg" 
            date="20" 
            month="Feb" 
            category="Food Menu" 
            title="How to ensure direct for the hassle-free visa process" 
            comments="02" 
          />
          <BlogCard 
            image="/images/news1.jpg" 
            date="15" 
            month="Mar" 
            category="Recipes" 
            title="Top 10 healthy breakfast ideas for busy mornings" 
            comments="05" 
          />
          <BlogCard 
            image="/images/news1.jpg" 
            date="05" 
            month="Apr" 
            category="Food Tips" 
            title="Secrets to making the perfect homemade pizza" 
            comments="03" 
          />
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
