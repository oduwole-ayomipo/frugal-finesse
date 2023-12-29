import React from "react";
import FilledBtn from "../button/FilledBtn";

function TransactionTable({ openTransactionForm }) {
  return (
    <>
      <div className="flex flex-col gap-10">
        <>
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-[#F9F6FF] text-left">
                    <th className="min-w-[16%] p-4 font-display  text-purple-dark xl:pl-5">
                      ID
                    </th>
                    <th className="min-w-[16%] p-4 font-display font-semibold  text-purple-dark ">
                      Amount
                    </th>
                    <th className="min-w-[16%] p-4 font-display font-semibold  text-purple-dark">
                      Category
                    </th>
                    <th className="min-w-[17%] p-4 font-display font-semibold  text-purple-dark">
                      Description
                    </th>
                    <th className="min-w-[18%] p-4 font-display font-semibold text-purple-dark">
                      Trnsc.Date
                    </th>
                    <th className="p-4 font-display font-semibold  text-purple-dark ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body">
                        12292023
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        ₦500,000
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      <p className="inline-flex rounded-full font-body bg-purple-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-purple-4">
                        Income
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        Dec Salary
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        Dec. 29, 2023
                      </p>
                    </td>
                    <td className="border-b  text-sm font-body border-[#eee] py-5 px-4 ">
                      <div className="flex items-center space-x-3.5">
                        <button className="text-meta-1 font-medium hover:font-semibold">
                          EDIT
                        </button>
                        <button className="text-meta-1 font-medium hover:font-semibold">
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body">
                        12292023
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        ₦5,000
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      <p className="inline-flex rounded-full  font-body bg-purple-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-purple-4">
                        Needs
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        Hair Do
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark  text-sm font-body  ">
                        Dec. 29, 2023
                      </p>
                    </td>
                    <td className="border-b font-body text-sm border-[#eee] py-5 px-4 ">
                      <div className="flex items-center space-x-3.5">
                        <button className="text-meta-1 font-medium hover:font-semibold">
                          EDIT
                        </button>
                        <button className="text-meta-1 font-medium hover:font-semibold">
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body">
                        12292023
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        ₦500,000
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      <p className="inline-flex rounded-full font-body bg-purple-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-purple-4">
                        Savings
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        Cowrywise
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        Dec. 29, 2023
                      </p>
                    </td>
                    <td className="border-b font-body text-sm border-[#eee] py-5 px-4 ">
                      <div className="flex items-center space-x-3.5">
                        <button className="text-meta-1 font-medium hover:font-semibold">
                          EDIT
                        </button>
                        <button className="text-meta-1 font-medium hover:font-semibold">
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-[rgb(238,238,238)]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm  font-body">
                        12292023
                      </p>
                    </td>
                    <td className=" border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        ₦5,000
                      </p>
                    </td>
                    <td className=" border-[#eee] py-5 px-4">
                      <p className="inline-flex rounded-full font-body bg-purple-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-purple-4">
                        Needs
                      </p>
                    </td>
                    <td className=" border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        Hair Do
                      </p>
                    </td>
                    <td className=" border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        Dec. 29, 2023
                      </p>
                    </td>
                    <td className="border-b font-body text-sm border-[#eee] py-5 px-4 ">
                      <div className="flex items-center space-x-3.5">
                        <button className="text-meta-1 font-medium hover:font-semibold">
                          EDIT
                        </button>
                        <button className="text-meta-1 font-medium hover:font-semibold">
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
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
              <span className="px-2">Add New</span>
            </>
          }
          onClick={openTransactionForm}
        />
      </div>
    </>
  );
}

export default TransactionTable;
