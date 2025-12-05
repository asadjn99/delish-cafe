// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image"; 
// import { User, Mail, Phone, Printer } from "lucide-react";

// // --- DATA SOURCE ---
// // IMPORTANT: IDs must match what is generated in the Team List Page
// const TEAM_DATA = [
//   {
//     id: "kuman-tunman",
//     name: "Kuman Tunman",
//     role: "Head Chef",
//     bio: "Kuman is an expert in culinary arts with over 15 years of experience in 5-star hotels. He specializes in fusion cuisine and sustainable cooking practices.",
//     experience: "15 Years",
//     email: "kuman@delish.com",
//     phone: "+(256) 58621-11111",
//     fax: "+2568141111",
//     image: "/images/waiter3.jpg"
//   },
//   {
//     id: "benjamin-kenneth",
//     name: "Benjamin Kenneth",
//     role: "Sous Chef",
//     bio: "Benjamin brings a modern twist to traditional recipes. His passion for pastry and desserts has won numerous awards in the culinary world.",
//     experience: "8 Years",
//     email: "benjamin@delish.com",
//     phone: "+(256) 58621-22222",
//     fax: "+2568142222",
//     image: "/images/waiter2.webp"
//   },
//   {
//     id: "matthew-nathaniel",
//     name: "Matthew Nathaniel",
//     role: "Senior Waiter",
//     bio: "Matthew ensures every guest feels like royalty. His attention to detail and warm hospitality sets the standard for our service team.",
//     experience: "12 Years",
//     email: "matthew@delish.com",
//     phone: "+(256) 58621-33333",
//     fax: "+2568143333",
//     image: "/images/waiter3.jpg"
//   },
//   {
//     id: "george-james",
//     name: "George James",
//     role: "Barista",
//     bio: "George is a coffee connoisseur. He knows exactly how to roast and brew the perfect cup to start your morning right.",
//     experience: "5 Years",
//     email: "george@delish.com",
//     phone: "+(256) 58621-44444",
//     fax: "+2568144444",
//     image: "/images/waiter2.webp"
//   },
//   {
//     id: "edward-may",
//     name: "Edward May",
//     role: "Restaurant Manager",
//     bio: "Edward oversees operations with a steady hand. His leadership ensures the restaurant runs smoothly even during the busiest hours.",
//     experience: "20 Years",
//     email: "edward@delish.com",
//     phone: "+(256) 58621-55555",
//     fax: "+2568145555",
//     image: "/images/waiter3.jpg"
//   },
//   {
//     id: "patrick-robert",
//     name: "Patrick Robert",
//     role: "Sommelier",
//     bio: "Patrick has an encyclopedic knowledge of wines. He can pair the perfect vintage with any dish on our menu.",
//     experience: "10 Years",
//     email: "patrick@delish.com",
//     phone: "+(256) 58621-66666",
//     fax: "+2568146666",
//     image: "/images/waiter2.webp"
//   }
// ];

// // --- 1. HERO ---
// const MemberHero = () => {
//   return (
//     <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-[#333] flex items-center justify-center">
//       <div className="absolute inset-0 bg-black/40 z-10"></div>
//       {/* Background Image Placeholder */}
//       <div className="absolute inset-0 bg-[url('/images/insta1.jpeg')] bg-cover bg-center opacity-30"></div>
      
//       <div className="relative z-20 text-center">
//         <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-3">
//           Member Details
//         </h1>
//         <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
//           <span className="hover:text-[#cf432d] cursor-pointer transition-colors">Home</span>
//           <span className="mx-2">/</span>
//           <span className="hover:text-[#cf432d] cursor-pointer transition-colors">Team</span>
//           <span className="mx-2">/</span>
//           <span>Details</span>
//         </p>
//       </div>
//     </section>
//   );
// };

// // --- 2. DETAILS COMPONENT (Now Dynamic) ---
// const TeamMemberDetails = ({ member }: { member: any }) => {
//   if (!member) return <div className="text-center py-32 text-xl font-bold">Member Not Found</div>;

//   return (
//     <section className="py-24 bg-[#f9f9f9]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="flex flex-col lg:flex-row gap-12 bg-white p-12 shadow-sm border border-gray-100">
          
//           {/* LEFT: Info */}
//           <div className="w-full lg:w-1/2">
//             <h2 className="text-3xl md:text-4xl font-black text-[#111] mb-2 uppercase">
//               {member.name}
//             </h2>
//             <p className="text-[#cf432d] font-bold text-xs uppercase tracking-widest mb-8">
//               {member.role}
//             </p>

//             <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light border-b border-gray-100 pb-10">
//               {member.bio}
//             </p>

//             {/* Icons Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-10">
//               <div className="flex gap-4 items-start">
//                 <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#cf432d] shadow-sm shrink-0"><User size={18} /></div>
//                 <div><h4 className="text-xs text-gray-400 font-medium mb-1">Experience</h4><p className="text-sm font-bold text-[#111]">{member.experience}</p></div>
//               </div>
//               <div className="flex gap-4 items-start">
//                 <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#cf432d] shadow-sm shrink-0"><Mail size={18} /></div>
//                 <div><h4 className="text-xs text-gray-400 font-medium mb-1">Email</h4><p className="text-sm font-bold text-[#111] break-all">{member.email}</p></div>
//               </div>
//               <div className="flex gap-4 items-start">
//                 <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#cf432d] shadow-sm shrink-0"><Phone size={18} /></div>
//                 <div><h4 className="text-xs text-gray-400 font-medium mb-1">Phone</h4><p className="text-sm font-bold text-[#111]">{member.phone}</p></div>
//               </div>
//               <div className="flex gap-4 items-start">
//                 <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#cf432d] shadow-sm shrink-0"><Printer size={18} /></div>
//                 <div><h4 className="text-xs text-gray-400 font-medium mb-1">Fax</h4><p className="text-sm font-bold text-[#111]">{member.fax}</p></div>
//               </div>
//             </div>

//             <button className="bg-[#cf432d] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#b53a26] transition-all">
//               Contact Me
//             </button>
//           </div>

//           {/* RIGHT: Image */}
//           <div className="w-full lg:w-1/2">
//             <div className="w-full h-full min-h-[400px] bg-[#dcdcdc] relative overflow-hidden">
//                {/* In real project: <Image src={member.image} alt={member.name} fill className="object-cover" /> */}
//                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}></div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // --- 3. CTA ---
// const NeedTableCta = () => (
//   <section className="bg-[#dcdcdc] py-16">
//     <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
//       <div>
//         <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 block">
//           Book A Table For Your And Family Members
//         </span>
//         <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
//           Need A Table On Coffee House
//         </h2>
//       </div>
//       <button className="bg-transparent border-2 border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all">
//         Book A Table
//       </button>
//     </div>
//   </section>
// );

// // --- MAIN PAGE ---
// export default function TeamDetailsPage(props: { params?: { id: string } }) {
//   // Safe param access with fallback for development/preview
//   const params = props.params;
//   const slug = params?.id ; 

//   const member = TEAM_DATA.find(m => m.id === slug) || TEAM_DATA[0];

//   return (
//     <main>
//       <MemberHero />
//       <TeamMemberDetails member={member} />
//       <NeedTableCta />
//     </main>
//   );
// }

















// // "use client";
// // import React from "react";
// // import Image from "next/image"; 
// // import { User, Mail, Phone, Printer } from "lucide-react";

// // // ================= DATA =================
// // const TEAM_DATA = [
// //   {
// //     id: "kuman-tunman",
// //     name: "Kuman Tunman",
// //     role: "Head Chef",
// //     bio: "Kuman is an expert in culinary arts with over 15 years of experience...",
// //     experience: "15 Years",
// //     email: "kuman@delish.com",
// //     phone: "+(256) 58621-11111",
// //     fax: "+2568141111",
// //     image: "/images/waiter3.jpg"
// //   },
// //   {
// //     id: "benjamin-kenneth",
// //     name: "Benjamin Kenneth",
// //     role: "Sous Chef",
// //     bio: "Benjamin brings a modern twist to traditional recipes...",
// //     experience: "8 Years",
// //     email: "benjamin@delish.com",
// //     phone: "+(256) 58621-22222",
// //     fax: "+2568142222",
// //     image: "/images/waiter2.webp"
// //   },
// //   // ADD ALL OTHERS HERE...
// // ];

// // // ================= COMPONENT =================
// // export default function TeamMemberDetails({ id }: { id: string }) {

// //   const member = TEAM_DATA.find(m => m.id === id);

// //   // ⛔ If wrong url entered
// //   if (!member) return <h2 className="text-center py-24 text-xl font-bold text-red-500">Member Not Found</h2>;

// //   return (
// //     <section className="py-24 bg-[#f9f9f9]">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-12">
// //         <div className="flex flex-col lg:flex-row gap-12 bg-white p-12 shadow-sm border border-gray-100">

// //           {/* LEFT TEXT */}
// //           <div className="w-full lg:w-1/2">
// //             <h2 className="text-3xl md:text-4xl font-black text-[#111] mb-2">{member.name}</h2>
// //             <p className="text-[#cf432d] font-bold text-xs uppercase tracking-widest mb-8">{member.role}</p>

// //             <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light border-b border-gray-100 pb-10">{member.bio}</p>

// //             {/* Info */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-10">

// //               <InfoItem icon={<User size={18} />} label="Experience" value={member.experience} />
// //               <InfoItem icon={<Mail size={18} />} label="Email" value={member.email} />
// //               <InfoItem icon={<Phone size={18} />} label="Phone" value={member.phone} />
// //               <InfoItem icon={<Printer size={18} />} label="Fax" value={member.fax} />

// //             </div>

// //             <button className="bg-[#cf432d] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#b53a26] transition-all">
// //               Contact Me
// //             </button>
// //           </div>

// //           {/* IMAGE */}
// //           <div className="w-full lg:w-1/2">
// //             <div className="w-full h-full min-h-[400px] relative rounded-md overflow-hidden">
// //               <Image src={member.image} alt={member.name} fill className="object-cover" />
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // SMALL INFO REUSABLE ELEMENT
// // function InfoItem({ icon, label, value }: any) {
// //   return (
// //     <div className="flex gap-4 items-start">
// //       <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#cf432d] shadow-sm shrink-0">
// //         {icon}
// //       </div>
// //       <div>
// //         <h4 className="text-xs text-gray-400 font-medium mb-1">{label}</h4>
// //         <p className="text-sm font-bold text-[#111]">{value}</p>
// //       </div>
// //     </div>
// //   );
// // }
