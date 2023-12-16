import React from "react";

function Dashboard({ formData }) {
  /* TL;DR

function onSubmit(values) {
    // Convert the string to a number
    const cleanedIncome = parseFloat(values.replace(/,/g, '')); // Remove existing commas, if any

    // Check if numericValue is a valid number
    if (!isNaN(cleanedIncome)) {
        let formattedIncome = cleanedIncome.toLocaleString();
        console.log(formattedIncome);
        //Update the ui with the formatted income value
    }
}

// Example usage
onSubmit("5,000,000");


*/

  const formatIncomeUI = () => {
    const income = parseFloat(formData.IncomeSetup);

    if (!isNaN(income)) {
      const formatIncome = income.toLocaleString();
      return formatIncome;
    } else {
      return formData.IncomeSetup;
    }
  };
  return (
    <div className="flex">
      <div className="m-24 mx-auto font-display text-lg font-semibold">
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
