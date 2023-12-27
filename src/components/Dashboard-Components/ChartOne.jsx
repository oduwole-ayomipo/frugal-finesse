import React from "react";

function ChartOne() {
  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default xl:col-span-4">
        <div className="mb-4 justify-between gap-4 sm:flex">
          <h4 className="text-base font-display font-semibold">
            Budgeting Progress
          </h4>
        </div>

        <div>
          <div id="chartTwo" className="-ml-5 h-[350px] mb-9"></div>
        </div>
      </div>
    </>
  );
}

export default ChartOne;
