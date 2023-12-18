import React from "react";
import landing from "../../images/svg-img/landing.svg";

function Header() {
  return (
    <>
      <div className="flex gap-6 flex-col items-center justify-between px-5  md:flex-row sm:flex-row md:px-9">
        <div className="flex flex-col gap-7 self-center py-2 md:min-w-[58%]">
          <div className="flex">
            <h1 className=" text-4xl font-bold font-display tracking-tighter leading-tight lg:text-5xl lg:leading-[1.1]">
              Money & Sense: <br /> Master your wealth with{" "}
              <span className="text-purple-4">Frugal Finesse</span>
            </h1>
          </div>
          <div className="flex lg:max-w-[90%]">
            <p className="font-body text-sm leading-normal font-medium lg:text-xl">
              Allocate your income to{" "}
              <span className="font-medium text-purple-4">
                investments, savings, and expenses
              </span>
              . Discover the art of budgeting and manage your money wisely for a
              brighter financial future.
            </p>
          </div>
          <div className="flex w-full gap-4 lg:gap-16 items-center custom:gap-10">
            <div className="flex flex-col">
              <h6 className="font-display font-bold text-3xl sm:text-2xl lg:text-4xl">
                8+
              </h6>
              <p className="font-body text-sm leading-tighter font-medium sm:text-xs lg:text-xl">
                Budget <br /> Principles
              </p>
            </div>
            <div className="flex flex-col">
              <h6 className="font-display font-bold text-3xl sm:text-2xl lg:text-4xl">
                50+
              </h6>
              <p className="font-body text-sm leading-tighter font-medium sm:text-xs lg:text-xl">
                Financial <br /> Advises
              </p>
            </div>
            <div className="flex flex-col">
              <h6 className="font-display font-bold text-3xl sm:text-2xl lg:text-4xl">
                {" "}
                100+
              </h6>
              <p className="font-body text-sm leading-tighter sm:text-xs font-medium lg:text-xl">
                Financial <br /> Forums
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center my-7">
          <img src={landing} alt="Frugal Finesse" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default Header;
