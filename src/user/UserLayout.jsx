import React from 'react';
import Header from '../shared/Header';
import Sidebar from '../admin/components/AdminSidebar';
import { Outlet } from 'react-router-dom';

function UserLayout() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default UserLayout;