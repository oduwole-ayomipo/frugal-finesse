import React from "react";
import FilledBtn from "../../components/button/FilledBtn";
function Goals() {
  return (
    <>
      <p className="text-center font-display text-meta-1 text-xm font-medium p-4">
        I'm currently bulding a really cool feature here... just chill!!
      </p>
      <FilledBtn
        buttonText={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="px-2">Create New</span>
          </>
        }
      />
    </>
  );
}
export default Goals;
