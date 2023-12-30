import React, { useContext, useEffect, useState } from "react";
import FilledBtn from "../button/FilledBtn";
import data from "../modals/data.json";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

function TransactionTable({ openTransactionForm }) {
  const { currentUser } = useContext(AuthContext);
  const [initialTransaction, setInitialTransaction] = useState({});

  useEffect(() => {
    const checkTransactionData = async () => {
      const initialTransactionData = await getDoc(
        doc(db, "transaction", currentUser.uid)
      );
      if (initialTransactionData.exists()) {
        console.log("data", initialTransactionData.data());
        setInitialTransaction(initialTransactionData.data());
      } else {
        setInitialTransaction(null);
      }
    };

    checkTransactionData();
  }, [currentUser.uid]);

  //function to convert to date
  const convertDate = () => {
    if (initialTransaction && initialTransaction.timeStamp) {
      const rawDate = initialTransaction.timeStamp;
      const options = { year: "numeric", month: "short", day: "numeric" };
      const formattedDate = rawDate
        .toDate()
        .toLocaleDateString("en-US", options);
      return formattedDate;
    } else {
      return null;
    }
  };

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
                        {currentUser.uid}
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body">
                        ₦{initialTransaction.amount}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      <p className="inline-flex capitalize rounded-full font-body bg-purple-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-purple-4">
                        {initialTransaction.category}
                      </p>
                    </td>
                    <td className="border-b border-[#eee]  py-5 px-4 ">
                      <p className="text-purple-dark capitalize text-sm font-body  ">
                        {initialTransaction.description}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 ">
                      <p className="text-purple-dark text-sm font-body  ">
                        {convertDate()}
                      </p>
                    </td>
                  </tr>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="border-b border-[#eee]  py-5 px-4 ">
                        <p className="text-purple-dark text-sm font-body">
                          {item.id}
                        </p>
                      </td>
                      <td className="border-b border-[#eee]  py-5 px-4 ">
                        <p className="text-purple-dark text-sm font-body  ">
                          ₦{item.amount}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <p className="inline-flex rounded-full font-body bg-purple-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-purple-4">
                          {item.category}
                        </p>
                      </td>
                      <td className="border-b border-[#eee]  py-5 px-4 ">
                        <p className="text-purple-dark text-sm font-body  ">
                          {item.description}
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
                  ))}
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
