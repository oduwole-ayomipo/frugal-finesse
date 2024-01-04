import React from "react";

function OutlineBtn({ buttonText, type, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className="text-btn w-full flex items-center justify-center px-10 py-4 font-display text-purple-dark text-base font-medium border hover:bg-purple-light ease-in-out duration-300 rounded-xl outline-purple-dark disabled:bg-stroke disabled:text-purple-6 disabled:cursor-not-allowed"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default OutlineBtn;
