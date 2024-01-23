import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";

function VerificationBanner() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const verificationEmail = () => {
    setLoading(true);
    sendEmailVerification(auth.currentUser).then(async () => {
      // Email verification sent!
      toast.success("Email verification sent!");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.info("Redirecting to login");
      await new Promise((resolve) => setTimeout(resolve, 3000));

      navigate("/login");
      setLoading(false);
    });
  };
  return (
    <>
      <div
        className={`${
          loading ? "cursor-not-allowed" : "cursor-pointer"
        } bg-meta-1 flex gap-1 rounded-sm border border-stroke  px-3 py-4 shadow-default sm:px-7.5`}
        aria-roledescription="button"
        onClick={verificationEmail}
        aria-disabled={!loading}
      >
        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
            />
          </svg>
        </span>
        <h3 className="font-sm text-white font-display">
          In order to protect your account and prevent unauthorized access
          kindly verify your email address here
        </h3>
      </div>
    </>
  );
}

export default VerificationBanner;
