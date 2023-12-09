import React from "react";

function TextBtn({ buttonText }) {
  return (
    <div>
      <button
        type="button"
        className="text-btn w-full flex items-center justify-center p-2 font-display text-base font-semibold hover:font-bold ease-in-out duration-300"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default TextBtn;
