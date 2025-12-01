import React from 'react';

const TopBar = () => (
  <div className="bg-[#0f0f0f] text-gray-400 text-xs py-3 px-4 hidden lg:flex justify-between items-center border-b border-gray-800 tracking-wide font-light">
    <div className="flex items-center space-x-6">
      <span className="flex items-center gap-2">
        Mon-Wed: 11a-9p
      </span>
      <span className="w-1.5 h-1.5 bg-gray-600 rotate-45"></span>
      <span className="flex items-center gap-2">
        Thurs-Sat: 11a-10p
      </span>
    </div>
    <div className="flex items-center space-x-8">
      <a href="mailto:reservations@delish.com" className="hover:text-white transition-colors">reservations@delish.com</a>
      <span className="w-1.5 h-1.5 bg-gray-600 rotate-45"></span>
      <span className="hover:text-white transition-colors">123 456 7899</span>
      <span className="w-1.5 h-1.5 bg-gray-600 rotate-45"></span>
      <span className="hover:text-white transition-colors">296 Ridao Avenie Mor Berlin 251584</span>
    </div>
  </div>
);

export default TopBar;