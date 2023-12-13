import React from "react";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import FilledBtn from "../../components/Button/Filled-Button/FilledBtn";
import { Link } from "react-router-dom";

function IncomeSetup() {
  return (
    <>
      <div className="w-full flex items-center min-h-screen mx-auto max-w-[30rem]">
        <div className="w-full flex items-center justify-center m-auto p-6 gap-8 flex-col min-w-[30rem]">
          <div className="p-3">
            <img src={lgLogo} alt="Frugal Finesse" />
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            <form action="" className="w-full ">
              <div>
                <label className="mb-2.5 block font-display text-lg text-center font-semibold text-purple-dark">
                  What is your total income? <br />
                  <span className="text-meta-1 font-body text-xs font-thin">
                    Be as precise as possible.
                  </span>
                </label>
                <div className="relative font-body font-medium text-purple-6">
                  <span className="absolute left-4 top-4 text-purple-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        opacity="0.8"
                        fill="#ac8bee"
                        d="M4 9h2V3h2l3.42 6H16V3h2v6h2v2h-2v2h2v2h-2v6h-2l-3.43-6H8v6H6v-6H4v-2h2v-2H4zm4 0h1.13L8 7.03zm0 2v2h3.42l-1.14-2zm8 6v-2h-1.15zm-3.44-6l1.15 2H16v-2z"
                      />
                    </svg>
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="Enter your Income"
                    className="w-full rounded-lg border border-purple-light text-center bg-transparent py-4 pr-6 pl-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                  />
                </div>

                <div className="mt-5">
                  <div className="relative z-20 bg-white">
                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                      >
                        <path
                          opacity="0.8"
                          fill="#AC8BEE"
                          d="M10.6 9c-.4-.1-.8-.3-1.1-.6c-.3-.1-.4-.4-.4-.6c0-.2.1-.5.3-.6c.3-.2.6-.4.9-.3c.6 0 1.1.3 1.4.7l.9-1.2c-.3-.3-.6-.5-.9-.7c-.3-.2-.7-.3-1.1-.3V4H9.4v1.4c-.5.1-1 .4-1.4.8c-.4.5-.7 1.1-.6 1.7c0 .6.2 1.2.6 1.6c.5.5 1.2.8 1.8 1.1c.3.1.7.3 1 .5c.2.2.3.5.3.8c0 .3-.1.6-.3.9c-.3.3-.7.4-1 .4c-.4 0-.9-.1-1.2-.4c-.3-.2-.6-.5-.8-.8l-1 1.1c.3.4.6.7 1 1c.5.3 1.1.6 1.7.6V16h1.1v-1.5c.6-.1 1.1-.4 1.5-.8c.5-.5.8-1.3.8-2c0-.6-.2-1.3-.7-1.7c-.5-.5-1-.8-1.6-1M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 14.9c-3.8 0-6.9-3.1-6.9-6.9S6.2 3.1 10 3.1s6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9"
                        />
                      </svg>
                    </span>
                    <select
                      required
                      className="relative z-20 w-full text-center appearance-none font-medium font-display border-stroke border-purple-light rounded border border-stroke bg-transparent py-3 outline-none transition focus:border-purple-6 focus-visible:shadow-none active:border-purple-6"
                    >
                      <option value="">Bi-Weekly</option>
                      <option value="">Monthly</option>
                      <option value="">Quaterly</option>
                      <option value="">Annually</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <Link to="/frugal-finesse/basic-setup-3">
                  <FilledBtn buttonText={"Next"} type={"submit"} />
                </Link>
              </div>
            </form>

            <div className="flex w-full items-center justify-between">
              <div className="w-[32%] rounded h-1 bg-purple-light"></div>
              <div className="w-[32%] rounded h-1 bg-purple-6"></div>
              <div className="w-[32%] rounded h-1 bg-purple-light"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomeSetup;
