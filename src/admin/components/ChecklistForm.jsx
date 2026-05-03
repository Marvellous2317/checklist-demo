import React, { useState } from "react";
import { PlusCircle, Info } from "lucide-react";
import ChecklistItem from "./ChecklistItem";

let nextId = 3; // start after the two default items

const DEFAULT_ITEMS = [
  { id: 1, value: "",    placeholder: "Enter your first requirement..." },
  { id: 2, value: "",    placeholder: "e.g. Verify all safety exits are clear" },
];

export default function ChecklistForm() {
  const [title, setTitle]       = useState("");
  const [description, setDesc]  = useState("");
  const [items, setItems]       = useState(DEFAULT_ITEMS);

  // ── item handlers ──────────────────────────────────
  const handleItemChange = (id, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

   const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: nextId++, value: "", placeholder: "Enter requirement..." },
    ]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ── submit handlers ────────────────────────────────
  const handleSave = () => {
    const payload = { title, description, items };
    console.log("Saving checklist:", payload);
    // → send to your API here
  };

  const handleDiscard = () => {
    setTitle("");
    setDesc("");
    setItems(DEFAULT_ITEMS);
  };

  return (
    <div className="max-w-2xl">

      {/* ── Page heading ── */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Create New Checklist
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Design a structured workflow for your team with clarity and precision.
        </p>
      </div>

      {/* ── Title + Description card ── */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 flex flex-col gap-4">

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
            Checklist Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Weekly Facility Inspection"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F6E56]/30 focus:border-[#0F6E56] transition"
         />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
            Description
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Briefly explain the purpose of this checklist..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#0F6E56]/30 focus:border-[#0F6E56] transition"
          />
        </div>

      </div>
       {/* ── Checklist Items section ── */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-gray-800">
            Checklist Items
          </h2>
          <button
            onClick={addItem}
            className="flex items-center gap-1.5 text-sm font-medium text-[#0F6E56] hover:text-[#0a5240] transition-colors"
          >
            <PlusCircle size={16} />
            ADD ITEM
          </button>
        </div>
        {/* Numbered items */}
        <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <ChecklistItem
              key={item.id}
              number={String(index + 1).padStart(2, "0")}
              value={item.value}
              placeholder={item.placeholder}
              onChange={(val) => handleItemChange(item.id, val)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>
        
        {/* Dashed "add another" drop zone */}
        <button
          onClick={addItem}
          className="mt-3 w-full border-2 border-dashed border-gray-300 rounded-xl py-6 flex flex-col items-center gap-1 text-gray-400 hover:border-[#0F6E56] hover:text-[#0F6E56] transition-colors cursor-pointer"
        >
          <PlusCircle size={22} />
          <span className="text-sm">Click to add another question</span>
        </button>
      </div>
      {/* ── Footer bar ── */}
      <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
        <p className="flex items-center gap-1.5 text-xs text-gray-400">
          <Info size={13} />
          Users will be able to mark items as 'Complete' or 'Failed'.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDiscard}
            className="px-5 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            Discard
          </button>
          <button
            onClick={handleSave}
                   className="px-5 py-2 text-sm font-medium text-white bg-[#0F6E56] rounded-lg hover:bg-[#0a5240] transition"
          >
            Save Checklist
          </button>
        </div>
      </div>

    </div>
  );
}
