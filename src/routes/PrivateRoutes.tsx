import React, { Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppRoutes from ".";

const PrivateRoutes = () => {
  let token: any = localStorage.getItem("access_token");
  token = 'yashu'
  const location = useLocation();

  if (!token && location?.pathname !== "/login") {
    return <Navigate to="/login" />;
  }
  if (
    token &&
    (location?.pathname === "/login" || location?.pathname === "/")
  ) {
    return <Navigate to="/dashboard" />;
  }
  if (token && location?.pathname === "/") {
    return <Navigate to="/dashboard" />;
  } 
  if (location?.pathname === "/") {
    return <Navigate to="/dashboard" />;
  }

  return <AppRoutes />;
};

export default PrivateRoutes;
