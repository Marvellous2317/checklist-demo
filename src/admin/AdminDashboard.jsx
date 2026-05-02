import React from "react";
import AdminSidebar from "./components/AdminSidebar.jsx";
import Header from "../shared/Header.jsx";
import ChecklistForm from "./components/ChecklistForm.jsx";

export default function AdminDashboard() {
  return(
    <div className="flex h-screen w-full flex-col">
          <ChecklistForm />
      </div>
  )
};