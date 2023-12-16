import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import FilledBtn from "../../components/Button/Filled-Button/FilledBtn";
import authImg from "../../images/svg-img/auth.svg";

function Contact() {
  const formik = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log("contact data", values);
    },
    validationSchema: Yup.object({
      Firstname: Yup.string().min(3, "First name must be above 3 letters"),
      Lastname: Yup.string().min(3, "Last name must be above 3 letters"),
      email: Yup.string().email("Please provide a valid email"),
      subject: Yup.string().min(10, "Subject name must be above 10 letters"),
      message: Yup.string().min(10, "Message name must be above 10 letters"),
    }),
  });

  return (
    <>
      <div className="w-full rounded-sm bg-white text-purple-light">
        <div className="flex items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/frugal-finesse">
                <img src={lgLogo} alt="Logo" />
              </Link>

              <p className="2xl:px-20 font-body text-purple-6">
                Feedback, Reccommendation, Queries... We'd love to hear from
                you!
              </p>

              <span className="mt-15 inline-block">
                <img src={authImg} alt="auth" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium font-body text-purple-6">
                Send us a message
              </span>
              <h2 className="mb-9 text-2xl font-display font-extrabold text-purple-dark  sm:text-title-xl2">
                Contact Us
              </h2>

              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row font-body font-medium text-purple-6">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                      First name{" "}
                      <span className="text-meta-1 font-body font-thin">*</span>
                    </label>
                    <input
                      id="Firstname"
                      name="Firstname"
                      required
                      type="text"
                      placeholder="Enter your first name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Firstname}
                      className="w-full rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />
                    <p className="text-meta-1 py-2 font-body text-xs font-thin">
                      {formik.errors.Firstname &&
                        formik.touched.Firstname &&
                        formik.errors.Firstname}
                    </p>
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                      Last name{" "}
                      <span className="text-meta-1 font-body font-thin">*</span>
                    </label>
                    <input
                      id="Lastname"
                      name="Lastname"
                      type="text"
                      required
                      placeholder="Enter your last name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Lastname}
                      className="w-full rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />
                    <p className="text-meta-1 py-2 font-body text-xs font-thin">
                      {formik.errors.Lastname &&
                        formik.touched.Lastname &&
                        formik.errors.Lastname}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                    Email{" "}
                    <span className="text-meta-1 font-body font-thin">*</span>
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="Enter your email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="w-full rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />
                    <p className="text-meta-1 py-2 font-body text-xs font-thin">
                      {formik.errors.email &&
                        formik.touched.email &&
                        formik.errors.email}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                    Subject{" "}
                    <span className="text-meta-1 font-body font-thin">*</span>
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <input
                      id="subject"
                      name="subject"
                      required
                      type="text"
                      placeholder="Message Subject"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.subject}
                      className="w-full rounded-lg border border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />
                    <p className="text-meta-1 py-2 font-body text-xs font-thin">
                      {formik.errors.subject &&
                        formik.touched.subject &&
                        formik.errors.subject}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                    Message
                    <span className="text-meta-1 font-body font-thin">*</span>
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
                </div>

                <div className="mb-5">
                  <FilledBtn buttonText={"Send Message"} type={"submit"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
