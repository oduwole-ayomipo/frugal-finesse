import React, { useContext, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FilledBtn from "../../components/button/FilledBtn";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

function Feedback() {
  const { currentUser } = useContext(AuthContext);
  const [rating, setRatings] = useState(0);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: currentUser.email,
      message: "",
    },

    validationSchema: Yup.object({
      message: Yup.string().min(10, "Message name must be above 10 letters"),
    }),

    onSubmit: async (values, { resetForm }) => {
      if (rating !== 0) {
        console.log(currentUser.emailVerified);
        setLoading(true);
        try {
          await addDoc(
            collection(db, "feedback"),
            {
              ...values,
              rating: rating,
            },
            { merge: true }
          );
          toast.success("Feedback successfully submitted!");
        } catch (err) {
          toast.error(err.code);
        } finally {
          resetForm();
          setLoading(false);
          setRatings(0);
        }
      } else {
        toast.error("Kindly give us a rating");
      }
    },
  });

  return (
    <>
      <>
        <Breadcrumbs pageName={"Feedback"} />
        <form onSubmit={formik.handleSubmit}>
          <div className="rounded-sm mb-5.5 border border-stroke bg-white px-5 py-6 shadow-default sm:px-7.5">
            <h3 className="font-display text-purple-7 text-sm font-semibold pb-4 mb-3 md:mb-5.5 lg:text-lg">
              Rate your experience with Frugal Finesse
              <span className="text-meta-1 font-body text-lg font-medium">
                {" "}
                *
              </span>
            </h3>
            <div className="flex w-full flex-wrap items-center justify-start sm:gap-8">
              <div
                aria-roledescription="button"
                onClick={() => setRatings(1)}
                className={`${
                  rating === 1 ? "bg-purple-6 text-white" : "bg-white"
                } sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white`}
              >
                1
              </div>
              <div
                aria-roledescription="button"
                onClick={() => setRatings(2)}
                className={`${
                  rating === 2 ? "bg-purple-6 text-white" : "bg-white"
                } sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white`}
              >
                2
              </div>
              <div
                aria-roledescription="button"
                onClick={() => setRatings(3)}
                className={`${
                  rating === 3 ? "bg-purple-6 text-white" : "bg-white"
                } sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white`}
              >
                3
              </div>
              <div
                aria-roledescription="button"
                onClick={() => setRatings(4)}
                className={`${
                  rating === 4 ? "bg-purple-6 text-white" : "bg-white"
                } sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white`}
              >
                4
              </div>
              <div
                aria-roledescription="button"
                onClick={() => setRatings(5)}
                className={`${
                  rating === 5 ? "bg-purple-6 text-white" : "bg-white"
                } sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white`}
              >
                5
              </div>
              <div className="hidden gap-2 items-center justify-center text-meta-1 font-semibold  sm:flex ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </span>
                <span className="font-display font-semibold  lg:text-lg">
                  stars
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-sm mb-5.5 border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
            <h3 className="font-display text-purple-7 text-sm font-semibold py-4 mb-3 lg:text-lg">
              What do you think we can improve on?
              <span className="text-meta-1 font-body text-lg font-medium">
                *
              </span>
            </h3>

            <label className="hidden mb-2.5 block font-display font-semibold text-purple-dark">
              Message
            </label>
            <div className="relative font-body font-medium text-purple-6">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Type your message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full rounded border border-purple-light bg-transparent py-3 px-5 font-medium outline-none transition focus:border-purple-6 focus-visible:shadow-none active:border-primary disabled:cursor-default"
              ></textarea>
            </div>
            <p className="text-meta-1 py-2 font-body text-xs font-thin">
              {formik.errors.message &&
                formik.touched.message &&
                formik.errors.message}
            </p>

            <div className="mb-5.5 ">
              <FilledBtn
                buttonText={!loading ? "Submit" : "Submitting"}
                type={"submit"}
                disabled={loading}
              />
            </div>
          </div>
        </form>
      </>
      <ToastContainer />
    </>
  );
}

export default Feedback;
