import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import FilledBtn from "../Button/Filled-Button/FilledBtn";

function IncomeForm({ onSubmit }) {
  //Formik
  const formik = useFormik({
    initialValues: { income: "", period: "Monthly" },

    onSubmit: (values) => {
      console.log("period", values.period);

      // Clean up the income value by removing commas and extra spaces
      const cleanedIncome = values.income.replace(/[, ]/g, "");
      console.log("income", cleanedIncome);
      onSubmit(cleanedIncome, values.period);
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
            What is your total income? <br />
            <span className="text-meta-1 font-body text-xs font-thin">
              Be as precise as possible.
            </span>
          </label>
          <div className="relative font-body font-medium text-purple-7">
            <span className="absolute left-4 top-4 text-base font-bold opacity-70 font-display">
              NGN
            </span>
            <div className="w-full">
              <input
                className="w-full rounded-lg border text-purple-6 border-purple-light bg-transparent py-4 pr-6 pl-20 outline-none focus:border-purple-6 focus-visible:shadow-none"
                required
                name="income"
                type="text"
                placeholder="Enter your Income"
                value={formik.values.income}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <div className="h-full absolute inset-y-0 right-4 flex items-center">
                <label htmlFor="period" className="sr-only">
                  Period
                </label>
                <select
                  required
                  id="period"
                  name="period"
                  value={formik.values.period}
                  onBlur={formik.onBlur}
                  onChange={formik.handleChange}
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2  outline-none ease-in-out  font-display opacity-70 capitalize focus:border-purple-6 active:border-purple-6 focus-visible:shadow-none sm:text-sm"
                >
                  <option>Monthly</option>
                  <option>Quaterly</option>
                  <option>Annually</option>
                  <option>Bi-weekly</option>
                </select>
              </div>
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

export default IncomeForm;
