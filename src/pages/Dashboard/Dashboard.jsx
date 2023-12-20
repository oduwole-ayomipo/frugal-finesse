import { useLocation } from "react-router-dom";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

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
    <div className="flex">
      <div className="m-24 mx-auto font-display text-lg font-semibold">
        <Breadcrumbs pageName={"Dashboard"} />
        <div>
          <p>{formData.UsernameSetup}</p>
          <p>{formatIncomeUI()}</p>
          <p>{formData.BudgetSetup}</p>
        </div>
        Welcome to something that will eventually look like a dashboard!!!
      </div>
    </div>
  );
}

export default Dashboard;
