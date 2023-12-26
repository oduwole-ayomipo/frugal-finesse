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
            className="mb-2.5 block font-display text-base text-center font-semibold text-purple-dark lg:text-lg"
          >
            Total Montly Income?
            <span className="text-meta-1 font-body font-thin">*</span>
          </label>
          <div className="relative font-body font-medium text-purple-7">
            <span className="absolute left-4 top-4 font-bold opacity-70 font-display text-xs lg:text-base">
              NGN
            </span>
            <div className="w-full">
              <input
                className="w-full rounded-lg text-xs border text-center text-purple-6 border-purple-light bg-transparent py-4 outline-none focus:border-purple-6 focus-visible:shadow-none lg:text-base"
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
          <p className="text-meta-1 py-1 font-body text-xs font-thin">
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

export default IncomeSetup;
