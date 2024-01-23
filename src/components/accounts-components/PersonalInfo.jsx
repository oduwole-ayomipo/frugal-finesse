import React, { useContext, useEffect, useState } from "react";
import FilledBtn from "../button/FilledBtn";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";

function PersonalInfo({ openUpdateModal }) {
  const { currentUser } = useContext(AuthContext);
  const [personalInfo, setPersonalInfo] = useState({});
  const [infoLoading, setInfoLoading] = useState(true);
  const [infoChanged, setInfoChanged] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const infoData = docSnap.data();
          setPersonalInfo(infoData);
          setInfoLoading(false);
        }
      } catch (err) {
        toast.error(err.code);
      }
    };
    fetchUserData();
  }, [currentUser.uid]);

  const formik = useFormik({
    initialValues: {
      fullname: personalInfo.fullname || "",
      email: personalInfo.email || "",
      username: personalInfo.username || "",
      income: personalInfo.income || "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Please provide a valid email"),
      fullname: Yup.string()
        .max(32, "Full Name must be maximum of 32 Characters")
        .min(5, "Full Name must be minimum of 5 Characters"),
      username: Yup.string().min(3, "Name must be more than 3 character"),
      income: Yup.string()
        .transform((values) => values.replace(/,/g, "")) // Remove commas before validation
        .matches(/^[0-9]+$/, "Provide a valid amount")
        .min(3, "Must be at least 6 digits"),
    }),

    onSubmit: (values) => {
      openUpdateModal(values);
    },
  });

  useEffect(() => {
    // Update Formik's initialValues when personalInfo is available
    if (!infoLoading) {
      formik.setValues({
        fullname: personalInfo.fullname,
        email: personalInfo.email,
        username: personalInfo.username,
        income: personalInfo.income,
      });
    }
    // eslint-disable-next-line
  }, [infoLoading, personalInfo, formik.setValues]);

  useEffect(() => {
    const checkInfoChanged = () => {
      if (infoLoading) {
        setInfoChanged(false);
      } else if (
        formik.values.fullname !== personalInfo.fullname ||
        formik.values.email !== personalInfo.email ||
        formik.values.username !== personalInfo.username ||
        parseFloat(formik.values.income) !== personalInfo.income
      ) {
        setInfoChanged(true);
      } else {
        setInfoChanged(false);
      }
    };

    checkInfoChanged(); // Call the function when needed

    // Any other dependencies for this useEffect
  }, [formik.values, infoLoading, personalInfo, setInfoChanged]);

  return (
    <>
      <div className="col-span-5 xl:col-span-3">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke py-4 px-7">
            <h3 className="font-medium text-purple-dark font-display">
              Update Personal Information
            </h3>
          </div>
          <div className="p-7">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-purple-dark font-display"
                    htmlFor="fullname"
                  >
                    Full Name
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <input
                      name="fullname"
                      id="fullname"
                      required
                      type="text"
                      placeholder={
                        infoLoading ? "Full Name" : personalInfo.fullname
                      }
                      value={formik.values.fullname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full rounded-lg border border-purple-light bg-transparent py-3 pl-4 pr-3 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />

                    <span className="absolute right-4 top-3 text-purple-6">
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

                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium font-display text-purple-dark"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <input
                      name="username"
                      id="username"
                      required
                      type="text"
                      placeholder={
                        infoLoading ? "Username" : personalInfo.username
                      }
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full rounded-lg border border-purple-light bg-transparent py-3 pl-4 pr-3 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />

                    <span className="absolute right-4 top-3 text-purple-6">
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
                </div>
                <p className="text-meta-1 py-2 font-body text-xs font-thin">
                  {formik.errors.username &&
                    formik.touched.username &&
                    formik.errors.username}
                </p>
              </div>

              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium font-display text-purple-dark"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative font-body font-medium text-purple-6">
                  <input
                    name="email"
                    id="email"
                    required
                    type="email"
                    placeholder={
                      infoLoading ? "Email Address" : personalInfo.email
                    }
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-lg border border-purple-light bg-transparent py-3 pl-4 pr-3 outline-none focus:border-purple-6 focus-visible:shadow-none"
                  />

                  <span className="absolute right-4 top-3 text-purple-6">
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

              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium font-display text-purple-dark"
                  htmlFor="income"
                >
                  Income
                </label>
                <div className="relative font-body font-medium text-purple-6">
                  <span className="absolute left-4 top-3 text-purple-6">₦</span>
                  <input
                    name="income"
                    id="income"
                    required
                    type="text"
                    placeholder={infoLoading ? "Income" : personalInfo.income}
                    value={formik.values.income}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-lg border border-purple-light bg-transparent py-3 pl-8 pr-3 outline-none focus:border-purple-6 focus-visible:shadow-none"
                  />
                </div>
                <p className="text-meta-1 py-2 font-body text-xs font-thin">
                  {formik.errors.income &&
                    formik.touched.income &&
                    formik.errors.income}
                </p>
              </div>

              <div className="flex w-full items-center justify-end mb-5.5">
                <Link
                  className="font-display font-medium text-meta-1 text-base py-1 hover:font-semibold"
                  data-testid="password-reset"
                  to="/password-reset"
                >
                  Reset Password?
                </Link>
              </div>
              <div className="flex justify-end gap-4.5">
                <FilledBtn
                  disabled={!infoChanged}
                  buttonText={"Save"}
                  type={"submit"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
