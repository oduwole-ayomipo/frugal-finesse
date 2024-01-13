import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import FilledBtn from "../../components/button/FilledBtn";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

function PasswordReset() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Please provide a valid email"),
    }),

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        await sendPasswordResetEmail(auth, values.email);
        alert("Password reset email sent.");
        console.log(values.email);
        resetForm();
      } catch (error) {
        alert(error.code);
      } finally {
        setLoading(false);
        navigate("/login");
      }
    },
  });

  return (
    <>
      <div className="w-full rounded-sm flex flex-col gap-9 p-4 justify-center h-screen bg-white text-purple-light mx-auto max-w-3xl shadow-default lg:p-10">
        <div className="flex items-center justify-center flex-col">
          <div>
            <Link className="mb-2 inline-block" to="/">
              <img src={lgLogo} alt="Logo" />
            </Link>
          </div>
          <div>
            <span className="px-3 py-2 text-center block text-sm font-medium font-display text-purple-6 lg:text-base">
              <strong>Forgot your password? </strong> We'll fix it for you,
              enter the email associated with your account and a password reset
              link would be sent to you!
            </span>
          </div>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2.5 hidden font-display font-semibold text-purple-dark"
              >
                Email Address
                <span className="text-meta-1 font-body font-thin">*</span>
              </label>
              <div className="relative font-body font-medium text-purple-6">
                <input
                  name="email"
                  id="email"
                  required
                  type="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                />

                <span className="absolute right-4 top-4 text-purple-6">
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              </div>
              <p className="text-meta-1 py-2 font-body text-xs font-thin">
                {formik.errors.email &&
                  formik.touched.email &&
                  formik.errors.email}
              </p>
            </div>

            <div className="mb-5">
              <FilledBtn
                disabled={loading}
                buttonText={loading ? "Reseting..." : "Reset"}
                type={"submit"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PasswordReset;
