import React from "react";
import error from "../../images/svg-img/error404.png";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="relative max-w-[28rem]">
          <img src={error} alt="under maintenance" />
        </div>
        <div>
          <p className="text-center font-display text-purple-7 text-lg font-semibold px-4 mb-1.5">
            Oops! The page you are looking for appears to be missing!
          </p>
          <p className="text-center font-display text-meta-1 text-xm font-medium px-4">
            Do not worry, you can click{" "}
            <Link to={"/"} className=" text-purple-6 font-semibold">
              here
            </Link>{" "}
            to go back home
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
