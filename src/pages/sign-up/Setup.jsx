import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsernameSetup from "../../components/setup/UsernameSetup";
import IncomeSetup from "../../components/setup/IncomeSetup";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import BudgetSetup from "../../components/setup/BudgetSetup";
import SignupWarning from "../../components/signup-warning/SignupWarning";
import { db } from "../../firebase";
import {
  doc,
  serverTimestamp,
  updateDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

function Setup() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [signupWarning, setSignupWarning] = useState(true);
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    income: 0,
    budgetRule: "",
  });

  useEffect(() => {
    if (currentForm === 4) {
      //add initial income transaction data to db
      const handleTranactionData = async () => {
        const transactionData = {
          userId: currentUser.uid,
          amount: formData.income,
          category: "income",
          description: "initial income",
          timeStamp: serverTimestamp(),
        };

        try {
          await addDoc(collection(db, "transaction"), {
            ...transactionData,
          });
        } catch (err) {
          toast.error(err.code);
          console.log(err);
        }
      };
      //update setup data in firestore db
      const handleSetupData = async () => {
        try {
          await updateDoc(doc(db, "users", currentUser.uid), {
            ...formData,
            timeStamp: serverTimestamp(),
          });
        } catch (err) {
          toast.err(err.code);
          console.log(err);
        } finally {
          navigate("/login");
        }
      };
      handleTranactionData();
      handleSetupData();
    }
  }, [currentUser, formData, currentForm, navigate]);

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
      budgetRule: data,
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
      {signupWarning || currentForm > 3 ? (
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

                {/*   {currentForm === 4 && handleSetupData() && navigate("/login")} */}

                {progressBar()}
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Setup;
