"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"; 
import { 
  Star, 
  Minus, 
  Plus,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
//   Youtube
} from "lucide-react";

// ==============================================================
// 1. RICH DATA STORE
// ==============================================================
const menuItems = [
  { 
    id: 1, 
    name: "Beef Bourguignon", 
    price: 16.00, 
    sku: "BB-001",
    category: "Dinner",
    tags: ["French", "Beef", "Hearty"],
    shortDesc: "A classic French beef stew braised in red wine with carrots and onions.",
    longDesc: "Beef Bourguignon is a world-renowned French stew. We marinate high-quality beef in Burgundy wine for 24 hours before slow-cooking it with fresh pearl onions, mushrooms, and bacon lardons. Served with a side of buttery mashed potatoes.",
    reviews: [
        { user: "Alice M.", rating: 5, comment: "Absolutely tender and delicious!" },
        { user: "John D.", rating: 4, comment: "Great flavor, but portion could be bigger." }
    ]
  },
  { 
    id: 2, 
    name: "Spicy Tuna Tartare", 
    price: 18.00, 
    sku: "ST-002",
    category: "Appetizer",
    tags: ["Seafood", "Spicy", "Raw"],
    shortDesc: "Fresh tuna tossed with sesame oil, spicy mayo, and scallions.",
    longDesc: "Our Spicy Tuna Tartare features sashimi-grade yellowfin tuna, diced and mixed with a house-made chili garlic sauce, sesame seeds, and fresh avocado. Served with crispy wonton chips for the perfect crunch.",
    reviews: [
        { user: "Sarah K.", rating: 5, comment: "Fresh and spicy! Loved it." }
    ]
  },
  { 
    id: 3, 
    name: "Margherita Pizza", 
    price: 15.00, 
    sku: "MP-003",
    category: "Pizza",
    tags: ["Italian", "Vegetarian", "Cheesy"],
    shortDesc: "Classic wood-fired pizza with San Marzano tomato sauce and fresh mozzarella.",
    longDesc: "Simple yet perfect. Our dough is fermented for 48 hours, topped with authentic San Marzano tomato sauce, fresh buffalo mozzarella, and basil leaves, then wood-fired at 900°F for a blistered crust.",
    reviews: [] 
  },
  { id: 4, name: "Braised Short Ribs", price: 16.00, sku: "BSR-004", category: "Dinner", tags: ["Meat", "Slow Cooked"], shortDesc: "Tender ribs in a savory glaze.", longDesc: "Slow-cooked for 8 hours until falling off the bone.", reviews: [] },
  { id: 5, name: "Vegan Buddha Bowl", price: 12.00, sku: "VBB-005", category: "Lunch", tags: ["Vegan", "Healthy"], shortDesc: "Nutritious bowl with quinoa and veggies.", longDesc: "A power-packed bowl featuring quinoa, roasted chickpeas, avocado, and tahini dressing.", reviews: [] },
  { id: 6, name: "Chicken Alfredo Pasta", price: 18.00, sku: "CAP-006", category: "Pasta", tags: ["Creamy", "Chicken"], shortDesc: "Fettuccine in a rich parmesan sauce.", longDesc: "Creamy homemade Alfredo sauce tossed with tender grilled chicken breast.", reviews: [] },
  { id: 7, name: "Classic Caesar Salad", price: 10.00, sku: "CCS-007", category: "Salad", tags: ["Greens", "Classic"], shortDesc: "Crisp romaine with parmesan and croutons.", longDesc: "Fresh romaine lettuce tossed in our signature Caesar dressing.", reviews: [] },
  { id: 8, name: "Roasted Vegetable Platter", price: 15.00, sku: "RVP-008", category: "Vegetarian", tags: ["Roasted", "Veggie"], shortDesc: "Seasonal vegetables roasted to perfection.", longDesc: "A mix of carrots, zucchini, bell peppers, and asparagus roasted with herbs.", reviews: [] },
  { id: 9, name: "Pulled Pork Sandwich", price: 14.00, sku: "PPS-009", category: "Sandwich", tags: ["Pork", "BBQ"], shortDesc: "Smoky pulled pork on a brioche bun.", longDesc: "Smoked for 12 hours and tossed in tangy BBQ sauce.", reviews: [] },
  { id: 10, name: "Ahi Poke Bowl", price: 16.00, sku: "APB-010", category: "Seafood", tags: ["Fresh", "Hawaiian"], shortDesc: "Marinated tuna with rice and toppings.", longDesc: "Traditional Hawaiian style poke with seaweed salad and edamame.", reviews: [] },
  { id: 11, name: "Chocolate Lava Cake", price: 12.00, sku: "CLC-011", category: "Dessert", tags: ["Sweet", "Chocolate"], shortDesc: "Warm cake with a gooey center.", longDesc: "Decadent chocolate cake with a molten truffle center, served with vanilla ice cream.", reviews: [] },
  { id: 12, name: "Lobster Bisque", price: 14.00, sku: "LB-012", category: "Soup", tags: ["Seafood", "Creamy"], shortDesc: "Rich and creamy lobster soup.", longDesc: "Velvety smooth bisque made with fresh lobster stock and cream.", reviews: [] },
];

// ==========================
//      REUSED COMPONENTS
// ==========================

// ==========================
//      HERO
// ==========================
const ShopHero = () => {
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
          SHOp
        </h1>

        <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <span className="hover:text-[#cf432d] cursor-pointer transition-colors">
            shop
          </span>
          <span className="mx-2">/</span>
          <span>shop now</span>
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
          About Us
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

const NeedTableCta = () => {
  return (
    <section className="bg-[#dcdcdc] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 block">Book A Table</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Need A Table On Coffee House</h2>
        </div>
        <button className="bg-transparent border-2 border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all cursor-pointer">
          Book A Table
        </button>
      </div>
    </section>
  );
};

// ==========================
//      MAIN DETAIL SECTION
// ==========================

export default function ShopDetailsPage() {
  const params = useParams();
  const id = Number(params.id); 

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = menuItems.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9]">
        <h1 className="text-3xl font-bold text-[#d34b35] mb-4">Product Not Found!</h1>
        <p className="text-gray-600 mb-6">The item you are looking for (ID: {params.id}) does not exist.</p>
        <Link href="/" className="px-6 py-3 bg-[#333] text-white font-bold uppercase text-xs rounded-sm hover:bg-[#d34b35] transition-colors">
          Go Back to Menu
        </Link>
      </div>
    );
  }

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc") setQuantity(quantity + 1);
  };

  return (
    <main className="bg-[#f9f9f9]">
      <ShopHero />
      
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            
            {/* LEFT: IMAGE */}
            <div className="grid gap-4">
              <div className="relative w-full h-[400px] lg:h-[550px] bg-[#f3f3f3] overflow-hidden group rounded-sm">
                <span className="absolute top-5 left-5 bg-[#d34b35] text-white text-[10px] font-bold px-4 py-1 rounded-sm z-10 uppercase tracking-wider">
                  Sale
                </span>
                
                {/* Image Enabled */}
                <div className="w-full h-full relative">
                   <Image 
                     src={`/images/food-${product.id}.jpg`} 
                     alt={product.name} 
                     fill 
                     className="object-cover" 
                   />
                </div>
              </div>
            </div>

            {/* RIGHT: INFO */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-[#333] mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-[#d34b35]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#d34b35" />)}
                </div>
                <span className="text-gray-500 text-sm">({product.reviews.length} Customer Review)</span>
              </div>
              <div className="text-2xl font-bold text-[#333] mb-6">${product.price.toFixed(2)}</div>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">{product.shortDesc}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center border border-gray-300 w-fit">
                  <button onClick={() => handleQuantity("dec")} className="p-4 hover:text-[#d34b35] cursor-pointer"><Minus size={16} /></button>
                  <span className="px-4 font-bold text-[#333] w-12 text-center">{quantity}</span>
                  <button onClick={() => handleQuantity("inc")} className="p-4 hover:text-[#d34b35] cursor-pointer"><Plus size={16} /></button>
                </div>
                <button className="bg-[#d34b35] text-white px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-[#b03a27] transition-all flex-1 sm:flex-none cursor-pointer">
                  Add to Cart
                </button>
              </div>

              <div className="space-y-3 text-sm text-gray-500">
                <p><span className="text-[#333] font-bold uppercase tracking-wide mr-2">Category:</span> {product.category}</p>
                <p><span className="text-[#333] font-bold uppercase tracking-wide mr-2">Tags:</span> {product.tags.join(", ")}</p>
                <div className="flex items-center gap-4 mt-4 pt-4">
                   <span className="text-[#333] font-bold uppercase tracking-wide">Share:</span>
                   <div className="flex gap-3 text-gray-500">
                      <Facebook size={18} className="hover:text-[#d34b35] cursor-pointer"/>
                      <Twitter size={18} className="hover:text-[#d34b35] cursor-pointer"/>
                      <Instagram size={18} className="hover:text-[#d34b35] cursor-pointer"/>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="mt-16">
              <div className="flex gap-8 mb-8 border-b border-gray-200">
                  <button onClick={() => setActiveTab("description")} className={`pb-4 text-sm font-bold uppercase tracking-wider cursor-pointer ${activeTab === 'description' ? 'text-[#d34b35] border-b-2 border-[#d34b35]' : 'text-gray-500'}`}>Description</button>
                  <button onClick={() => setActiveTab("reviews")} className={`pb-4 text-sm font-bold uppercase tracking-wider cursor-pointer ${activeTab === 'reviews' ? 'text-[#d34b35] border-b-2 border-[#d34b35]' : 'text-gray-500'}`}>Reviews ({product.reviews.length})</button>
              </div>
              <div className="text-gray-500 leading-relaxed text-sm space-y-4">
                  {activeTab === "description" && <p>{product.longDesc}</p>}
                  {activeTab === "reviews" && (
                      <div>
                          {product.reviews.length > 0 ? product.reviews.map((r, i) => (
                              <div key={i} className="mb-4"><p className="font-bold text-[#333]">{r.user}</p><p>"{r.comment}"</p></div>
                          )) : <p>No reviews yet.</p>}
                      </div>
                  )}
              </div>
          </div>
        </div>
      </div>
      <NeedTableCta />
    </main>
  );
}