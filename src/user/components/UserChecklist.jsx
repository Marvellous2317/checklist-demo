import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Lightbulb, Save } from "lucide-react";

// ── Mock data (replace with API fetch using `id` from useParams) ──
const MOCK_CHECKLIST = {
  title: "Morning Routine",
  description: "Start your day with clarity and focus.",
  date: "MONDAY, OCTOBER 23",
  proTip: "Completing your morning routine successfully 3 days in a row increases your dopamine baseline for the rest of the week.",
  items: [
    { id: 1, title: "Made my bed",      subtitle: "Immediate win for mental organization", icon: "🛏️"  },
    { id: 2, title: "Drank 500ml water", subtitle: "Rehydrate after 8 hours of sleep",        icon: "💧"  },
    { id: 3, title: "10 min Meditation", subtitle: "Focus on breath and presence",            icon: "🧘"  },
    { id: 4, title: "Daily planning",    subtitle: "List top 3 priorities for today",         icon: "📋"  },
  ],
};

export default function UserChecklist() {
  const navigate  = useNavigate();
  const { id }    = useParams(); // use to fetch real data

  // null = unanswered, "pass" = checked, "fail" = failed
  const [answers, setAnswers] = useState(
    Object.fromEntries(MOCK_CHECKLIST.items.map((i) => [i.id, null]))
  );

  const mark = (itemId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [itemId]: prev[itemId] === value ? null : value, // toggle off if same
    }));
  };

  const answered = Object.values(answers).filter(Boolean).length;
  const total    = MOCK_CHECKLIST.items.length;

  const handleSave = () => {
    console.log("Submitting answers:", answers);
    // → axios.post(`/api/checklists/${id}/submit`, { answers })
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-8 max-w-3xl mx-auto">

      {/* Back link */}
      <button
        onClick={() => navigate("/user")}
        className="flex items-center gap-1.5 text-xs text-gray-400
                   hover:text-gray-600 transition mb-6 uppercase tracking-wider"
      >
        <ArrowLeft size={13} /> Back to Overview
      </button>

      {/* Header row */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{MOCK_CHECKLIST.title}</h1>
          <p className="text-sm text-gray-400 mt-0.5">{MOCK_CHECKLIST.description}</p>
        </div>

        {/* Progress ring */}
        <div className="relative w-16 h-16 shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.9"
              fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
            <circle cx="18" cy="18" r="15.9"
              fill="none" stroke="#0F6E56" strokeWidth="2.5"
              strokeDasharray={`${(answered / total) * 100} 100`}
              strokeLinecap="round" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center
                          text-sm font-bold text-[#0F6E56]">
            {answered}/{total}
          </span>
        </div>
      </div>

      {/* Date badge */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-7">
        <Calendar size={12} />
        {MOCK_CHECKLIST.date}
      </div>

      {/* Checklist items */}
      <div className="flex flex-col gap-3 mb-5">
        {MOCK_CHECKLIST.items.map((item) => {
          const status = answers[item.id];
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between bg-white border rounded-2xl px-4 py-3.5 transition-all ${status === "pass" ? "border-[#0F6E56]" : status === "fail" ? "border-red-300" : "border-gray-200"}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Fail button */}
                <button
                  onClick={() => mark(item.id, "fail")}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm transition ${status === "fail" ? "bg-red-500 border-red-500 text-white" : "border-gray-300 text-gray-400 hover:border-red-400 hover:text-red-400"}`}
                >✕</button>

                {/* Pass button */}
                <button
                  onClick={() => mark(item.id, "pass")}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm transition
                              ${status === "pass"
                                ? "bg-[#0F6E56] border-[#0F6E56] text-white"
                                : "border-gray-300 text-gray-400 hover:border-[#0F6E56] hover:text-[#0F6E56]"}`}
                >✓</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pro tip */}
      <div className="border border-dashed border-gray-300 rounded-2xl p-4 mb-7 flex gap-3 items-start">
        <Lightbulb size={16} className="text-[#0F6E56] mt-0.5 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
            Pro Tip
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            {MOCK_CHECKLIST.proTip}
          </p>
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-center">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-[#0F6E56] text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-[#0a5240] transition"
        >
          <Save size={15} />
          Save Answers
        </button>
      </div>

    </div>
  );
}