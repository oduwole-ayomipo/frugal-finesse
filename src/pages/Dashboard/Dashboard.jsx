import { useLocation } from "react-router-dom";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardOne from "../../components/Dashboard-Components/CardOne";
import CardTwo from "../../components/Dashboard-Components/CardTwo";

function Dashboard() {
  const location = useLocation();
  const formData = location.state?.formData;

  const formatIncomeUI = () => {
    const income = parseFloat(formData.IncomeSetup);

    if (!isNaN(income)) {
      const formatIncome = income.toLocaleString();
      return formatIncome;
    } else {
      return formData.IncomeSetup;
    }
  };

  if (!formData) {
    return <h1>Kindly Login to have access to your dashboard</h1>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne Income={formatIncomeUI()} />
        <CardTwo Income={formData.IncomeSetup} />
        <CardOne Income={formatIncomeUI()} />
        <CardOne Income={formatIncomeUI()} />
      </div>
      {/* <div className="flex">
        <div className="m-24 mx-auto font-display text-lg font-semibold">
          <Breadcrumbs pageName={"Dashboard"} />
          <div>
            <p>{formData.UsernameSetup}</p>
            <p>{formData.BudgetSetup}</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;
