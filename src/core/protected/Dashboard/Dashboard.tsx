import { Suspense, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
import { SideBarPaths } from "../SideBar/SidebarPaths";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname, SideBarPaths.main);
  useEffect(() => {
    if (location.pathname === SideBarPaths.main) {
      navigate(SideBarPaths.dashboard, { replace: true });
    }
  }, [location.pathname]);

  return (
    <div className="d-flex flex-grow-1 h-100">
      <Sidebar />
      <div className="col ">
        <div className="h-100 flex-grow-1 d-flex bg-white d-flex flex-column">
          <Header />
          <div className=" p-3 h-100 flex-grow-1 d-flex  scrollable">
            <Suspense fallback={<LoadingSpinner />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
