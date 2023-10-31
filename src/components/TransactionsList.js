import React from "react";
import TransactionDate from "./minor-components/TransactionDate";

const TransactionsList = ({ transactions }) => {
  return (
    <div className="mt-2 overflow-auto flex flex-col h-96 py-5 px-2">
      {transactions.length > 0 &&
        transactions.map((transaction) => (
          <div className="text-slate-300 flex justify-between py-1 border-t first:border-0 border-slate-800 ">
            <div className="w-3/5">
              <div className="text-lg">{transaction.name}</div>
              <div className="text-sm text-slate-600 max-w-[90%] -white ">
                {transaction.description}
              </div>
            </div>
            <div className="text-right w-2/5">
              <div
                className={
                  "price text-lg " +
                  (transaction.price < 0 ? "text-red-500" : "text-green-500")
                }>
                {transaction.price > 0
                  ? `+${transaction.price.toFixed(2)}`
                  : transaction.price.toFixed(2)}
              </div>
              <div className="text-sm text-slate-600">
                <TransactionDate transaction={transaction} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TransactionsList;
