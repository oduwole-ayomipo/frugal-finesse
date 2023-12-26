import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import SetupLayout from "../../pages/sign-up/Setup";

function SignupWarning({ setSignupWarning }) {
  const [currentForm, setCurrentForm] = useState(0);
  useEffect(() => {
    // Set a timer to change the current form after 3 seconds
    const timerId = setTimeout(() => {
      setCurrentForm(1);
      setSignupWarning(false);
    }, 3000);

    // Clear the timer if the component is unmounted before it expires
    return () => clearTimeout(timerId);
  });

  return (
    <>
      {currentForm === 0 && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Loading />
          <p className="text-center font-display text-purple-7 text-lg font-semibold p-4">
            Just one more step. Your account is almost ready! <br />
            <span className=" text-meta-1 font-bold">
              Please do not close the browser...
            </span>
          </p>
        </div>
      )}
      {currentForm === 1 && <SetupLayout />}
    </>
  );
}

export default SignupWarning;
