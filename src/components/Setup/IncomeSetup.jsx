import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import FilledBtn from "../Button/Filled-Button/FilledBtn";

function IncomeSetup({ onSubmit }) {
  //Formik
  const formik = useFormik({
    initialValues: { income: "" },

    onSubmit: (values) => {
      // Clean up the income value by removing commas and extra spaces
      let cleanedIncome = parseFloat(values.income.replace(/[, ]/g, ""));
      console.log("income", cleanedIncome);
      onSubmit(cleanedIncome);
    },

    validationSchema: Yup.object({
      income: Yup.string()
        .transform((values) => values.replace(/,/g, "")) // Remove commas before validation
        .matches(/^[0-9]+$/, "Provide a valid amount")
        .min(6, "Must be at least 6 digits"),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-full ">
        <div>
          <label
            htmlFor="income"
            className="mb-2.5 block font-display text-lg text-center font-semibold text-purple-dark"
          >
            Precise Total Montly Income?{" "}
            <span className="text-meta-1 font-body font-thin">*</span>
          </label>
          <div className="relative font-body font-medium text-purple-7">
            <span className="absolute left-4 top-4 text-base font-bold opacity-70 font-display">
              NGN
            </span>
            <div className="w-full">
              <input
                className="w-full rounded-lg border text-center text-purple-6 border-purple-light bg-transparent py-4 pr-6 outline-none focus:border-purple-6 focus-visible:shadow-none"
                required
                name="income"
                type="text"
                placeholder="Monthly income after tax"
                value={formik.values.income}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
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

export default IncomeSetup;
