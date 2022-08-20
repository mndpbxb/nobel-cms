import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useHeaderDetails } from "../../../context/HeaderContext";

const AcademicDashboard = () => {
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setHeader("Academics");
  }, []);
  return <Outlet />;
};

export default AcademicDashboard;
