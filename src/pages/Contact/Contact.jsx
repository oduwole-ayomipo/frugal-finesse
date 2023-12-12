import React from "react";
import { Link } from "react-router-dom";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import FilledBtn from "../../components/Button/Filled-Button/FilledBtn";
import authImg from "../../images/svg-img/auth.svg";

function Contact() {
  return (
    <>
      <div className="w-full rounded-sm bg-white text-purple-light shadow-default mx-auto max-w-[100rem]">
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
                <div className="mb-4">
                  <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                    Full Name
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <input
                      required
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stroke border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
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
                          stroke-width="1.5"
                        >
                          <path
                            stroke-linejoin="round"
                            d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                          />
                          <circle cx="12" cy="7" r="3" />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-display font-semibold text-purple-dark">
                    Email
                  </label>
                  <div className="relative font-body font-medium text-purple-6">
                    <input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke border-purple-light bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-6 focus-visible:shadow-none"
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
