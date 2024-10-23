import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="min-w-screen bg-slate-600">
      <div
        className="min-w-[400px] h-[40px] flex items-center
      justify-center bg-slate-500 rounded-xl p-2 mx-2 gap-5"
      >
        <button className="text-white bg-slate-600 p-1 rounded-lg">
          About
        </button>
        <button className="text-white bg-slate-600 p-1 rounded-lg">
          Contact
        </button>
        <button className="text-white bg-slate-600 p-1 rounded-lg">
          NewEnergy
        </button>
        <button className="text-white bg-slate-600 p-1 rounded-lg">
          SheenHub
        </button>
      </div>
    </div>
  );
};
export default Footer;
