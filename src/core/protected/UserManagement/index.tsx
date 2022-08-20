import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { useHeaderDetails } from "../../../context/HeaderContext";

const UserManagementDashboard = () => {
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setHeader("User Management");
  }, []);

  return <Outlet />;
};

export default UserManagementDashboard;
