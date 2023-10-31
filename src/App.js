import "./App.css";
import { useEffect, useState } from "react";
import TransactionsList from "./components/TransactionsList";
import TransactionInput from "./components/TransactionInput";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState("");
  const [refreshTransactions, setRefreshTransactions] = useState(false);

  useEffect(() => {
    getTransactions().then((fetchedTransactions) => {
      setTransactions(fetchedTransactions.reverse());
    });
  }, []);

  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + "/transactions";
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction(ev) {
    // ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const price = name.split(" ")[0];
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
      }),
    }).then((response) => {
      response.json().then((json) => {
        setName("");
        setDatetime("");
        setDescription("");
        console.log("result", json);
        setRefreshTransactions(!refreshTransactions);
        console.log("refreshTransactions: ", refreshTransactions);
      });
    });
  }

  let balance = 0;

  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }

  balance = balance.toFixed(2);
  const fraction = balance.split(".")[1];
  balance = balance.split(".")[0];

  return (
    <div className="w-full h-full flex justify-center">
      <main className="max-w-sm mx-4 my-8 h-screen flex flex-col justify-center">
        <h1 className="text-slate-100 m-0 text-6xl text-center">
          ${balance}
          <span className="text-3xl align-top inline-block mt-1">
            .{fraction}
          </span>
        </h1>
        <TransactionInput
          name={name}
          datetime={datetime}
          description={description}
          setName={setName}
          setDatetime={setDatetime}
          setDescription={setDescription}
          addNewTransaction={addNewTransaction}
        />
        <TransactionsList transactions={transactions} />
      </main>
    </div>
  );
}

export default App;

// background: linear-gradient(to right, white, transparent 90%);
