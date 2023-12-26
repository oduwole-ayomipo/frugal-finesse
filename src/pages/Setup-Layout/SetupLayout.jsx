import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsernameSetup from "../../components/Setup/UsernameSetup";
import IncomeSetup from "../../components/Setup/IncomeSetup";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import BudgetSetup from "../../components/Setup/BudgetSetup";
import SignupWarning from "../../components/SignUp-Warning/SignupWarning";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthContext";

function SetupLayout() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [signupWarning, setSignupWarning] = useState(true);
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    income: 0,
    budget: "",
  });

  //Add setup data to firestore db
  const handleSetupData = async () => {
    try {
      await setDoc(doc(db, "setupData", currentUser.uid), {
        username: formData.username,
        income: formData.income,
        budget: formData.budget,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleUsernameSetupSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      username: data,
    }));
    setCurrentForm(2);
  };

  const handleIncomeSetupSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      income: data,
    }));
    setCurrentForm(3);
  };

  const handleBudgetSetupSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      budget: data,
    }));
    setCurrentForm(4);
  };

  const progressBar = () => {
    const totalSteps = 3;
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
      {signupWarning ? (
        <SignupWarning setSignupWarning={setSignupWarning} />
      ) : (
        <div className="max-w-7xl shadow-default mx-auto">
          <div className="flex items-center min-h-screen mx-auto lg:w-1/2">
            <div className="w-full flex items-center justify-center m-auto gap-8 flex-col p-4 sm:p-12.5 xl:p-17.5">
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

                {currentForm === 4 &&
                  handleSetupData() &&
                  navigate("/dashboard")}

                {progressBar()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SetupLayout;
