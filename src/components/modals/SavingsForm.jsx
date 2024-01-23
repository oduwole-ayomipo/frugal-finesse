import { Dialog } from "@headlessui/react";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import FilledBtn from "../button/FilledBtn";
import { db } from "../../firebase";
import { toast } from "react-toastify";

function SavingsForm({ isOpen, setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  //Formik
  const formik = useFormik({
    initialValues: {
      amount: "",
      category: "income",
      description: "",
      userId: "",
    },

    onSubmit: async (values, { resetForm }) => {
      const handleCreateSavingGoal = async () => {
        try {
          setLoading(true);

          // Check if a savings goal with the same description already exists
          const existingSavingsQuery = query(
            collection(db, "savings"),
            where("userId", "==", currentUser.uid),
            where("description", "==", values.description)
          );

          const existingSavingsSnapshot = await getDocs(existingSavingsQuery);

          if (!existingSavingsSnapshot.empty) {
            // A savings goal with the same description already exists
            toast.error("Savings goal already exists!");
          } else {
            // No existing savings goal found, proceed with adding a new one
            await addDoc(
              collection(db, "savings"),
              {
                userId: currentUser.uid,
                category: values.category,
                description: values.description,
                savingsAmount: 0,
                totalAmount: parseFloat(values.amount.replace(/[, ]/g, "")),
                timeStamp: serverTimestamp(),
              },
              { merge: true }
            );

            toast.success("Savings goal created!");
          }
        } catch (err) {
          toast.error(err.code);
        } finally {
          setIsOpen(false);
          resetForm();
          setLoading(false);
        }
      };

      handleCreateSavingGoal();
    },

    validationSchema: Yup.object({
      amount: Yup.string()
        .transform((values) => values.replace(/,/g, "")) // Remove commas before validation
        .matches(/^[0-9]+$/, "Provide a valid amount")
        .min(3, "Must be at least 3 digit"),
      description: Yup.string().max(17, "minimum of 17 char"),
    }),
  });
  return (
    <>
      <Dialog
        className="bg-purple-light relative z-50"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-9999 w-screen overflow-y-auto">
          <Dialog.Panel className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="rounded-sm border border-stroke bg-white shadow-default">
                <div className=" flex w-full justify-between items-center border-b border-stroke py-4 px-6.5 ">
                  <h3 className="font-semibold text-purple-dark font-display">
                    Create a saving goal
                  </h3>
                  <span
                    aria-roledescription="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 cursor-pointer"
                  >
                    <svg
                      aria-roledescription="button"
                      onClick={formik.resetForm}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      opacity="0.5"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="px-6.5 py-3">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block font-medium text-purple-dark font-display">
                          Target
                        </label>
                        <div className="relative z-20 bg-white">
                          <span className=" font-display  font-semibold text-purple-dark text-lg opacity-65 absolute top-1/2 left-4 z-30 -translate-y-1/2">
                            ₦
                          </span>
                          <input
                            required
                            name="amount"
                            type="text"
                            placeholder="0.00"
                            value={formik.values.amount}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className="w-full font-body text-purple-8 rounded border-[1.5px] border-stroke bg-transparent py-3 px-12 font-medium outline-none transition focus:border-purple-2 active:border-purple-light"
                          />
                        </div>
                        <p className="text-meta-1 py-1 font-body text-xs font-thin">
                          {formik.errors.amount &&
                            formik.touched.amount &&
                            formik.errors.amount}
                        </p>
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block font-medium text-purple-dark font-display">
                          Category
                        </label>
                        <div className="relative z-20 bg-white">
                          <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              opacity="0.65"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#3F3649"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                              />
                            </svg>
                          </span>
                          <select
                            required
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="relative font-body  text-purple-dark z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-purple-2 active:border-purple-light"
                          >
                            <option value="income">Income</option>
                            <option value="needs">Needs</option>
                            <option value="wants">Wants</option>
                            <option value="savings">Savings</option>
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

                    <div className="mb-4.5">
                      <label className="mb-2.5 block font-medium text-purple-dark font-display">
                        Plan Title
                      </label>
                      <input
                        required
                        name="description"
                        type="text"
                        placeholder="Grant from Jane"
                        value={formik.values.description}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className="w-full font-body text-purple-8 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-purple-2 active:border-purple-light"
                      />
                    </div>
                    <p className="text-meta-1 py-1 font-body text-xs font-thin">
                      {formik.errors.description &&
                        formik.touched.description &&
                        formik.errors.description}
                    </p>
                  </div>

                  <div className="px-4 pb-4 sm:px-6">
                    <FilledBtn
                      disabled={loading}
                      buttonText={loading ? "Creating" : "Create"}
                      type={"submit"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default SavingsForm;
