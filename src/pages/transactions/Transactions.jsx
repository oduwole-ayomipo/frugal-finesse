import React, { useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import TransactionTable from "../../components/data-tables/TransactionTable";
import TransactionForm from "../../components/modals/TransactionForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteTransaction from "../../components/modals/DeleteTransaction";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Transactions() {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);
  const [transactionToDeleteId, setTransactionToDeleteId] = useState("");
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(false);

  const openTransactionForm = () => {
    setIsOpen(true);
  };

  const openDeleteWarning = (id) => {
    setTransactionToDeleteId(id);
    setDeleteWarning(true);
    setLoading(false);
  };

  //funtion to handle delete
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "transaction", id));
      toast.success("Transaction deleted successfully!");
    } catch (err) {
      toast.error(err.code);
    } finally {
      setDeleteWarning(false);
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumbs pageName="Transactions" />
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
      <TransactionTable
        openTransactionForm={openTransactionForm}
        openDeleteWarning={openDeleteWarning}
      />
      <TransactionForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <DeleteTransaction
        deleteWarning={deleteWarning}
        setDeleteWarning={setDeleteWarning}
        handleDelete={() => handleDelete(transactionToDeleteId)}
        loading={loading}
      />
    </>
  );
}

export default Transactions;
