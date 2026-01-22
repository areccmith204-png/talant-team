"use client";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useEffect, useState } from "react";

export default function StatisticsPage() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const snapshot = await getDocs(collection(db, "contracts"));
      let sum = 0;
      snapshot.forEach(doc => {
        sum += Number(doc.data().amount || 0);
      });
      setTotal(sum);
    };
    fetchStats();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Statistika</h1>
      <h2>Umumiy tushum:</h2>
      <p>{total.toLocaleString()} so'm</p>
    </div>
  );
}
