import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Upload, History, HelpCircle, CheckCircle2, TrendingUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// ── Mock data (replace with API calls) ────────────────────────
const ASSIGNED_CHECKLISTS = [
  { id: 1, title: "Clarity and Focus",    location: "Main Warehouse", due: "11:00 AM", status: "pending"},
  { id: 2, title: "Safety & Hygiene Protocol", location: "Front Office",   due: "1:00 PM",  status: "pending"  },
  { id: 3, title: "Store Opening Routine",     location: "Retail Floor",  due: "Overdue",   status: "overdue"  },
];

const QUICK_ACCESS = [
  { label: "New Log",      Icon: Plus        },
  { label: "Report Issue", Icon: Upload      },
  { label: "History",      Icon: History     },
  { label: "Support",      Icon: HelpCircle  },
];


export default function UserDashboard() {
  const navigate = useNavigate();
  
  const userName = "Marvellous";
  
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  
  const getGreeting = () => {
  const hour = new Date().getHours(); // Gets 0-23
  
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

  return (
    <div className="min-h-screen bg-gray-50 w-full px-6 py-10" >

      {/* ── Greeting ── */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900"> {getGreeting()}, {userName}!</h1>
          <p className="text-sm text-gray-400 mt-0.5">{today}</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">
          <Calendar size={15} />
          Today's Schedule
        </button>
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-3 gap-5">

        {/* Left col — spans 2 */}
        <div className="col-span-2 flex flex-col gap-5">

          {/* Assigned Checklists */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Assigned Checklists</h2>
              <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                4 Pending
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {ASSIGNED_CHECKLISTS.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 border border-gray-100 rounded-xl hover:border-gray-200 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center">
                      <CheckCircle2 size={18} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-400">
                        {item.location} • Due {item.due}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.status === "overdue" && (
                      <span className="text-xs text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
                        Overdue
                      </span>
                    )}
                    <button
                      onClick={() => navigate(`/user/checklist/${item.id}`)}
                      className="text-xs font-medium px-4 py-1.5 border border-[#0F6E56] text-[#0F6E56] rounded-lg hover:bg-[#E1F5EE] transition"
                    >
                      {item.status === "overdue" ? "Resume" : "Start"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats row */}
          <div className="grid grid-cols-2 gap-5">

            {/* Compliance Score */}
            <div className="bg-[#0F6E56] rounded-2xl p-5 text-white">
              <TrendingUp size={18} className="mb-2 opacity-80" />
              <p className="text-3xl font-bold">84%</p>
              <p className="text-sm opacity-70 mt-0.5">Weekly Compliance Score</p>
              <div className="mt-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[84%] bg-white rounded-full" />
              </div>
            </div>

            {/* Tasks completed */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <CheckCircle2 size={18} className="text-[#0F6E56] mb-2" />
              <p className="text-3xl font-bold text-gray-900">12 / 15</p>
              <p className="text-sm text-gray-400 mt-0.5">Tasks Completed Today</p>
              <div className="flex gap-1 mt-4">
                {["JD", "ML", "AK"].map((init) => (
                  <span
                    key={init}
                    className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 text-[10px] font-semibold flex items-center justify-center"
                  >
                    {init}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        

        </div>
      </div>
  );
}