import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("currentUser");
  return isLoggedIn ? <>{children}</> : <Navigate to="/authorization" />;
};

export default ProtectedRoute;

