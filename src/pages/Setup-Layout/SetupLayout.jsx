import React, { useState } from "react";
import PreferredName from "../../components/Setup/PreferredName";
import IncomeForm from "../../components/Setup/IncomeForm";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import BudgetSetup from "../../components/Setup/BudgetSetup";
import Dashboard from "../Dashbord/Dashboard";

function SetupLayout() {
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState({
    PreferredNameForm: {},
    IncomeSetup: {},
    BudgetSetup: {},
  });

  const handlePreferredNameFormSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      PreferredNameForm: data,
    }));
    setCurrentForm(2);
  };

  const handleIncomeFormSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      IncomeSetup: data,
    }));
    setCurrentForm(3);
  };

  const handleDisplayDashboard = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      BudgetSetup: data,
    }));
    setCurrentForm(4);
  };
  return (
    <>
      <div className="w-full flex items-center min-h-screen mx-auto max-w-[30rem]">
        <div className="w-full flex items-center justify-center m-auto p-6 gap-8 flex-col min-w-[30rem]">
          <div className="p-3">
            <img src={lgLogo} alt="Frugal Finesse" />
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            {currentForm === 1 && (
              <PreferredName onSubmit={handlePreferredNameFormSubmit} />
            )}
            {currentForm === 2 && (
              <IncomeForm onSubmit={handleIncomeFormSubmit} />
            )}
            {currentForm === 3 && (
              <BudgetSetup onSubmit={handleDisplayDashboard} />
            )}
            {currentForm === 4 && <Dashboard formData={formData} />}

            <div className="flex w-full items-center justify-between">
              <div className="w-[32%] rounded h-1 bg-purple-6"></div>
              <div className="w-[32%] rounded h-1 bg-purple-light"></div>
              <div className="w-[32%] rounded h-1 bg-purple-light"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetupLayout;
