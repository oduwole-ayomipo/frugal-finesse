import React, { useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import TransactionTable from "../../components/data-tables/TransactionTable";
import TransactionForm from "../../components/modals/TransactionForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmDelete from "../../components/modals/ConfirmDelete";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Transactions() {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);
  const [transactionToDeleteId, setTransactionToDeleteId] = useState("");
  const [loading, setLoading] = useState(false);

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
      <TransactionTable
        openTransactionForm={openTransactionForm}
        openDeleteWarning={openDeleteWarning}
        handleDelete={() => handleDelete(transactionToDeleteId)}
      />
      <TransactionForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <ConfirmDelete
        deleteWarning={deleteWarning}
        setDeleteWarning={setDeleteWarning}
        handleDelete={() => handleDelete(transactionToDeleteId)}
        loading={loading}
      />
      <ToastContainer />
    </>
  );
}

export default Transactions;
