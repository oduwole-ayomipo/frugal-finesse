import React, { useState } from "react";
import { Link } from "react-router-dom";
import lgLogo from "../../images/svg-logo/lgLogo.svg";
import FilledBtn from "../Button/Filled-Button/FilledBtn";
import BudgetPrincipleCard from "../Budget-Principle-Card/BudgetPrincipleCard";

function BudgetSetup() {
  const [selectedCard, isSelectedCard] = useState("");

  const handleCardClick = (cardId) => {
    isSelectedCard(cardId);
  };
  const handleSubmit = () => {
    // Handle the submission with the selected card
    console.log(`Selected Card: ${selectedCard}`);
  };
  return (
    <>
      <div className="w-full flex items-center min-h-screen">
        <div className="w-full flex items-center justify-center m-auto p-6 gap-8 flex-col min-w-[30rem]">
          <div className="p-3">
            <img src={lgLogo} alt="Frugal Finesse" />
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            <div className="w-full ">
              <div>
                <h3 className="mb-2.5 block font-display text-lg text-center font-semibold text-purple-dark">
                  Select a preferred budgeting principle
                </h3>
              </div>

              <div className="">
                <div className="block items-center mx-auto justify-between xl:flex xl:flex-row">
                  <BudgetPrincipleCard cardId={1} onClick={handleCardClick} />
                  <BudgetPrincipleCard cardId={2} onClick={handleCardClick} />
                  <BudgetPrincipleCard cardId={3} onClick={handleCardClick} />
                </div>

                <div className="mt-5 mx-auto flex flex-col">
                  <Link to="/frugal-finesse/dashboard">
                    <FilledBtn
                      buttonText={"Proceed"}
                      type={"submit"}
                      onClick={handleSubmit}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="w-[32%] rounded h-1 bg-purple-light"></div>
              <div className="w-[32%] rounded h-1 bg-purple-light"></div>
              <div className="w-[32%] rounded h-1 bg-purple-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BudgetSetup;
