import React from "react";

function FilledBtn({ buttonText }) {
  return (
    <div>
      <button
        type="button"
        className="text-btn flex items-center justify-center px-10 py-4 w-full font-display text-purple-light text-base font-medium hover:bg-purple-light hover:text-purple-dark border-[1px] hover:outline-purple-dark outline-purple-6 ease-in-out duration-300 rounded-xl bg-purple-6"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default FilledBtn;
