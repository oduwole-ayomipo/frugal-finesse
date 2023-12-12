import React from "react";
import { Link } from "react-router-dom";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import FilledBtn from "../../components/Button/Filled-Button/FilledBtn";
import authImg from "../../images/svg-img/auth.svg";

function Contact() {
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

              <form>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row font-body font-medium text-purple-6">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                      First name{" "}
                      <span className="text-meta-1 font-body font-thin">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded-lg border border-stroke border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                      Last name{" "}
                      <span className="text-meta-1 font-body font-thin">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded-lg border border-stroke border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                    Email{" "}
                    <span className="text-meta-1 font-body font-thin">*</span>
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                    Subject{" "}
                    <span className="text-meta-1 font-body font-thin">*</span>
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <input
                      required
                      type="text"
                      placeholder="Message Subject"
                      className="w-full rounded-lg border border-stroke border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                    Message{" "}
                    <span className="text-meta-1 font-body font-thin">*</span>
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <textarea
                      rows={6}
                      placeholder="Type your message"
                      className="w-full rounded border border-stroke border-purple-light border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-purple-6 focus-visible:shadow-none active:border-primary disabled:cursor-default"
                    ></textarea>
                  </div>
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
