import React from "react";

function CardTwo({ needs }) {
  const formatNeedsUI = () => {
    if (needs) {
      const formatNeeds = needs.toLocaleString();
      return formatNeeds;
    } else {
      return 0;
    }
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white p-6 shadow-default">
        <div>
          <span className="text-sm font-display font-medium">
            Max. Needs Budget
          </span>
          <h4 className="text-title-md py-2 font-bold font-display text-purple-black">
            ₦{formatNeedsUI()}
          </h4>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="font-display font-semibold text-purple-6">0%</span>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-purple-2">
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
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTwo;
