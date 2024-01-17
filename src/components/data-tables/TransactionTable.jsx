import React, { useContext, useEffect, useState } from "react";
import FilledBtn from "../button/FilledBtn";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";

function TransactionTable({ openTransactionForm, openDeleteWarning }) {
  const { currentUser } = useContext(AuthContext);
  const [transactionData, setTransactionData] = useState([]);
  const [transactionLoading, setTransactionLoading] = useState(true);
  const [search, setSearch] = useState("");
  //Pagination logic
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = transactionData.slice(startIndex, endIndex);

  useEffect(() => {
    setTransactionLoading(true);
    //Listen for real time update
    const unsub = onSnapshot(
      collection(db, "transaction"),
      (snapshot) => {
        let transactionList = [];
        snapshot.docs.forEach((doc) => {
          transactionList.push({ id: doc.id, ...doc.data() });
        });
        // Sort the transaction list based on timeStamp in stack (FILO)
        transactionList.sort((a, b) => b.timeStamp - a.timeStamp);
        setTransactionData(
          transactionList.filter((item) => item.userId === currentUser.uid)
        );
        setTransactionLoading(false);
      },

      (err) => {
        toast.alert(err.code);
        console.log(err);
      }
    );

    return () => {
      unsub();
    };
  }, [currentUser]);

  //fnction to convert to date
  const convertDate = (timeStamp) => {
    if (timeStamp && !transactionLoading) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      const formattedDate = new Date(
        timeStamp.seconds * 1000
      ).toLocaleDateString("en-US", options);
      return formattedDate;
    } else {
      return null;
    }
  };

  //convert the amount display
  const formatAmount = (amount) => {
    if (transactionLoading === false) {
      const formattedAmount = amount.toLocaleString();
      return formattedAmount;
    } else {
      return amount;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
          {/*start search bar*/}
          <div className="flex justify-end mb-6">
            <form>
              <div className="relative font-body font-medium text-purple-6">
                <input
                  name="search"
                  id="search"
                  required
                  type="text"
                  placeholder="search..."
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-purple-light bg-transparent p-3 outline-none focus:border-purple-6 focus-visible:shadow-none"
                />
                <span className="absolute right-3 top-3 text-purple-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    opacity="0.5"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>
              </div>
            </form>
          </div>
          {/*end search bar*/}
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
              {transactionLoading ? (
                <tbody className="w-full">
                  <tr className="w-full text-purple-dark text-center text-sm font-body border-[#eee] py-5 px-4">
                    <td className="text-purple-dark text-base font-body py-5">
                      Loading...
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {slicedData
                    .filter((result) => {
                      return search.toLowerCase() === ""
                        ? result
                        : result.id.toLowerCase().includes(search) ||
                            formatAmount(result.amount)
                              .toLowerCase()
                              .includes(search) ||
                            result.category.toLowerCase().includes(search) ||
                            result.description.toLowerCase().includes(search) ||
                            convertDate(result.timeStamp)
                              .toLowerCase()
                              .includes(search);
                    })
                    .map((item, i) => (
                      <tr key={item.id}>
                        <td className="border-b border-[#eee]  py-5 px-4 ">
                          <p className="text-purple-dark text-sm font-body">
                            {item.id}
                          </p>
                        </td>
                        <td className="border-b border-[#eee]  py-5 px-4 ">
                          <p className="text-purple-dark capitalize text-sm font-body  ">
                            ₦{formatAmount(item.amount)}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4">
                          <p className="inline-flex capitalize rounded-full font-body bg-purple-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-purple-4">
                            {item.category}
                          </p>
                        </td>
                        <td className="border-b border-[#eee]  py-5 px-4 ">
                          <p className="text-purple-dark capitalize text-sm font-body  ">
                            {item.description}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 ">
                          <p className="text-purple-dark capitalize text-sm font-body  ">
                            {convertDate(item.timeStamp)}
                          </p>
                        </td>
                        <td className="border-b text-sm font-body border-[#eee] py-5 px-4 ">
                          <button
                            className="text-meta-1 w-full font-medium hover:font-semibold"
                            onClick={() => openDeleteWarning(item.id)}
                          >
                            {item.description === "initial income" &&
                            item.category === "income" ? null : (
                              <span className="w-full h-full flex items-center justify-center">
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
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </span>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-purple-dark font-light font-body">
              Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
              <span className="font-semibold">{endIndex}</span> of{" "}
              <span className="font-semibold">{transactionData.length}</span>{" "}
              results
            </p>
          </div>
          <ReactPaginate
            previousLabel={
              <>
                <span className="relative inline-flex items-center rounded-l-md p-2.5  text-purple-dark ring-1 ring-inset ring-stroke hover:bg-purple-6 hover:text-purple-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 22 22"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
              </>
            }
            nextLabel={
              <>
                <span className="relative inline-flex items-center rounded-r-md p-2.5  text-purple-dark ring-1 ring-inset ring-stroke hover:bg-purple-6 hover:text-purple-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 22 22"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </>
            }
            pageCount={Math.ceil(transactionData.length / itemsPerPage)}
            onPageChange={handlePageChange}
            containerClassName="isolate inline-flex -space-x-px items-center"
            pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-bold text-purple-dark ring-1 ring-inset ring-stroke hover:bg-purple-6 hover:text-purple-light"
            activeLinkClassName="relative  z-10 bg-purple-6 inline-flex items-center px-4 py-2 text-sm font-semibold text-purple-light ring-1 ring-inset ring-purple-2 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-4"
          />
        </div>

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
      <ToastContainer />
    </>
  );
}

export default TransactionTable;
