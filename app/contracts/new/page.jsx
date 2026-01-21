// app/contracts/new/page.jsx
"use client";

import { useState } from "react";

export default function NewContractPage() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [contracts, setContracts] = useState([]);

  const handleAdd = () => {
    if (!name || !amount) return;
    const newContract = {
      id: contracts.length + 1,
      name,
      amount: parseInt(amount),
      status: "Faol",
    };
    setContracts([...contracts, newContract]);
    setName("");
    setAmount("");
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Yangi shartnoma qo'shish</h1>

      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          placeholder="Shartnoma nomi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="number"
          placeholder="Summasi"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={handleAdd}>Qo'shish</button>
      </div>

      <h2 style={{ marginTop: 30 }}>Shartnomalar</h2>
      <ul>
        {contracts.map((c) => (
          <li key={c.id}>
            {c.id}. {c.name} — {c.amount.toLocaleString()} so'm — {c.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
