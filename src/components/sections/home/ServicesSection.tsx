import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

// If using TypeScript
interface ServiceCardProps {
  title: string;
  description: string;
  imagePlaceholder: string;
}

const ServiceCard = ({
  title,
  description,
  imagePlaceholder
}: ServiceCardProps /* 'any' with 'ServiceCardProps'*/) => (
  <div className="bg-white p-6 md:p-8 flex flex-col items-start group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">

    {/* Service Image */}
    <div className="w-full aspect-4/3 bg-gray-200 mb-6 overflow-hidden relative">
      <Image
        src={imagePlaceholder}
        alt={title}
        fill
        className="object-cover"
      />
    </div>

    <h3 className="text-xl font-black uppercase tracking-wide mb-4 text-[#111]">
      {title}
    </h3>

    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
      {description}
    </p>

    <button className="mt-auto flex items-center gap-2 text-[11px] font-bold text-[#cf432d] tracking-widest uppercase border border-[#cf432d] px-5 py-3 hover:bg-[#cf432d] hover:text-white transition-all">
      Read More <ArrowRight size={14} />
    </button>
  </div>
);


const ServicesSection = () => {
  const services = [
    {
      title: "Wedding Service",
      description: "The chocolate fondant which did not disappoint. It was rich and indulgent, with a gooey center that was pure bliss.",
      image: "/images/wedding.webp"
    },
    {
      title: "Buffet Service",
      description: "Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks.",
      image: "/images/buffet.jpeg"
    },
    {
      title: "Party Service",
      description: "Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks.",
      image: "/images/party.webp"
    }
  ];

  return (
    <section className="relative py-24 bg-[#fbf7f2] overflow-hidden">

      {/* Left Sketch */}
      <div className="absolute top-[70%] left-[30px] -translate-y-1/2 w-32 hidden xl:block">
        <Image
          src="/icons/rest-left.png"
          alt="Decor Left"
          width={128}
          height={128}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Right Sketch */}
      <div className="absolute top-10 right-10 w-40 h-40 pointer-events-none hidden md:block">
        <Image
          src="/icons/rest-right.png"
          alt="Decor Right"
          width={160}
          height={160}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf432d] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-3xl font-black text-[#111] uppercase tracking-tight mb-4">
            Our Restaurant Service
          </h2>

          {/* Decorative Dots */}
          <div className="flex justify-center gap-1.5 text-[#cf432d] text-xl">
            <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imagePlaceholder={service.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
