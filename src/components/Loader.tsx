import React from "react";
import logo from "../lEO.png";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#1A252F] flex items-center justify-center z-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,134,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,11,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative text-center">
        {/* Spinner ring */}
        <div className="relative mb-6 mx-auto w-20 h-20">
          <div
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              border: "3px solid rgba(184,134,11,0.15)",
              borderTopColor: "#B8860B",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt="LEO Business Group" className="h-7 w-auto" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-white text-lg font-semibold tracking-wide mb-1">
          LEO Business Group
        </h2>
        <p className="text-[#B8860B] text-xs font-medium tracking-widest uppercase">
          Powering Industrial Excellence
        </p>
      </div>
    </div>
  );
};

export default Loader;
