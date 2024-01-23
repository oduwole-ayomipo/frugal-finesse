import React, { useContext, useEffect, useState } from "react";
import FilledBtn from "../../components/button/FilledBtn";
import SavingsCard from "../../components/savings-components/SavingsCard";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import SavingsForm from "../../components/modals/SavingsForm";
import { collection, where, onSnapshot, query } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import DeleteSaving from "../../components/modals/DeleteSaving";

function Goals() {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [savingsLoading, setSavingsLoading] = useState(true);
  const [savingsData, setSavingsData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [matchingSavingsTransaction, setMatchingSavingsTransaction] = useState(
    []
  );
  const [info, setInfo] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);
  const [savingToDeleteId, setSavingsToDeleteId] = useState("");

  useEffect(() => {
    const unsubscribeSavings = onSnapshot(
      query(collection(db, "savings"), where("userId", "==", currentUser.uid)),
      (snapshot) => {
        let savingsList = [];
        snapshot.docs.forEach((doc) => {
          savingsList.push({ id: doc.id, ...doc.data() });
        });
        setSavingsData(savingsList);
        setSavingsLoading(false);
      },
      (err) => toast.error(err.code)
    );

    const unsubscribeTransaction = onSnapshot(
      query(
        collection(db, "transaction"),
        where("userId", "==", currentUser.uid)
      ),
      (snapshot) => {
        let transactionList = [];
        snapshot.docs.forEach((doc) => {
          transactionList.push({ id: doc.id, ...doc.data() });
        });
        setTransactionData(transactionList);
      },
      (err) => toast.error(err.code)
    );

    return () => {
      unsubscribeSavings();
      unsubscribeTransaction();
    };
  }, [currentUser.uid]);

  useEffect(() => {
    const handleSavedAmount = async () => {
      for (const transactionItem of transactionData) {
        const matchingSavingsTransaction = savingsData.find(
          (savingsItem) =>
            savingsItem.category === transactionItem.category &&
            savingsItem.description === transactionItem.description
        );

        if (matchingSavingsTransaction) {
          // Update the savingsAmount in the savingsData array
          matchingSavingsTransaction.savingsAmount += transactionItem.amount;

          // Update the savingsAmount in Firebase Firestore
          setMatchingSavingsTransaction(matchingSavingsTransaction);
        }
      }
    };

    handleSavedAmount();
  }, [savingsData, transactionData]);

  const openDeleteWarning = (id) => {
    setSavingsToDeleteId(id);
    setDeleteWarning(true);
  };

  return (
    <>
      <Breadcrumbs pageName={"Saving Goals"} />
      <div
        aria-roledescription="button"
        onClick={() => setInfo(!info)}
        className=" flex gap-2 items-start rounded-sm mb-5.5 px-2 py-6"
      >
        <span className="mt-1 text-meta-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </span>
        <h3
          className={` ${
            info ? "hidden" : "block"
          } cursor-pointer font-display text-purple-dark opacity-80 text-sm font-medium lg:text-lg`}
        >
          In order to effectively track your saving progress, when entering a
          new transaction, ensure the description matches the title of your
          saving goal!
        </h3>
      </div>

      {savingsLoading ? (
        <p className="text-purple-dark text-base font-body py-5">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {savingsData.map((item) => (
              <SavingsCard
                openDeleteWarning={openDeleteWarning}
                key={item.id}
                id={item.id}
                description={item.description}
                category={
                  item.description === matchingSavingsTransaction.description &&
                  item.category === matchingSavingsTransaction.category &&
                  matchingSavingsTransaction.savingsAmount >= item.totalAmount
                    ? "Completed"
                    : item.category
                }
                totalAmount={item.totalAmount}
                savingsAmount={
                  item.description === matchingSavingsTransaction.description &&
                  item.category === matchingSavingsTransaction.category
                    ? matchingSavingsTransaction.savingsAmount
                    : item.savingsAmount
                }
              />
            ))}
          </div>
        </>
      )}

      <SavingsForm isOpen={isOpen} setIsOpen={setIsOpen} />

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
        onClick={() => setIsOpen(true)}
      />

      <DeleteSaving
        deleteWarning={deleteWarning}
        setDeleteWarning={setDeleteWarning}
        savingToDeleteId={savingToDeleteId}
      />
    </>
  );
}
export default Goals;
