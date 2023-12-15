import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FilledBtn from "../Button/Filled-Button/FilledBtn";

function PreferredName({ onSubmit }) {
  //Formik
  const formik = useFormik({
    initialValues: { username: "" },

    onSubmit: (values) => {
      //onsubmit from formik
      onSubmit(values);
      console.log("name is", values.username);
    },

    validationSchema: Yup.object({
      username: Yup.string().min(
        3,
        "Preferred name must be more than 3 character"
      ),
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-full ">
        <div className="w-full">
          <label
            htmlFor="username"
            className="mb-2.5 block font-display text-lg text-center font-semibold text-purple-dark"
          >
            How shall we call you?
          </label>
          <input
            required
            name="username"
            type="text"
            placeholder="Enter your preferred name"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="w-full text-center rounded-lg border border-purple-light  py-4 pl-6 pr-10 outline-none bg-white focus:border-purple-6 focus-visible:shadow-none"
          />
        </div>
        <div>
          <p className="text-meta-1 py-2 font-body text-xs font-thin">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </p>
        </div>
        <div className="mt-5">
          <FilledBtn buttonText={"Next"} type={"submit"} />
        </div>
      </form>
    </>
  );
}

export default PreferredName;
