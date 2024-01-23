import React from "react";
import "../../App.css";
import ReactApexChart from "react-apexcharts";

function SavingsCard({
  description,
  category,
  totalAmount,
  savingsAmount,
  id,
  openDeleteWarning,
}) {
  const state = {
    series: [
      savingsAmount >= totalAmount
        ? 100
        : Math.floor((savingsAmount / totalAmount) * 100),
    ],
    options: {
      chart: {
        type: "radialBar",
      },
      colors: ["#AC8BEE"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Montserrat, sans-serif",
              color: "#3F3649",
              offsetY: 10,
            },
          },
        },
      },
      labels: [], // Set labels to an empty array to hide them
    },
  };

  //convert the amount display
  const formatAmount = (amount) => {
    const formattedAmount = amount.toLocaleString();
    return formattedAmount;
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default mb-7">
        <div className="border-b flex justify-between border-stroke py-4 px-5">
          <span className=" hidden">{id}</span>
          <h3 className="font-medium text-purple-dark font-display">
            {description}
          </h3>
          <p className="inline-flex items-center capitalize rounded-full font-body bg-purple-3 bg-opacity-10 py-1 px-3 text-xs font-medium text-purple-4">
            {category}
          </p>
        </div>
        <div className="p-5">
          <div className="flex justify-center flex-col items-center w-full mb-5.5">
            <p className="font-display font-bold p-1 text-meta-1 text-2xl">
              ₦{formatAmount(savingsAmount)}
            </p>
            <p className="font-display font-medium text-sm opacity-40">
              / ₦{formatAmount(totalAmount)}
            </p>
          </div>
          <div className="relative flex items-center justify-center  w-full rounded border border-purple-6 bg-[#F9F6FF] border-dashed border-primary p-3">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="radialBar"
              height={150}
            />
          </div>
        </div>
        <button
          className=" bg-purple-6 text-white p-2 w-full text-right font-light font-display text-xs"
          onClick={() => openDeleteWarning(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default SavingsCard;
