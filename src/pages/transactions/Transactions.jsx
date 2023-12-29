import React, { useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import TransactionTable from "../../components/data-tables/TransactionTable";
import TransactionForm from "../../components/modals/TransactionForm";

function Transactions() {
  const [isOpen, setIsOpen] = useState(false);

  const openTransactionForm = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Breadcrumbs pageName="Transactions" />
      <TransactionTable openTransactionForm={openTransactionForm} />
      <TransactionForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Transactions;
