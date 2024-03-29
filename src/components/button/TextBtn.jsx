import React from "react";

function TextBtn({ buttonText, type, onClick }) {
  return (
    <>
      <button
        data-testid="text-btn"
        type={type}
        onClick={onClick}
        className="text-btn w-full flex items-center justify-center p-2 font-display text-base text-purple-dark font-semibold hover:font-bold ease-in-out duration-300"
      >
        {buttonText}
      </button>
    </>
  );
}

export default TextBtn;
