import React from "react";

function FilledBtn({ buttonText }) {
  return (
    <div>
      <button
        type="button"
        className="text-btn flex items-center justify-center px-10 py-4 w-full font-display text-purple-light text-base font-medium rounded-xl bg-purple-6"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default FilledBtn;
