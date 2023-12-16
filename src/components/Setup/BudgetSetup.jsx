import React from "react";
import { useFormik } from "formik";
import FilledBtn from "../Button/Filled-Button/FilledBtn";

function BudgetSetup({ onSubmit }) {
  //Formik
  const formik = useFormik({
    // Replace this with "" - empty string. This is custom cause all other options are disabled
    initialValues: { budgetrule: "50-30-20 Rule" },

    onSubmit: (values) => {
      console.log("budgetrule", values.budgetrule);
      onSubmit(values.budgetrule);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-full ">
        <div>
          <label
            htmlFor="budgetrule"
            className="mb-2.5 block font-display text-lg text-center font-semibold text-purple-dark"
          >
            Select a preferred budget rule
          </label>
          <div className="relative font-body font-medium mt-5 text-purple-7">
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
                name="budgetrule"
                id="budgetrule"
                value={formik.values.budgetrule}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="relative z-20 w-full text-center appearance-none font-medium font-display  border-purple-light rounded-lg border bg-transparent py-3 outline-none transition focus:border-purple-6 focus-visible:shadow-none active:border-purple-6"
              >
                <option value="50-30-20 Rule">The 50-30-20 Rule</option>
                <option disabled value="70-20-10 Rule">
                  70-20-10 Rule
                </option>
                <option disabled value="80-20 Rule">
                  80-20 Rule
                </option>
                <option disabled value="Zero-Based Budgeting">
                  Zero-Based Budgeting
                </option>
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
        <div>
          <p className="text-meta-1 py-2 font-body text-xs font-thin">
            {formik.errors.income &&
              formik.touched.income &&
              formik.errors.income}
          </p>
        </div>
        <div className="mt-5">
          <FilledBtn buttonText={"PROCEED"} type={"submit"} />
        </div>
      </form>
    </>
  );
}

export default BudgetSetup;
