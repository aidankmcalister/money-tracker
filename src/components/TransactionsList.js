import React from "react";
import TransactionDate from "./minor-components/TransactionDate";

const TransactionsList = ({ transactions }) => {
  return (
    <div className="my-3 overflow-auto flex flex-col h-full py-5 px-2">
      {transactions.length > 0 &&
        transactions.map((transaction) => (
          <div
            className={
              `text-slate-300 flex my-3 justify-between border-2 rounded-lg py-4 px-2 ` +
              (transaction.price < 0
                ? "border-red-400 shadow-[0px_0px_.6rem_#f87171]"
                : "border-green-400 shadow-[0px_0px_.6rem_#4ade80]")
            }>
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
