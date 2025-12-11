"use client";

import React, { useState, useEffect, use } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, MessageSquare, Search, Facebook, Twitter, Instagram, Youtube, Quote, ChevronLeft, ChevronRight, Reply } from 'lucide-react';

// ==========================
//      ABOUT HERO
// ==========================
const AboutHero = () => {
  const images = [
    "/images/insta1.jpeg",
    "/images/insta2.jpeg",
    "/images/insta3.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* --- Carousel Images --- */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            current === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={img} alt="About Hero" fill className="object-cover" />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* --- Content --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-3">
          latest news
        </h1>

        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <Link href="/" className="hover:text-[#d34b35] cursor-pointer transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#d34b35] cursor-pointer transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>Details</span>
        </p>
      </div>

      {/* --- Outline Watermark --- */}
      <div
        className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none"
        style={{
          WebkitTextStroke: "2px rgba(255, 255, 255, 0.2)",
          color: "transparent",
        }}
      >
        <span className="text-6xl md:text-[90px] lg:text-[120px] font-black uppercase whitespace-nowrap">
          news insights
        </span>
      </div>

      {/* --- Left/Right Buttons --- */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md text-white z-20"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md text-white z-20"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
};

// ==========================
//      BOTTOM CTA STRIP
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

// =========================================
//            MOCK DATA (Shared)
// =========================================
const blogPosts = [
  {
    id: 1,
    image: "/images/food-2.jpg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "10 Reasons To Do A Digital Detox Challenge",
    desc: "Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti volutpat sodales sit... ",
    fullContent: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Egestas varius ac dapibus pellentesque dignissim cursus sed dignissim. 
      
      Consectetur adipiscing elit. Velit dapibus est, feugiat tincidunt scelerisque amet. Elementum magna congue condimentum placerat habitasse potenti volutpat sodales sit. Quis commodo odio aenean sed adipiscing. Diam sed sed dolor tincidunt ipsum.
    `,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    comments: 3
  },
  {
    id: 2,
    image: "/images/insta1.jpg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    desc: "Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum turpis arcu, aliquet eget consectetur semper, imperdiet id lacus.",
    fullContent: `
       Velit dapibus est, feugiat tincidunt scelerisque amet. Elementum magna congue condimentum placerat habitasse potenti volutpat sodales sit. Quis commodo odio aenean sed adipiscing.
    `,
    quote: "Cooking is like love. It should be entered into with abandon or not at all.",
    comments: 5
  },
  {
    id: 3,
    image: "/images/food-2.jpg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    desc: "Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum turpis arcu, aliquet eget consectetur semper, imperdiet id lacus.",
    fullContent: `
       Velit dapibus est, feugiat tincidunt scelerisque amet. Elementum magna congue condimentum placerat habitasse potenti volutpat sodales sit. Quis commodo odio aenean sed adipiscing.
    `,
    quote: "Cooking is like love. It should be entered into with abandon or not at all.",
    comments: 5
  },
  {
    id: 4,
    image: "/images/food-2.jpg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    desc: "Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum turpis arcu, aliquet eget consectetur semper, imperdiet id lacus.",
    fullContent: `
       Velit dapibus est, feugiat tincidunt scelerisque amet. Elementum magna congue condimentum placerat habitasse potenti volutpat sodales sit. Quis commodo odio aenean sed adipiscing.
    `,
    quote: "Cooking is like love. It should be entered into with abandon or not at all.",
    comments: 5
  },
];

const commentsData = [
    {
        id: 1,
        user: "Md Sohag",
        date: "June 22, 2020",
        avatar: "/images/admin.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut ac quam odio. U llamcorper ipsum vel commodo.",
    },
    {
        id: 2,
        user: "Md Sohag",
        date: "June 22, 2020",
        avatar: "/images/admin.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut ac quam odio. U llamcorper ipsum vel commodo.",
    },
    {
        id: 3,
        user: "Md Sohag",
        date: "June 22, 2020",
        avatar: "/images/admin.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut ac quam odio. U llamcorper ipsum vel commodo.",
    }
];

// =========================================
//            MAIN COMPONENT
// =========================================

export default function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  
  // Unwrap params
  const { id } = use(params);
  
  // Find the post
  const post = blogPosts.find((p) => p.id === Number(id));

  // Handle 404
  if (!post) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <AboutHero />
            <div className="py-20 text-center">
                 <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
                 <Link href="/blog" className="text-[#d34b35] underline mt-4 block">Back to Blog</Link>
            </div>
            <NeedTableCta />
        </div>
    );
  }

  return (
    <main className="bg-white font-sans">
      
      {/* 1. HERO SECTION */}
      <AboutHero />

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* --- LEFT SIDE: ARTICLE --- */}
          <div className="w-full lg:w-2/3">
            
            {/* Featured Image */}
            <div className="relative w-full h-[300px] md:h-[500px] mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
            </div>

            {/* Meta Data */}
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
               <div className="flex items-center gap-1">
                 <Calendar size={16} className="text-[#d34b35]" />
                 <span>{post.date}</span>
               </div>
               <span>/</span>
               <div className="flex items-center gap-1">
                 <User size={16} className="text-[#d34b35]" />
                 <span>{post.author}</span>
               </div>
               <span>/</span>
               <div className="flex items-center gap-1">
                 <MessageSquare size={16} className="text-[#d34b35]" />
                 <span className="text-black">{post.comments} Comments</span>
               </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
               {post.title}
            </h2>

            {/* Content Body */}
            <div className="text-gray-600 leading-relaxed space-y-6 mb-10">
                <p>{post.desc}</p>
                <p>{post.fullContent}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                {/* Quote Block */}
                <div className="bg-[#d34b35] p-8 rounded-sm my-8">
                   <div className="flex gap-4">
                      <div className="bg-white/20 p-2 h-fit rounded-full shrink-0">
                         <Quote size={32} className="text-white fill-white" />
                      </div>
                      <div>
                         <p className="text-white font-bold text-lg md:text-xl italic mb-2">
                           "{post.quote}"
                         </p>
                         <p className="text-white/80 text-sm">
                           - World Famous Chef
                         </p>
                      </div>
                   </div>
                </div>

                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                {/* Content Images Row */}
                <div className="flex flex-col md:flex-row gap-6 my-8">
                     <div className="relative w-full h-64 md:w-1/2">
                         <Image src="/images/food-3.jpg" alt="detail" fill className="object-cover" />
                     </div>
                     <div className="relative w-full h-64 md:w-1/2">
                         <div className="absolute inset-0 bg-gray-200">
                             <Image src="/images/food-2.jpg" alt="detail" fill className="object-cover" />
                         </div>
                     </div>
                </div>

                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>


            {/* Tags & Share */}
            <div className="flex flex-col md:flex-row justify-between items-center border border-gray-200 p-4 mb-12">
                 <div className="flex items-center gap-2 mb-4 md:mb-0">
                     <span className="font-bold text-gray-800">Tags:</span>
                     <span className="text-gray-500">Restaurant, Dinner, Pizza, Yummy</span>
                 </div>
                 <div className="flex items-center gap-3">
                     <span className="font-bold text-gray-800">Share:</span>
                     <div className="flex gap-3 text-gray-600">
                         <Facebook size={18} className="cursor-pointer hover:text-[#d34b35]" />
                         <Twitter size={18} className="cursor-pointer hover:text-[#d34b35]" />
                         <Instagram size={18} className="cursor-pointer hover:text-[#d34b35]" />
                     </div>
                 </div>
            </div>

            {/* Comments Section */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-black">Comments - {commentsData.length}</h3>
                <div className="space-y-8">
                    {commentsData.map((comment) => (
                         <div key={comment.id} className="flex gap-4 items-start text-black">
                             <div className="w-16 h-16 relative bg-gray-200 rounded-full overflow-hidden shrink-0">
                                 <Image src={comment.avatar} alt={comment.user} fill className="object-cover" />
                             </div>
                             <div className="flex-1">
                                 <div className="flex gap-2 items-center mb-1">
                                     <h4 className="font-bold text-lg">{comment.user}</h4>
                                     <Reply size={14} className="text-[#d34b35] cursor-pointer" />
                                     <span className="text-[#d34b35] text-xs cursor-pointer">Reply</span>
                                 </div>
                                 <div className="flex items-center gap-2 mb-3">
                                     <Calendar size={14} className="text-gray-400" />
                                     <span className="text-gray-400 text-xs">{comment.date}</span>
                                 </div>
                                 <p className="text-gray-500 text-sm leading-relaxed">
                                     {comment.text}
                                 </p>
                             </div>
                         </div>
                    ))}
                </div>
            </div>

            {/* Post Comment Form */}
            <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-2 text-black">Leave a Reply</h3>
                <div className="w-16 h-2px bg-[#d34b35] mb-8"></div>
                
                <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <input 
                            type="text" 
                            placeholder="Your Name*" 
                            className=" text-black w-full p-4 border border-gray-200 focus:outline-none focus:border-[#d34b35]"
                         />
                         <input 
                            type="email" 
                            placeholder="Email Address*" 
                            className=" text-black w-full p-4 border border-gray-200 focus:outline-none focus:border-[#d34b35]"
                         />
                     </div>
                     <textarea 
                        rows={6}
                        placeholder="Type your message" 
                        className="w-full p-4 border text-black border-gray-200 focus:outline-none focus:border-[#d34b35] resize-none"
                     ></textarea>
                     <button className="bg-[#d34b35] text-white px-8 py-3 font-bold hover:bg-[#b5402b] transition-colors cursor-pointer">
                         Submit Comment
                     </button>
                </form>
            </div>

          </div>


          {/* --- RIGHT SIDE: SIDEBAR --- */}
          <aside className="w-full lg:w-1/3 space-y-8">
            
            {/* Search Widget */}
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search Your Keyword.." 
                className="flex-1 border border-r-0 border-gray-200 p-3 text-gray-600 focus:outline-none placeholder-gray-400 bg-gray-50"
              />
              <button className="bg-[#d34b35] text-white p-3 w-14 flex items-center justify-center hover:bg-[#b5402b] transition-colors cursor-pointer">
                <Search size={20} />
              </button>
            </div>

            {/* Author Profile Widget */}
            <div className="border border-gray-200 p-6 text-center shadow-sm">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative bg-gray-200">
                    <Image src="/images/admin.png" alt="Admin" fill className="object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-1">Asad Ullah</h3>
                <p className="text-gray-400 text-sm mb-2">Blogger/Photographer</p>
                <div className="flex justify-center gap-1 mb-4 text-[#d34b35] text-xs">
                     {'★★★★★'.split('').map((star, i) => <span key={i}>★</span>)}
                     <span className="text-gray-400">(1 Review)</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis distinctio, odio eligendi suscipit reprehenderit atque
                </p>
                <div className="flex justify-center gap-3 text-lg text-gray-700">
                    <Facebook size={20} className="hover:text-[#d34b35] cursor-pointer" />
                    <Twitter size={20} className="hover:text-[#d34b35] cursor-pointer" />
                    <Instagram size={20} className="hover:text-[#d34b35] cursor-pointer" />
                    <Youtube size={20} className="hover:text-[#d34b35] cursor-pointer" />
                </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-6 text-black">Recent Post</h3>
              <div className="space-y-4">
                 {[1,2,3,4].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-20 h-16 relative bg-gray-200 shrink-0">
                      <Image src={`/images/recent-${i}.webp`} alt="post" fill className="object-cover" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 mb-1 block">June 22, 2020</span>
                      <h4 className="text-sm font-medium text-gray-600 hover:text-[#d34b35] cursor-pointer leading-tight">
                         Lorem ipsum dolor sit cing elit, sed do.
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter By Menu (Categories) */}
            <div className="border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-6 text-black">Filter By Menu</h3>
              <ul className="space-y-4">
                {["Chicken Fry", "Burger Food", "Pizza", "Fresh Fruits", "Vegetables"].map((item, i) => (
                  <li key={i} className="flex justify-between items-center group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 relative bg-gray-100 rounded-sm overflow-hidden shrink-0">
                           <Image src={`/images/food-${i+1}.jpg`} alt={item} fill className="object-cover" /> 
                        </div>
                        <span className="font-semibold text-gray-700 group-hover:text-[#d34b35] transition-colors">{item}</span>
                    </div>
                    <span className="font-bold text-gray-700">{(i + 2) * 4}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="border border-gray-200 p-6 shadow-sm">
               <h3 className="font-bold text-xl mb-6 text-black">Popular Tags</h3>
               <div className="flex flex-wrap gap-3">
                  {["Sandwich", "Tikka", "Bbq", "Restaurant", "Chicken Sharma", "Health", "Fastfood", "Food", "Pizza", "Burger", "Chicken"].map((tag, i) => (
                      <span key={i} className="border border-gray-300 px-3 py-1.5 text-sm text-gray-600 cursor-pointer hover:border-[#d34b35] hover:text-[#d34b35] transition-all">
                          {tag}
                      </span>
                  ))}
               </div>
            </div>

             {/* Photo Gallery */}
             <div className="border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-xl mb-6 text-black">Photo Gallery</h3>
                <div className="grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6].map((i) => (
                         <div key={i} className="relative aspect-square bg-gray-200 cursor-pointer group">
                             <Image src={`/images/gallery-${i}.jpg`} alt="Gallery" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                         </div>
                    ))}
                </div>
             </div>

             {/* Follow Us */}
             <div className="border border-gray-200 p-6 shadow-sm">
                 <h3 className="font-bold text-xl mb-6 text-black">Follow Us</h3>
                 <div className="flex gap-4 justify-center">
                    <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-[#d34b35] hover:text-white transition-colors cursor-pointer rounded-sm">
                      <Facebook size={20} />
                    </div>
                    <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-[#d34b35] hover:text-white transition-colors cursor-pointer rounded-sm">
                      <Twitter size={20} />
                    </div>
                    <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-[#d34b35] hover:text-white transition-colors cursor-pointer rounded-sm">
                      <Instagram size={20} />
                    </div>
                    <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-[#d34b35] hover:text-white transition-colors cursor-pointer rounded-sm">
                      <Youtube size={20} />
                    </div>
                 </div>
             </div>

          </aside>
        </div>
      </div>

      {/* 3. CTA */}
      {/* // ==========================
//      BOTTOM CTA STRIP
// ========================== */}
{/* const NeedTableCta = () => {
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
}; */}
    </main>
  );
}