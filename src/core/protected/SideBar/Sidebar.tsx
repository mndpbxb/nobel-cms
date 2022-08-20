import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SideBarItems } from "./SidebarItems";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className="flex-shrink-0 p-3 bg-dark-blue-10 text-white"
      style={{ width: "275px" }}
    >
      <Link
        to={"/dashboard"}
        className="d-flex align-items-center justify-content-center py-3 mb-3 text-decoration-none text-white"
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="38" height="38" fill="white" fillOpacity="0.01" />
          <path
            d="M3.11374 5.66175C3.13768 5.23083 3.59511 4.96536 3.98114 5.15838L12.3171 9.32634C12.5284 9.43201 12.6581 9.65189 12.6482 9.88798L11.888 28.1338C11.8786 28.3586 11.7442 28.5593 11.5399 28.6536L2.48691 32.8319C2.07614 33.0215 1.6113 32.7056 1.6364 32.2539L3.11374 5.66175Z"
            fill="#007AFF"
          />
          <path
            d="M34.8863 5.66175C34.8623 5.23083 34.4049 4.96536 34.0189 5.15838L25.6829 9.32634C25.4716 9.43201 25.3419 9.65189 25.3518 9.88798L26.112 28.1338C26.1214 28.3586 26.2558 28.5593 26.4601 28.6536L35.5131 32.8319C35.9239 33.0215 36.3887 32.7056 36.3636 32.2539L34.8863 5.66175Z"
            fill="#FDAD15"
          />
          <path
            d="M14.2168 10.2734C14.2313 9.91065 14.6153 9.6838 14.94 9.84614L18.5505 11.6514C18.832 11.7922 19.1634 11.7922 19.4449 11.6514L23.0555 9.84614C23.3801 9.6838 23.7641 9.91065 23.7787 10.2734L24.5178 28.7519C24.5313 29.0888 24.3741 29.4097 24.0998 29.6056L19.3465 33.0009C19.1378 33.1499 18.8576 33.1499 18.649 33.0009L13.8956 29.6056C13.6213 29.4097 13.4642 29.0888 13.4776 28.7519L14.2168 10.2734Z"
            fill="#2AC670"
          />
        </svg>

        <span className="fs-4 fw-semibold font-primary ms-2">
          {process.env.REACT_APP_COLLEGE_NAME}
        </span>
      </Link>

      <ul className="list-unstyled ps-0 text-white">
        {SideBarItems.map((menu, index) => (
          <li className="mb-4" key={index}>
            {menu.children ? (
              <>
                <div
                  onClick={() => {
                    navigate(menu.path);
                  }}
                  className={`btn  ${
                    (location.pathname === menu.path ||
                      location.pathname.includes(menu.path)) &&
                    "btn-gradient-primary"
                  }  text-white w-100 py-2 text-start d-flex align-items-center fw-normal`}
                >
                  {menu.icon}
                  <p className="font-primary mx-3 flex-grow-1 fw-normal">
                    {menu.title}
                  </p>
                  <BsChevronDown
                    size={20}
                    className="justify-self-end flex-shrink-0"
                    data-bs-toggle="collapse"
                    data-bs-target={`#sidebarCollapse${index}`}
                    aria-expanded="true"
                    aria-controls={`sidebarCollapse${index}`}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <div
                  className="collapse  text-white  my-2 ps-4 font-primary  fs-6 fw-light"
                  id={`sidebarCollapse${index}`}
                >
                  <ul>
                    {menu?.children?.map((child) => (
                      <Link
                        to={child.path}
                        className="mb-1 text-decoration-none text-white"
                      >
                        <li
                          className={`py-3 d-flex flex-column w-auto me-3 ${
                            location.pathname === child.path
                              ? "text-purple"
                              : "text-white "
                          } `}
                        >
                          {child.title}
                          {/* {location.pathname === child.path && (
                            <span className="line bg-purple mt-1" />
                          )} */}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link to={menu.path} className=" text-decoration-none text-white">
                <div
                  className={`btn ${
                    location.pathname === menu.path && "btn-gradient-primary"
                  } text-white w-100 py-2 text-start d-flex align-items-center fw-normal`}
                  role="button"
                >
                  {menu.icon}
                  <p className="font-primary  mx-3 fw-normal">{menu.title}</p>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
