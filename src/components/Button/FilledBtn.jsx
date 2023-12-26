import React from "react";

function FilledBtn({ buttonText, type, disabled, onClick }) {
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className="text-btn flex items-center justify-center px-10 py-4 w-full font-display text-purple-light text-base font-medium hover:opacity-95 ease-in-out duration-300 rounded-xl bg-purple-6"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default FilledBtn;
