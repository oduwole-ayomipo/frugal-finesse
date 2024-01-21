import React from "react";
import maintenance from "../../images/svg-img/maintenance.png";

function Maintenance() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="relative max-w-[23rem]">
          <img src={maintenance} alt="under maintenance" />
        </div>
        <div>
          <p className="text-center font-display text-purple-7 font-semibold px-4 mb-1.5 lg:text-lg">
            Blame Tim! He threw a digital party, and now this page needs a nap
          </p>
          <p className="text-center font-display text-meta-1 text-sm font-medium px-4 lg:text-base">
            We'll wake it up before you can say "404 who?" Kindly check back!
          </p>
        </div>
      </div>
    </>
  );
}

export default Maintenance;
