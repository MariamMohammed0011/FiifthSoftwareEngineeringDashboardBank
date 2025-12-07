import { Link } from "react-router-dom";
import { accountTypeService } from "../../services/accountTypeService";

export default function AccountTypeList() {
  const types = accountTypeService.getAll();

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Account Types</h1>

        <Link
          to="/admin/account-types/add"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Add Account Type
        </Link>
      </div>

      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Interest Rate</th>
            <th className="p-3">Withdraw Limit</th>
            <th className="p-3">Deposit Limit</th>
            <th className="p-3">Fees</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {types.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="p-3">{t.name}</td>
              <td className="p-3">{t.interestRate}</td>
              <td className="p-3">${t.withdrawLimit}</td>
              <td className="p-3">${t.depositLimit}</td>
              <td className="p-3">${t.monthlyFees}</td>

              <td className="p-3 flex gap-2">
                <Link
                  to={`/admin/account-types/edit/${t.id}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() => {
                    accountTypeService.delete(t.id);
                    window.location.reload();
                  }}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
