import React from "react";
import { Check, X } from "lucide-react";

/**
 * Props:
 *  number      — "01", "02" etc.
 *  value       — controlled input value
 *  placeholder — grey hint text
 *  onChange    — (value: string) => void
 *  onRemove    — () => void
 */
export default function ChecklistItem({ number, value, placeholder, onChange, onRemove }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
    {/* Row number */}
      <span className="text-xs font-semibold text-gray-400 w-6 shrink-0">
        {number}
      </span>

      {/* Text input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
      />
       {/* Divider */}
      <div className="w-px h-5 bg-gray-200 shrink-0" />

      {/* Check button */}
      <button
        className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#0F6E56] transition-colors shrink-0"
      >
        <Check size={13} />
        Check
      </button>

      {/* Divider */}
      <div className="w-px h-5 bg-gray-200 shrink-0" />
       {/* Remove button */}
      <button
        onClick={onRemove}
        className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors shrink-0"
      >
        X
      </button>

    </div>
  );
}
    