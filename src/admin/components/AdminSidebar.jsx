import React from "react";
import { CheckCircle, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Tasks",    Icon: CheckCircle, to: "/admin"          },
  { label: "Settings", Icon: Settings,    to: "/admin/settings" },
];

export default function AdminSidebar() {
  const { pathname } = useLocation(); // ← drive active state from the URL, not hardcoded

  return (
    <aside className="w-48 shrink-0 bg-white border-r border-gray-200 flex flex-col gap-8 px-4 py-6">

      {/* Brand block */}
      <div className="flex flex-col gap-0.5 px-2">
        <span className="text-[#22C55E] font-bold text-base tracking-tight">
          DailyCheck
        </span>
        <span className="text-[10px] tracking-widest text-gray-400 uppercase">
          Productivity Hub
        </span>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ label, Icon, to }) => {
          const active = pathname === to;
          return (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors
                ${active
                  ? "bg-[#E1F5EE] text-[#22C55E] font-medium"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
            >
              <Icon size={16} className={active ? "text-[#22C55E]" : "text-gray-400"} />
              {label}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}