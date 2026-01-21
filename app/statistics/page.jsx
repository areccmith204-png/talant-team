// app/statistics/page.jsx
"use client";

import { useState } from "react";

const dummyContracts = [
  { id: 1, name: "Shartnoma 1", amount: 500000, status: "Faol" },
  { id: 2, name: "Shartnoma 2", amount: 750000, status: "Tugagan" },
  { id: 3, name: "Shartnoma 3", amount: 300000, status: "Faol" },
];

export default function StatisticsPage() {
  const [contracts] = useState(dummyContracts);

  const totalAmount = contracts.reduce((sum, c) => sum + c.amount, 0);
  const activeContracts = contracts.filter((c) => c.status === "Faol").length;

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Umumiy statistika</h1>

      <div style={{ marginTop: 20 }}>
        <p>Shartnomalar soni: {contracts.length}</p>
        <p>Faol shartnomalar: {activeContracts}</p>
        <p>Umumiy tushum: {totalAmount.toLocaleString()} so'm</p>
      </div>
    </div>
  );
}
