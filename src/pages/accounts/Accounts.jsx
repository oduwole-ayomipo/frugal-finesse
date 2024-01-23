import React, { useContext, useState } from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import PersonalInfo from "../../components/accounts-components/PersonalInfo";
import PhotoUpload from "../../components/accounts-components/PhotoUpload";
import { AuthContext } from "../../context/AuthContext";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import PersonalInfoUpdate from "../../components/modals/PersonalInfoUpdate";
import ImageUpdate from "../../components/modals/ImageUpdate";

function Accounts() {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [updateWarning, setUpdateWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [infoValues, setInfoValues] = useState({
    fullname: "",
    email: "",
    username: "",
    income: 0,
  });

  const openUpdateModal = (values) => {
    setInfoValues(values);
    setUpdateWarning(true);
    setLoading(false);
  };

  const openUploadModal = () => {
    setUploadOpen(true);
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      let incomeValue = values.income;

      //Check if income is string before parsing
      if (typeof incomeValue === "string") {
        incomeValue = parseFloat(values.income.replace(/[, ]/g, ""));
      } else {
        incomeValue = values.income;
      }

      // Query transactions collection
      const transactionsQuery = query(
        collection(db, "transaction"),
        where("userId", "==", currentUser.uid),
        where("description", "==", "initial income")
      );

      const transactionsSnapshot = await getDocs(transactionsQuery);
      if (transactionsSnapshot.size > 0) {
        transactionsSnapshot.forEach((transactionDoc) => {
          updateDoc(doc(db, "transaction", transactionDoc.id), {
            amount: incomeValue,
          });
        });
      } else {
        await addDoc(collection(db, "transaction"), {
          userId: currentUser.uid,
          amount: incomeValue,
          category: "income",
          description: "initial income",
          timeStamp: serverTimestamp(),
        });
      }

      // Update user document
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, {
        ...values,
        income: incomeValue,
      });

      toast.success("Account update successful. Do refresh");
    } catch (err) {
      console.error("Error updating account:", err);
      if (err.code === "invalid-argument") {
        toast.error("Invalid argument. Please check your input.");
      } else {
        toast.error("Failed to update account. Please try again.");
      }
    } finally {
      setLoading(false);
      setUpdateWarning(false);
    }
  };
  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumbs pageName="Accounts" />

        <div className="grid grid-cols-5 gap-8">
          <PersonalInfo openUpdateModal={openUpdateModal} />
          <PhotoUpload openUploadModal={openUploadModal} />
        </div>
      </div>
      <PersonalInfoUpdate
        loading={loading}
        handleUpdate={() => handleSubmit(infoValues)}
        updateWarning={updateWarning}
        setUpdateWarning={setUpdateWarning}
      />
      <ImageUpdate setUploadOpen={setUploadOpen} uploadOpen={uploadOpen} />
    </>
  );
}

export default Accounts;
