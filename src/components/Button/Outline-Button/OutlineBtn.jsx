import React from "react";

function OutlineBtn({ buttonText }) {
  return (
    <div>
      <button
        type="button"
        className="text-btn w-full flex items-center justify-center px-10 py-4 font-display text-purple-dark text-base font-medium border-[1px] rounded-xl font-semibold outline-purple-dark"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default OutlineBtn;
