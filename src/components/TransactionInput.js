import React from "react";

const TransactionInput = ({
  name,
  datetime,
  description,
  setName,
  setDatetime,
  setDescription,
  addNewTransaction,
}) => {
  return (
    <div>
      <form className="mt-4" onSubmit={addNewTransaction}>
        <div className="flex gap-1 mb-1">
          <input
            className="placeholder-slate-500 w-full bg-transparent text-gray-400 border-2 border-gray-800 px-1 py-2 rounded-md"
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"-15 Dinner"}
          />
          <input
            className="text-slate-500 w-full bg-transparent  border-2 border-gray-800 p-1 rounded-md"
            type="date"
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input
            className="placeholder-slate-500 w-full bg-transparent text-gray-400 border-2 border-gray-800 px-1 py-2 rounded-md"
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder={"escription"}
          />
        </div>
        <button
          type="submit"
          className="p-1.5 rounded-full w-full mt-3 border-2 border-slate-300">
          Add new transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionInput;
