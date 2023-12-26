import React from "react";

function CardOne() {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white p-6 shadow-default">
        <div>
          <span className="text-sm font-display font-medium">
            Max. Savings Budget
          </span>
          <h4 className="text-title-md py-2 font-bold font-display text-purple-black">
            $3.456
          </h4>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="font-display font-semibold text-purple-6">0%</span>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-purple-4">
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
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOne;
