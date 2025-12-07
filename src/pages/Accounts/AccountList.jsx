import { Link } from "react-router-dom";

export default function AccountList() {
  const accounts = [
    { id: 1, number: "SA-202545", type: "Savings", balance: 2500 },
    { id: 2, number: "CR-985722", type: "Current", balance: 1200 },
    { id: 3, number: "LN-456333", type: "Loan", balance: -800 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Accounts</h1>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Account Number</th>
            <th className="p-3">Type</th>
            <th className="p-3">Balance</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((acc) => (
            <tr
              key={acc.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-3">{acc.number}</td>
              <td className="p-3">{acc.type}</td>
              <td className="p-3">${acc.balance}</td>

              {/* ACTIONS IN THE CENTER */}
              <td className="p-3">
                <div className="flex justify-center gap-3">
                  
                  {/* VIEW BUTTON */}
                  <Link
                    to={`/teller/accounts/view/${acc.id}`}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                  >
                    View
                  </Link>

                  {/* EDIT BUTTON */}
                  <Link
                    to={`/teller/accounts/edit/${acc.id}`}
                    className="px-4 py-2 rounded-lg bg-yellow-500 text-white text-sm hover:bg-yellow-600 transition"
                  >
                    Edit
                  </Link>

                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
