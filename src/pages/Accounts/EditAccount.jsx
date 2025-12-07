import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditAccount() {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  // Mock loading
  useEffect(() => {
    setForm({
      type: "Savings",
      dailyLimit: 1000,
      monthlyFees: 5,
      terms: "Savings withdrawals allowed only during working hours",
      customerAddress: "Amsterdam, NL",
      monthlyIncome: 1500,
    });
  }, [id]);

  if (!form) return <p className="p-6">Loading...</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Account:", form);
    alert("Account updated successfully! (Mock)");
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Edit Account</h1>

      <form 
        onSubmit={handleSubmit} 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Account Info */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Account Settings</h2>

          <label>Account Type</label>
          <select 
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input"
          >
            <option>Savings</option>
            <option>Current</option>
            <option>Loan</option>
            <option>Investment</option>
          </select>

          <label>Daily Withdrawal Limit</label>
          <input
            name="dailyLimit"
            value={form.dailyLimit}
            onChange={handleChange}
            className="input"
          />

          <label>Monthly Fees</label>
          <input
            name="monthlyFees"
            value={form.monthlyFees}
            onChange={handleChange}
            className="input"
          />

          <label>Terms and Conditions</label>
          <textarea
            name="terms"
            value={form.terms}
            onChange={handleChange}
            className="input h-24"
          ></textarea>
        </div>

        {/* Customer Info */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Customer Information</h2>

          <label>Customer Address</label>
          <input
            name="customerAddress"
            value={form.customerAddress}
            onChange={handleChange}
            className="input"
          />

          <label>Monthly Income</label>
          <input
            name="monthlyIncome"
            value={form.monthlyIncome}
            onChange={handleChange}
            className="input"
          />

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
