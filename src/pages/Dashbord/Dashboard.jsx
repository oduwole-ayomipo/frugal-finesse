import React from "react";

function Dashboard({ formData }) {
  return (
    <div className="flex">
      <div className="m-24 mx-auto font-display text-lg font-semibold">
        <div>
          <p>{formData.UsernameSetup}</p>
          <p>{formData.IncomeSetup}</p>
          <p>{formData.BudgetSetup}</p>
        </div>
        Welcome to something that will eventually look like a dashboard!!!
      </div>
    </div>
  );
}

export default Dashboard;
