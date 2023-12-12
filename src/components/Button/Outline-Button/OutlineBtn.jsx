import React from "react";

function OutlineBtn({ buttonText, type }) {
  return (
    <div>
      <button
        type={type}
        className="text-btn w-full flex items-center justify-center px-10 py-4 font-display text-purple-dark text-base font-medium border hover:bg-purple-light ease-in-out duration-300 rounded-xl outline-purple-dark"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default OutlineBtn;
