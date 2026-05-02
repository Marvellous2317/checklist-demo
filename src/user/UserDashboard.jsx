import React from "react";
import { Link } from "react-router-dom";


export default function UserDashboard() {
    return(
        <div className="flex h-full w-full">
      {/* 1. The White Inner Sidebar (already discussed) */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:flex flex-col gap-8 shrink-0">
        <h2 className="text-[#004A99] font-semibold text-lg">DailyCheck</h2>
        {/* Navigation items... */}
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 bg-white flex flex-col h-full overflow-y-auto">
        {/* THE HEADER BLOCK */}
        <header className="px-12 pt-12 pb-6 border-b border-gray-100">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Create New Checklist
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              Design a structured workflow for your team to follow during daily inspections.
            </p>
          </div>
        </header>

        {/* THE FORM CONTENT */}
        <section className="px-12 py-8">
          <div className="max-w-3xl">
             {/* Your form fields will go here */}
          </div>
        </section>
      </main>
    </div>
  );
}
    