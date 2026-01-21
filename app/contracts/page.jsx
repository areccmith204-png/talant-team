"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function ContractsPage() {
  const [contracts, setContracts] = useState([]);

  const contractsRef = collection(db, "contracts");

  const fetchContracts = async () => {
    const snapshot = await getDocs(contractsRef);
    setContracts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Shartnomalar ro'yxati</h1>
      {contracts.length === 0 ? (
        <p>Shartnoma yo‘q 😕</p>
      ) : (
        <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nomi</th>
              <th>Summasi</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((c, index) => (
              <tr key={c.id}>
                <td>{index + 1}</td>
                <td>{c.name}</td>
                <td>{c.amount.toLocaleString()} so‘m</td>
                <td>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
