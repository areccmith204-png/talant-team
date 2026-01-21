// app/contracts/page.jsx

const dummyContracts = [
  { id: 1, name: "Shartnoma 1", amount: 500000, status: "Faol" },
  { id: 2, name: "Shartnoma 2", amount: 750000, status: "Tugagan" },
];

export default function ContractsPage() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Shartnomalar ro'yxati</h1>
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
          {dummyContracts.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.amount.toLocaleString()} so'm</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
