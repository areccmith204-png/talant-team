"use client";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useEffect, useState } from "react";

export default function ContractsPage() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      const snapshot = await getDocs(collection(db, "contracts"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setContracts(data);
    };
    fetchContracts();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Shartnomalar</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nomi</th>
            <th>Summasi</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.amount} so'm</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
