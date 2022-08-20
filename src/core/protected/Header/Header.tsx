import React from "react";
import { useHeaderDetails } from "../../../context/HeaderContext";

const Header = () => {
  const headerDetails = useHeaderDetails();

  return (
    <div className="border-bottom border-secondary w-100 p-3 position-relative">
      <div className="d-flex w-100">
        <div className="d-flex flex-column">
          <h4 className="font-primary fw-bold ">{headerDetails.header}</h4>
          <p className="d-flex align-items-center mt-2 font-primary text-secondary">
            <span className="dot me-2" />
            {headerDetails.subHeader}
          </p>
        </div>
        <div className="d-flex align-items-center ms-auto">
          <div className="">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              style={{ height: "40px", width: "40px" }}
              className="rounded"
            />
          </div>
          <p className="font-primary ms-2">Yashu Neupane</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
