import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import FilledBtn from "../../components/button/FilledBtn";
import TextBtn from "../../components/button/TextBtn";
import OutlineBtn from "../../components/button/OutlineBtn";
import authImg from "../../images/svg-img/auth.svg";
import { AuthContext } from "../../context/AuthContext";
import Setup from "./Setup";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signUpSuccessful, setSignUpSuccessful] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullname: "",
      confirm_password: "",
    },

    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(32, "Full Name must be maximum of 32 Characters")
        .min(5, "Full Name must be minimum of 5 Characters"),
      email: Yup.string().email("Please provide a valid email"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
      confirm_password: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password does not match"
      ),
    }),

    onSubmit: async (values) => {
      try {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        // Signed up
        const user = userCredential.user;

        await new Promise((resolve) => setTimeout(resolve, 3000));
        // A delay of at least 3 seconds using a promise and setTimeout

        dispatch({ type: "SIGNUP", payload: user });
      } catch (error) {
        alert("Wrong Email or Password. Try Again!");
      } finally {
        setLoading(false);
        setSignUpSuccessful(true);
      }
    },
  });

  return (
    <>
      <div className="mx-auto max-w-7xl shadow-default rounded-sm bg-white text-purple-light">
        {signUpSuccessful ? (
          <Setup />
        ) : (
          <div className="flex items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="py-17.5 px-26 text-center">
                <Link className="mb-5.5 inline-block" to="/">
                  <img src={lgLogo} alt="Logo" />
                </Link>

                <p className="2xl:px-20 font-body text-purple-6">
                  Your number one budgeting application. Create an account let's
                  get started...
                </p>

                <span className="mt-15 inline-block">
                  <img src={authImg} alt="auth" />
                </span>
              </div>
            </div>

            <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <span className="mb-1.5 block font-medium font-body text-purple-6">
                  Get started
                </span>
                <h2 className="mb-9 text-2xl font-display font-extrabold text-purple-dark  sm:text-title-xl2">
                  Sign In to Frugal Finesse
                </h2>

                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                      Full Name{" "}
                      <span className="text-meta-1 font-body font-thin">*</span>
                    </label>
                    <div className="relative font-body font-medium text-purple-6">
                      <input
                        name="fullname"
                        id="fullname"
                        required
                        type="text"
                        placeholder="John Doe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullname}
                        className="w-full rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                      />

                      <span className="absolute right-4 top-4 text-purple-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <g
                            opacity="0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinejoin="round"
                              d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                            />
                            <circle cx="12" cy="7" r="3" />
                          </g>
                        </svg>
                      </span>
                    </div>
                    <p className="text-meta-1 py-2 font-body text-xs font-thin">
                      {formik.errors.fullname &&
                        formik.touched.fullname &&
                        formik.errors.fullname}
                    </p>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                      Email
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

                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black">
                      Password{" "}
                      <span className="text-meta-1 font-body font-thin">*</span>
                    </label>
                    <div className="relative font-body font-medium text-purple-6">
                      <input
                        name="password"
                        id="password"
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className="w-full rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                      />

                      <span
                        className="absolute right-4 top-4 text-purple-6"
                        onClick={togglePassword}
                      >
                        {" "}
                        {showPassword ? (
                          <svg
                            opacity="0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            opacity="0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                    <p className="text-meta-1 py-2 font-body text-xs font-thin">
                      {formik.errors.password &&
                        formik.touched.password &&
                        formik.errors.password}
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black">
                      Re-type Password{" "}
                      <span className="text-meta-1 font-body font-thin">*</span>
                    </label>
                    <div className="relative font-body font-medium text-purple-6">
                      <input
                        name="confirm_password"
                        id="confirm_password"
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirm_password}
                        className="w-full rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                      />

                      <span
                        onClick={toggleConfirmPassword}
                        className="absolute right-4 top-4 text-purple-6"
                      >
                        {showConfirmPassword ? (
                          <svg
                            opacity="0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            opacity="0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                    <p className="text-meta-1 py-2 font-body text-xs font-thin">
                      {formik.errors.confirm_password &&
                        formik.touched.confirm_password &&
                        formik.errors.confirm_password}
                    </p>
                  </div>

                  <div className="mb-5">
                    <FilledBtn
                      buttonText={loading ? "Signing Up..." : "Sign Up"}
                      disabled={loading}
                      type={"submit"}
                    />
                  </div>

                  <OutlineBtn
                    buttonText={
                      <span className="flex gap-5 items-center justify-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_191_13499)">
                            <path
                              d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                              fill="#4285F4"
                            />
                            <path
                              d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                              fill="#34A853"
                            />
                            <path
                              d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                              fill="#EB4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_191_13499">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Sign In with Google
                      </span>
                    }
                  />

                  <div className="mt-6 text-center">
                    <Link to="/login" className="text-primary">
                      <TextBtn
                        buttonText={"Already have an accout? Login"}
                        type={"button"}
                      />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SignUp;
