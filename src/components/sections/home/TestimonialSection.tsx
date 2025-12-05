import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const TestimonialCard = () => (
  <div className="bg-[#f9f9f9] p-10 border border-transparent hover:border-[#cf432d] transition-all duration-300 relative group">
    {/* Quote Text */}
    <p className="text-gray-500 text-sm leading-relaxed mb-8 relative z-10">
      The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.
    </p>

    {/* Reviewer Info */}
    <div className="flex items-center gap-4 relative z-10">
      <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
        {/* Avatar Image */}
        <Image
          src="/images/amanda.jpg"
          alt="Client Image"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-bold text-[#111] text-sm">Amanda Martin</h4>
        <span className="text-xs text-gray-500 uppercase tracking-wide">Food Reviewer</span>
      </div>
    </div>

    {/* Big Quote Icon Watermark */}
    <div className="absolute bottom-6 right-8 text-[#cf432d] opacity-10 group-hover:opacity-20 transition-opacity">
      <Quote size={64} fill="currentColor" />
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Background Sketches */}
      <div className="absolute top-[120px] left-80px w-16 -rotate-12 hidden md:block pointer-events-none">
        <Image
          src="/icons/customer-left.png"
          alt="Decor Left"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-80px right-[120px] w-16 -rotate-12 hidden md:block pointer-events-none">
        <Image
          src="/icons/customer-right.png"
          alt="Decor Right"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
            Client Testimonial
          </span>
          <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight mb-4">
            Our Customer Feedbacks
          </h2>
          {/* Decorative Dots */}
          <div className="flex justify-center gap-1.5 text-[#cf432d] text-xl">
            <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
