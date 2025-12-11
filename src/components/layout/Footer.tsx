import React from 'react';
import Image from 'next/image';
import { Phone, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Rss, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white ">
      {/* --- Top CTA Section (Grid Pattern Background) --- */}
      <div className="relative bg-[#1a1a1a] border-b border-white/5 overflow-hidden">
        {/* Simple CSS Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
        }}></div>

        <div className="max-w-6xl mx-auto px-8 lg:px-0 py-8 relative flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Left Side: Reservation Prompt */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
              <span className="w-3 h-3 rounded-full bg-white"></span>
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            </div>
            <p className="text-sm tracking-wide text-gray-500">
              Are You Want To Make A Reservation, <a href="#" className="text-white underline decoration-white hover:text-[#cf432d] transition-colors">Get Your Table</a>
            </p>
          </div>

          {/* Right Side: Phone Number */}
            <div className="flex  gap-6 ml-5">
              
              {/* --- Added CENTER LINKS: About & Contact --- */}
              <div className="flex flex-row gap-3 items-center text-center">
                <a
                  href="/about"
                  className="text-sm text-white hover:text-[#cf432d] transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="text-sm text-white hover:text-[#cf432d] transition-colors"
                >
                  Contact
                </a>
              </div>


              {/* Icon */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0">
                <Image src="/icons/haveaq.png" alt="Have Question" width={40} height={40} />
              </div>

              
              {/* --- END ADDITION --- */}

              {/* Right Side: Phone Details */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking">Have Question?</p>
                <p className="text-sm font-bold">FREE +92 (8800)-9850</p>
              </div>

            </div>

        </div>
      </div>

      {/* --- Main Footer Content --- */}
      <div className="bg-[#111] relative pt-16 pb-12 px-6 lg:px-12 overflow-hidden">
        
        {/* Left Overlay Image */}
        <div className="absolute left-0 bottom-0 w-1/4 h-full pointer-events-none opacity-10 overflow-hidden">
          <Image
            src="/images/footer-left.png"
            alt="Decorative Left"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Overlay Image */}
        <div className="absolute right-0 bottom-0 w-[220px] opacity-80 pointer-events-none overflow-hidden">
          <Image
            src="/images/footer-right.png"
            alt="Decorative Right"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Get In Touch */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">Get In Touch</h4>
            <div className="space-y-4 text-gray-400 text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-white" />
                <p>Silk St, Barbican, London E2Y, UK</p>
              </div>
              <div className="flex items-center gap-3">
                 <Phone size={16} className="text-white" />
                 <p>+39-055-123456</p>
              </div>
              <div className="flex items-center gap-3">
                 <Mail size={16} className="text-white" />
                 <p>booking@webexample.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#cf432d] hover:text-white transition-colors"><Facebook size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#cf432d] hover:text-white transition-colors"><Twitter size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#cf432d] hover:text-white transition-colors"><Linkedin size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#cf432d] hover:text-white transition-colors"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#cf432d] hover:text-white transition-colors"><Rss size={14} /></a>
            </div>
          </div>

          {/* Column 2: Food Menu */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">Food Menu</h4>
            <ul className="space-y-3 text-sm text-gray-100">
              {['White Castle', 'Beef Sandwich', 'Cherry Limeade', "Wendy's Frosty", 'Pumpkin Spice'].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                  <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Working Hours */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">Working Hours</h4>
            <div className="space-y-4 text-sm text-gray-100 font-light">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">09:00 - 22:00</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">11:00 - 00:00</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sunday</span>
                <span className="text-white">11:00 - 23:00</span>
              </div>
              <div className="pt-2 text-xs">
                <span className="text-white">*</span> Happy hour 17:00 - 21:00
              </div>
            </div>
          </div>

          {/* Column 4: Instagram */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">
                Instagram
            </h4>

            <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                    key={i}
                    className="aspect-square bg-gray-800 cursor-pointer relative overflow-hidden group"
                >
                    <Image
                      src={`/images/insta${i}.jpeg`}
                      alt={`Instagram${i}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- Copyright Bar --- */}
      <div className="bg-[#0a0a0a] py-6 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-100 font-light tracking-wide">
           <p>© Copyright Delish. All Rights Reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms Of Use</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
