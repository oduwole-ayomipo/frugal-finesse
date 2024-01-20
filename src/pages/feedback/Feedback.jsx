import React from "react";
import Maintenance from "../../components/maintenace/Maintenance";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FilledBtn from "../../components/button/FilledBtn";

function Feedback() {
  return (
    <>
      <Breadcrumbs pageName={"Feedback"} />
      <div className="rounded-sm mb-5.5 border border-stroke bg-white px-5 py-6 shadow-default sm:px-7.5">
        <h3 className="font-display text-purple-7 text-sm font-semibold pb-4 mb-3 md:mb-5.5 lg:text-lg">
          Rate your experience with Frugal Finesse
          <span className="text-meta-1 font-body text-lg font-medium"> *</span>
        </h3>
        <div className="flex w-full flex-wrap items-center justify-start sm:gap-8">
          <div
            aria-roledescription="button"
            className="sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white"
          >
            1
          </div>
          <div
            aria-roledescription="button"
            className="sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white"
          >
            2
          </div>
          <div
            aria-roledescription="button"
            className="sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white"
          >
            3
          </div>
          <div
            aria-roledescription="button"
            className="sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white"
          >
            4
          </div>
          <div
            aria-roledescription="button"
            className="sm:py-3 sm:px-6 py-1 px-3 mr-1 mb-1 rounded-md border-purple-6 border cursor-pointer font-semibold text-purple-dark font-display text-sm lg:border-2 lg:text-base hover:bg-purple-6 hover:text-white"
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
          <span className="text-meta-1 font-body text-lg font-medium"> *</span>
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
            /*   onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message} */
            className="w-full rounded border border-purple-light bg-transparent py-3 px-5 font-medium outline-none transition focus:border-purple-6 focus-visible:shadow-none active:border-primary disabled:cursor-default"
          ></textarea>
        </div>
        <p className="text-meta-1 py-2 font-body text-xs font-thin">
          {/*  {formik.errors.message &&
                      formik.touched.message &&
                      formik.errors.message} */}
        </p>

        <div className="mb-5.5 ">
          <FilledBtn buttonText={"Submit"} type={"submit"} />
        </div>
      </div>
    </>
  );
}

export default Feedback;
