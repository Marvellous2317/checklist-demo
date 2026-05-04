import React from "react";
import { Link } from "react-router-dom";

export default function UserHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-14 px-8 bg-white border-b border-gray-200">

      {/* Left: logo + nav */}
      <div className="flex items-center gap-8">
        <span className="text-[#22C55E] font-bold text-lg tracking-tight">
          DailyCheck
        </span>
         <nav className="flex items-center gap-2">
          <Link to="/user"
            className="text-sm text-[#22C55E] font-medium pb-0.5 border-b-2 border-[#22C55E]">
            Dashboard
          </Link>
        </nav>
      </div>

      {/* Right: logout */}
     <Link to="/">
      <button className="text-sm text-gray-500 hover:text-[#22C55E] transition-colors bg-transparent border-none cursor-pointer">
        Logout
      </button>
      </Link>

    </header>
     );
};