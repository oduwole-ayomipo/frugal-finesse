import React from "react";
import CardOne from "../../components/dashboard-components/CardOne";
import CardTwo from "../../components/dashboard-components/CardTwo";
import CardThree from "../../components/dashboard-components/CardThree";
import CardFour from "../../components/dashboard-components/CardFour";

function Dashboard() {
  /*   const formatIncomeUI = () => {
    const income = parseFloat(formData.IncomeSetup);

    if (!isNaN(income)) {
      const formatIncome = income.toLocaleString();
      return formatIncome;
    } else {
      return formData.IncomeSetup;
    }
  }; */

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
    </>
  );
}

export default Dashboard;
