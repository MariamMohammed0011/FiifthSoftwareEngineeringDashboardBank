import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AccountDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);

  // Mock Data – later replaced by API
  const mockAccount = {
    id,
    accountNumber: "SA-202545",
    type: "Savings",
    balance: 2500,
    createdAt: "2025-02-01",
    dailyLimit: 1000,
    interestRate: "5%",
    fees: "$5 / month",
    terms: "Withdrawals allowed only during working hours.",
    customer: {
      firstName: "Mariam",
      middleName: "Ahmed",
      lastName: "Yousef",
      nationalId: "456789123",
      address: "Amsterdam, NL",
      monthlyIncome: "1500$",
      incomeSource: "Job",
    }
  };

  useEffect(() => {
    setAccount(mockAccount);
  }, [id]);

  if (!account) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Account Details</h1>

      {/* Account Info */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Account Information</h2>

        <p><strong>Account Number:</strong> {account.accountNumber}</p>
        <p><strong>Type:</strong> {account.type}</p>
        <p><strong>Balance:</strong> ${account.balance}</p>
        <p><strong>Created At:</strong> {account.createdAt}</p>
        <p><strong>Daily Limit:</strong> {account.dailyLimit}</p>
        <p><strong>Interest Rate:</strong> {account.interestRate}</p>
        <p><strong>Fees:</strong> {account.fees}</p>
        <p><strong>Terms:</strong> {account.terms}</p>
      </div>

      {/* Customer Info */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Customer Information</h2>

        <p><strong>Name:</strong> 
          {account.customer.firstName} {account.customer.middleName} {account.customer.lastName}
        </p>

        <p><strong>National ID:</strong> {account.customer.nationalId}</p>
        <p><strong>Address:</strong> {account.customer.address}</p>
        <p><strong>Monthly Income:</strong> {account.customer.monthlyIncome}</p>
        <p><strong>Income Source:</strong> {account.customer.incomeSource}</p>
      </div>

      {/* Actions */}
      <div>
        <button
          onClick={() => navigate(`/teller/accounts/edit/${id}`)}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Edit Account
        </button>
      </div>
    </div>
  );
}
