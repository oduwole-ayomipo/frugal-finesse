import React from "react";

function ChartOne({
  needs,
  wants,
  savings,
  needsCurrentAmount,
  wantsCurrentAmount,
  savingsCurrentAmount,
}) {
  const formatAmount = (amount) => {
    const formattedAmount = amount.toLocaleString();
    return formattedAmount;
  };

  const progressBar = (expenseType, currentAmount) => {
    const progress = (currentAmount / expenseType) * 100;

    return (
      <div className="w-full ease-in-out bg-purple-light h-3 rounded">
        <div
          className=" bg-purple-6 h-full rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };
  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default xl:col-span-4">
        <div className="mb-4 justify-between gap-4 sm:flex">
          <h4 className="text-lg font-display font-semibold">
            Budget Progress
          </h4>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="my-2 flex gap-2 flex-col">
            <h3 className="font-display text-purple-dark text-sm font-medium">
              Needs Budget
            </h3>
            {progressBar(needs, needsCurrentAmount)}
            <div className="flex justify-between items-center w-full">
              <p className="font-display font-medium text-sm">
                ₦{formatAmount(needsCurrentAmount)} /
              </p>
              <p className="font-display font-medium text-sm">
                ₦{needs ? formatAmount(needs) : formatAmount(0)}
              </p>
            </div>
          </div>

          <div className="my-2 flex gap-2 flex-col">
            <h3 className="font-display text-purple-dark text-sm font-medium">
              Wants Budget
            </h3>
            {progressBar(wants, wantsCurrentAmount)}
            <div className="flex justify-between items-center w-full">
              <p className="font-display font-medium text-sm">
                ₦{formatAmount(wantsCurrentAmount)} /
              </p>
              <p className="font-display font-medium text-sm">
                ₦{wants ? formatAmount(wants) : formatAmount(0)}
              </p>
            </div>
          </div>

          <div className="my-2 flex gap-2 flex-col">
            <h3 className="font-display text-purple-dark text-sm font-medium">
              Savings Budget
            </h3>
            {progressBar(savings, savingsCurrentAmount)}
            <div className="flex justify-between items-center w-full">
              <p className="font-display font-medium text-sm">
                ₦{formatAmount(savingsCurrentAmount)} /
              </p>
              <p className="font-display font-medium text-sm">
                ₦{savings ? formatAmount(savings) : formatAmount(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartOne;
