import React from 'react';
import Header from './components/UserHeader';
import Sidebar from './components/UserSidebar';
import { Outlet } from 'react-router-dom';

function UserLayout() {
  return (
    <div className="container">
      <Header />
      <div className='flex'>
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-50 px-12 py-10" >
        <Outlet /> 
      </main>
      </div>
    </div>
  );
};

export default UserLayout;