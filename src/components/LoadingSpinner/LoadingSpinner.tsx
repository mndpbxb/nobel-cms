import React from "react";

interface IProps {
  className?: string;
}

const LoadingSpinner = ({ className }: IProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-3 h-100 flex-grow-1">
      <span
        className={className ? className : "spinner-border"}
        role="status"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
