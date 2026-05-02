import React from "react";
import Login from "./auth/Login";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./auth/ForgotPassword";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";
import AdminSettings from "./admin/AdminSettings";
import AdminLayout from "./admin/AdminLayout";
import UserSettings from "./user/UserSettings";
import UserLayout from "./user/UserLayout";



function App(){
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard/>}/>
        <Route path="/admin/settings" element={<AdminSettings/>}/>
      </Route>
      
      <Route path="/user" element={<UserLayout/>}>
      <Route index element={<UserDashboard/>}/>
      <Route path="/user/settings" element={<UserSettings/>}/>
      </Route>

    </Routes>
           
  )
};

export default App;