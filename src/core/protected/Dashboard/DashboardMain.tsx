import React from "react";
import { useHeaderDetails } from "../../../context/HeaderContext";
import { useEffect } from "react";
import { dashboardMenuList } from "./DashboardItemList";
import { Link } from "react-router-dom";

const DashboardMain = () => {
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setHeader("Dashboard");
    headerDetails.setSubHeader("Welcome");
  }, []);

  return (
    <div className="container-fluid p-0 mt-3 ">
      <div className="grid-dashboard  w-100 ">
        {dashboardMenuList.map((menuItem) => (
          <Link
            to={menuItem.link}
            className="text-decoration-none card text-center bg-light-gray p-4 border-light-border"
          >
            {menuItem.icon}
            <p className="font-primary des fw-semibold mt-2">{menuItem.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardMain;
