import React from "react";

function CardThree({ wants }) {
  const formatMaxWantsUI = () => {
    if (wants) {
      const formatWants = wants.toLocaleString();
      return formatWants;
    } else {
      return 0;
    }
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white p-6 shadow-default">
        <div>
          <span className="text-sm font-display font-medium">
            Max. Wants Budget
          </span>
          <h4 className="text-title-md py-2 font-bold font-display text-purple-black">
            ₦{formatMaxWantsUI()}
          </h4>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="font-display font-semibold text-purple-6">30%</span>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-purple-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#46325D"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardThree;
