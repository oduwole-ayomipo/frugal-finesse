import React, { useContext, useEffect, useState } from "react";
import CardOne from "../../components/dashboard-components/CardOne";
import CardTwo from "../../components/dashboard-components/CardTwo";
import CardThree from "../../components/dashboard-components/CardThree";
import CardFour from "../../components/dashboard-components/CardFour";
import ChartOne from "../../components/dashboard-components/ChartOne";
import ChartTwo from "../../components/dashboard-components/ChartTwo";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [initialIncome, setInitialIncome] = useState(0);

  const [needsCurrentAmount, setNeedsCurrentAmount] = useState(0);
  const [wantsCurrentAmount, setWantsCurrentAmount] = useState(0);
  const [savingsCurrentAmount, setSavingsCurrentAmount] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "transaction"));
        let transactionList = [];
        querySnapshot.forEach((doc) => {
          transactionList.push({ id: doc.id, ...doc.data() });
        });
        // Sort the transaction list based on timeStamp in ascending order (FIFO)
        transactionList.sort((a, b) => a.timeStamp - b.timeStamp);
        const filteredTransactions = transactionList.filter(
          (transaction) => transaction.userId === currentUser.uid
        );
        setTransactions(filteredTransactions);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTransactions();
  }, [currentUser]);

  useEffect(() => {
    const getInitialIncome = () => {
      if (transactions.length !== 0) {
        if (transactions[0].category === "income") {
          return transactions[0].amount;
        }
      }
      return 0;
    };

    let income = getInitialIncome();
    let needs = 0;
    let wants = 0;
    let savings = 0;

    // Sum all categories of each transaction excluding the initial income transaction
    const sumEntries = () => {
      const transactionsToSum = transactions.slice(1); // Exclude the first element

      transactionsToSum.forEach((entry) => {
        const { amount, category } = entry;

        if (category === "income") {
          income += amount;
        } else if (category === "needs") {
          needs += amount;
        } else if (category === "wants") {
          wants += amount;
        } else if (category === "savings") {
          savings += amount;
        }
      });

      setInitialIncome(income);
      setNeedsCurrentAmount(needs);
      setWantsCurrentAmount(wants);
      setSavingsCurrentAmount(savings);
    };

    sumEntries();
  }, [transactions, initialIncome]);

  const calcNeeds = (income) => {
    const initialNeeds = income * (50 / 100);
    return initialNeeds;
  };

  const calcWants = (income) => {
    const initialWants = income * (30 / 100);
    return initialWants;
  };

  const calcSavings = (income) => {
    const initialSavings = income * (20 / 100);
    return initialSavings;
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne income={initialIncome} />
        <CardTwo needs={calcNeeds(initialIncome)} />
        <CardThree wants={calcWants(initialIncome)} />
        <CardFour savings={calcSavings(initialIncome)} />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne
          needs={calcNeeds(initialIncome)}
          wants={calcWants(initialIncome)}
          savings={calcSavings(initialIncome)}
          needsCurrentAmount={needsCurrentAmount}
          wantsCurrentAmount={wantsCurrentAmount}
          savingsCurrentAmount={savingsCurrentAmount}
        />
        <ChartTwo />
        <div className="col-span-12 xl:col-span-8"></div>
      </div>
    </>
  );
}

export default Dashboard;
