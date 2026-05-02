import { Outlet } from "react-router-dom";
import Header from "../shared/Header.jsx";
import AdminSidebar from "./components/AdminSidebar.jsx";

export default function AdminLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 px-12 py-10">
          <Outlet />  {/* ← AdminDashboard renders HERE */}
        </main>
      </div>
    </div>
  );
};
