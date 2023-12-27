import React from "react";
import CardOne from "../../components/dashboard-components/CardOne";
import CardTwo from "../../components/dashboard-components/CardTwo";
import CardThree from "../../components/dashboard-components/CardThree";
import CardFour from "../../components/dashboard-components/CardFour";
import ChartOne from "../../components/dashboard-components/ChartOne";
import ChartTwo from "../../components/dashboard-components/ChartTwo";

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-12 xl:col-span-8"></div>
      </div>
    </>
  );
}

export default Dashboard;
