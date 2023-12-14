import React from "react";
import { Link } from "react-router-dom";
import FilledBtn from "../../components/Button/Filled-Button/FilledBtn";
import lgLogo from "../../images/svg-logo/lgLogo.svg";

function PreferredNameSetup() {
  return (
    <>
      <div className="w-full flex items-center min-h-screen mx-auto max-w-[30rem]">
        <div className="w-full flex items-center justify-center m-auto p-6 gap-8 flex-col min-w-[30rem]">
          <div className="p-3">
            <img src={lgLogo} alt="Frugal Finesse" />
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            <form action="" className="w-full ">
              <div className="w-full">
                <label className="mb-2.5 block font-display text-lg text-center font-semibold text-purple-dark">
                  How shall we call you?{" "}
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your preferred name"
                  className="w-full text-center rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                />
              </div>
              <div className="mt-5">
                <Link to="/frugal-finesse/basic-setup-2">
                  <FilledBtn buttonText={"Next"} type={"submit"} />
                </Link>
              </div>
            </form>

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

export default PreferredNameSetup;
