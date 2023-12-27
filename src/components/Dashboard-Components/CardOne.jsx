import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/UserDataContext";

function CardOne() {
  const { state } = useContext(UserDataContext);
  const { userData, loading, error } = state;
  const [income, setIncome] = useState(0);

  useEffect(() => {
    if (!loading && !error) {
      setIncome(userData.income);
    }
  }, [userData, loading, error]);

  const formatIncomeUI = () => {
    const formatIncome = income.toLocaleString();
    return formatIncome;
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white p-6 shadow-default">
        <div>
          <span className="text-sm font-display font-medium">
            Total Monthly Income
          </span>
          <h4 className="text-title-md py-2 font-bold font-display text-purple-black">
            ₦{formatIncomeUI()}
          </h4>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="font-display font-semibold text-purple-6">100%</span>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-purple-light">
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
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOne;
