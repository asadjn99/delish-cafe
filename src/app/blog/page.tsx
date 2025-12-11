"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, User, ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

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
          <Link href="/" className="hover:text-[#cf432d] cursor-pointer transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>latest news</span>
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

// =========================================
//            INTERFACES
// =========================================

interface BlogPost {
  id: number;
  image: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
}

interface RecentPost {
  id: number;
  image: string;
  title: string;
  date: string;
}

// =========================================
//            BLOG DATA
// =========================================

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/images/welcome-img.jpg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "10 Reasons To Do A Digital Detox Challenge",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 2,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 3,
    image: "/images/welcome-img.jpg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 4,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 5,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 6,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 7,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 8,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 9,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 10,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 11,
    image: "/images/insta5.jpeg",
    date: "Feb 14, 2022",
    author: "Admin",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
];

const recentPosts: RecentPost[] = [
  { id: 1, image: "/images/meat.jpg", title: "Lorem ipsum dolor sit cing elit, sed do.", date: "June 22, 2020" },
  { id: 2, image: "/images/news1.jpg", title: "Lorem ipsum dolor sit cing elit, sed do.", date: "June 22, 2020" },
  { id: 3, image: "/images/meat.jpg", title: "Lorem ipsum dolor sit cing elit, sed do.", date: "June 22, 2020" },
  { id: 4, image: "/images/news1.jpg", title: "Lorem ipsum dolor sit cing elit, sed do.", date: "June 22, 2020" },
];

const tags = ["Sandwich", "Tikka", "Bbq", "Restaurant", "Chicken Sharma", "Health", "Fastfood", "Food", "Pizza", "Burger", "Chicken"];
// Filter by menu images
const galleryImages = ["/images/meat.jpg", "/images/cheese.webp", "/images/meat.jpg", "/images/cheese.webp", "/images/news1.jpg", "/images/cheese.webp"];

// =========================================
//            COMPONENTS
// =========================================
const BlogList = () => {
  // 1. Search State
  const [searchQuery, setSearchQuery] = useState("");
  
  // 2. Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Set to 2 so you can see pagination working with 4 items

  // 3. Filter logic based on Search
  const filteredPosts = blogPosts.filter((post) => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 4. Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 when searching
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white font-sans">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* --- LEFT SIDE: BLOG POSTS --- */}
          <div className="w-full lg:w-2/3 space-y-12">
            
            {/* Show message if no posts found */}
            {currentPosts.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                    {/* No posts found matching "{searchQuery}" */}
                </div>
            ) : (
                currentPosts.map((post) => (
                    <div key={post.id} className="group">
                        {/* Image */}
                        <div className="relative w-full h-[300px] md:h-[400px] mb-6 overflow-hidden ">
                        {/* Gray placeholder for demo if image fails */}
                        <div className="absolute inset-0 bg-gray-200">
                            <Image 
                                src={post.image} 
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        {/* Date Badge (Top Left) */}
                        <div className="absolute top-6 left-6 bg-[#d34b35] text-white px-4 py-2 rounded-md text-sm font-bold">
                            {post.date}
                        </div>
                        </div>

                        {/* Meta Data */}
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar size={16} className="text-[#d34b35]" />
                            <span>{post.date}</span>
                        </div>
                        <span>/</span>
                        <div className="flex items-center gap-1">
                            <User size={16} className="text-[#d34b35]" />
                            <span>{post.author}</span>
                        </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl uppercase font-bold text-gray-800 mb-4 hover:text-[#d34b35] transition-colors cursor-pointer">
                        {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-500 leading-relaxed mb-6">
                        {post.excerpt}
                        </p>

                        {/* Read More Button */}
                        <Link href={`/blog/${post.id}`}>
                        <button className="flex items-center gap-2 border border-[#d34b35] text-[#d34b35] px-6 py-3 rounded-md font-bold hover:bg-[#d34b35] hover:text-white transition-all">
                            Read More
                            <ArrowUpRight size={18} />
                        </button>
                        </Link>
                    </div>
                ))
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 pt-8">
                    {/* Prev Button */}
                    <button 
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm transition-colors ${
                            currentPage === 1 
                            ? "text-gray-300 cursor-not-allowed" 
                            : "text-[#d34b35] hover:bg-[#d34b35] hover:text-white"
                        }`}
                    >
                        &lt;&lt;
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 flex items-center justify-center rounded-sm transition-colors ${
                                currentPage === page
                                ? "bg-[#d34b35] text-white"
                                : "border border-gray-200 text-[#d34b35] hover:bg-[#d34b35] hover:text-white"
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button 
                         onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                         disabled={currentPage === totalPages}
                         className={`w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm transition-colors ${
                            currentPage === totalPages 
                            ? "text-gray-300 cursor-not-allowed" 
                            : "text-[#d34b35] hover:bg-[#d34b35] hover:text-white"
                        }`}
                    >
                        &gt;&gt;
                    </button>
                </div>
            )}
          </div>


          {/* --- RIGHT SIDE: SIDEBAR --- */}
          <aside className="w-full lg:w-1/3 space-y-8">
            
            {/* Search Widget - FUNCTIONAL */}
            <div className="flex">
              <input 
                type="text" 
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Your Keyword.." 
                className="flex-1 border border-r-0 border-gray-200 p-3 text-gray-600 focus:outline-none placeholder-gray-400 bg-gray-50"
              />
              <button className="bg-[#d34b35] text-white p-3 w-14 flex items-center justify-center hover:bg-[#d35846] transition-colors cursor-pointer">
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
                    <i className="hover:text-[#d34b35] cursor-pointer">FB</i>
                    <i className="hover:text-[#d34b35] cursor-pointer">TW</i>
                    <i className="hover:text-[#d34b35] cursor-pointer">IG</i>
                    <i className="hover:text-[#d34b35] cursor-pointer">YT</i>
                </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-6 text-black">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4">
                    <div className="w-20 h-16 relative bg-gray-200 shrink-0">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 mb-1 block">{post.date}</span>
                      <h4 className="text-sm font-medium text-gray-600 hover:text-[#d34b35] cursor-pointer leading-tight">
                        {post.title}
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
                  {tags.map((tag, i) => (
                      <span key={i} className="border border-gray-300 px-3 py-1.5 text-sm text-gray-600 cursor-pointer hover:border-[#d34b35] hover:text-[#d65743] transition-all">
                          {tag}
                      </span>
                  ))}
               </div>
            </div>

             {/* Photo Gallery */}
             <div className="border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-xl mb-6 text-black">Photo Gallery</h3>
                <div className="grid grid-cols-3 gap-2">
                    {galleryImages.map((img, i) => (
                         <div key={i} className="relative aspect-square bg-gray-200 cursor-pointer group">
                             <Image src={img} alt="Gallery" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                         </div>
                    ))}
                </div>
             </div>

            {/* Follow Us */}
            <div className="border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-6 text-black">Follow Us</h3>

            <div className="flex gap-4 justify-center">

                {/* Facebook */}
                <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center 
                hover:bg-[#d34b35] hover:text-white transition-colors cursor-pointer rounded-sm">
                <Facebook size={20} />
                </div>

                {/* Twitter / X */}
                <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center 
                hover:bg-[#d34b35] hover:text-white transition-colors cursor-pointer rounded-sm">
                <Twitter size={20} />
                </div>

                {/* YouTube */}
                <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center 
                hover:bg-[#d34b35] hover:text-white transition-colors cursor-pointer rounded-sm">
                <Youtube size={20} />
                </div>

                {/* Instagram */}
                <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center 
                hover:bg-[#d34b35] hover:text-white transition-colors cursor-pointer rounded-sm">
                <Instagram size={20} />
                </div>

            </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}

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

// ==========================
//        MAIN PAGE
// ==========================
export default function BlogPage() {
  return (
    <main>
      <AboutHero />
      <BlogList />
      <NeedTableCta/>
    </main>
  );
}