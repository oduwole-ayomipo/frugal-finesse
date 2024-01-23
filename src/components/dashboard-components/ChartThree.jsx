import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const getRandomData = () => {
  return Array.from({ length: 52 }, () => Math.floor(Math.random() * 91));
};

const options = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  chart: {
    fontFamily: 'Montserrat, "sans-serif"',
    height: 250,
    type: "heatmap",
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
  dataLabels: {
    enabled: false,
  },
  colors: ["#AC8BEE"],
  title: {
    text: " ",
  },
};
function ChartThree() {
  const [state, setState] = useState({
    series: [
      {
        name: "Sun",
        data: getRandomData(),
      },
      {
        name: "Sat",
        data: getRandomData(),
      },
      {
        name: "Fri",
        data: getRandomData(),
      },
      {
        name: "Thur",
        data: getRandomData(),
      },
      {
        name: "Wed",
        data: getRandomData(),
      },
      {
        name: "Tue",
        data: getRandomData(),
      },
      {
        name: "Mon",
        data: getRandomData(),
      },
    ],
  });

  return (
    <div
      className="rounded-sm border border-stroke bg-white p-3 shadow-default "
      id="ChartTwo"
    >
      <ReactApexChart
        options={options}
        series={state.series}
        type="heatmap"
        height={250}
      />
    </div>
  );
}

export default ChartThree;
