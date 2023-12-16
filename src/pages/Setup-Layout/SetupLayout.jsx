import React, { useState } from "react";
import UsernameSetup from "../../components/Setup/UsernameSetup";
import IncomeSetup from "../../components/Setup/IncomeSetup";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import BudgetSetup from "../../components/Setup/BudgetSetup";
import Dashboard from "../Dashbord/Dashboard";

function SetupLayout() {
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState({
    UsernameSetup: "",
    IncomeSetup: "",
    BudgetSetup: "",
  });

  const totalSteps = 4;

  const handleUsernameSetupSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      UsernameSetup: data,
    }));
    setCurrentForm(2);
  };

  const handleIncomeSetupSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      IncomeSetup: data,
    }));
    setCurrentForm(3);
  };

  const handleBudgetSetupSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      BudgetSetup: data,
    }));
    setCurrentForm(4);
  };

  const renderProgressBar = () => {
    const progress = (currentForm / totalSteps) * 100;
    return (
      <div className="w-full ease-in-out bg-purple-light h-1 rounded">
        <div
          className=" bg-purple-dark h-full rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
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
              <UsernameSetup onSubmit={handleUsernameSetupSubmit} />
            )}
            {currentForm === 2 && (
              <IncomeSetup onSubmit={handleIncomeSetupSubmit} />
            )}
            {currentForm === 3 && (
              <BudgetSetup onSubmit={handleBudgetSetupSubmit} />
            )}
            {currentForm === 4 && <Dashboard formData={formData} />}

            {renderProgressBar()}
          </div>
        </div>
      </div>
    </>
  );
}

export default SetupLayout;
