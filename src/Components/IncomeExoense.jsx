import React, { useContext } from "react";
import { transactionContext } from "../Context/TransactionCP";

const IncomeExoense = () => {
  const { transaction } = useContext(transactionContext);
  const amounts = transaction.map((trans) => trans.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
  .filter((amount) => amount < 0)
  .reduce((acc, item) => (acc += item), 0) * -1
  .toFixed(2);

  return (
    <section className="inc-exp">
      <div className="income">
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p className="money miuns">${expense}</p>
      </div>
    </section>
  );
};

export default IncomeExoense;
