import { React, useState } from "react";
import classNames from "classnames";

function BudgetPrincipleCard({ onClick, cardId }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    onClick(cardId);
  };

  const cardClass = classNames(
    "border-b",
    "border-stroke",
    "py-4",
    "cursor-pointer",
    "px-7",
    "text-purple-dark",

    {
      "text-purple-light": isSelected,
      "bg-purple-6": isSelected,
    }
  );
  return (
    <>
      <div
        className="col-span-5 xl:col-span-2 my-4 mx-auto  w-[25rem]"
        onClick={handleCardClick}
      >
        <div className="rounded-sm border border-stroke bg-white shadow-default text-purple-dark">
          <div className={cardClass} onClick={handleCardClick}>
            <h5 className="font-display h-full w-full text-center text-lg font-medium">
              {cardId} The 50-30-20 Rule
            </h5>
          </div>
          <div className="p-7">
            <div className="mb-4 flex items-center">
              <p className="font-body text-center text-sm font-normal">
                <span className="inline-block mr-[-10px] mb-[-2px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                  >
                    <g transform="rotate(180 10 10)">
                      <path
                        fill="#DAC7FF"
                        d="M5.315 3.401c-1.61 0-2.916 1.343-2.916 3c0 1.656 1.306 3 2.916 3c2.915 0 .972 5.799-2.916 5.799v1.4c6.939.001 9.658-13.199 2.916-13.199m8.4 0c-1.609 0-2.915 1.343-2.915 3c0 1.656 1.306 3 2.915 3c2.916 0 .973 5.799-2.915 5.799v1.4c6.938.001 9.657-13.199 2.915-13.199"
                      />
                    </g>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BudgetPrincipleCard;
