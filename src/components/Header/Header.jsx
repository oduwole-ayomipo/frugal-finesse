import React from "react";
import LandingImg from "../../images/svg-img/landing-img.svg";

function Header() {
  return (
    <>
      <div className="flex bg-[#ffffff] flex-col items-center px-4 py-1 flex-shrink-0">
        <div className="flex flex-col gap-7 justify-evenly self-stretch p-2">
          <div className="flex">
            <h1 className=" text-4xl font-bold font-display tracking-tighter leading-tight">
              Money & Sense - Master your wealth with{" "}
              <span className="text-purple-4">Frugal Finesse</span>
            </h1>
          </div>
          <div className="flex">
            <p>
              Allocate your income to investments, savings, and expenses.
              Discover the art of budgeting and manage your money wisely for a
              brighter financial future.
            </p>
          </div>
          <div>
            <div>
              <h6> 8+ </h6>
              <p>Budget Principles</p>
            </div>
            <div>
              <h6> 50+ </h6>
              <p>Financial Advises</p>
            </div>
            <div>
              <h6> 100+</h6>
              <p>Financial Forums</p>
            </div>
          </div>
          <div>
            <img src={LandingImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
