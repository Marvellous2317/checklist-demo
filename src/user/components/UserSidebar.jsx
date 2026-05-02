import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosCheckmarkCircle } from "react-icons/io";

function UserSidebar () {
  
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h3>DailyCheck</h3>
        <p>PRODUCTIVITY HUB</p>
      </div>
    <nav className="sidebar-nav">
      <NavLink to="/" className="nav-item">
        <IoIosCheckmarkCircle /> Tasks
      </NavLink>
      <NavLink to="/calendar" className="nav-item">
        <IoIosCheckmarkCircle  /> Calendar
      </NavLink>
      <NavLink to="/settings" className="nav-item">
        <IoIosCheckmarkCircle  /> Settings
      </NavLink>
    </nav>
  </aside>)
};

export default UserSidebar;
