import { useState } from "react";
import { FaUser, FaIdCard, FaHome, FaMoneyBillWave, FaFileAlt, FaCoins } from "react-icons/fa";

export default function CreateAccount() {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    nationalId: "",
    incomeSource: "",
    monthlyIncome: "",
    proofOfResidence: null,
    idCardImage: null,
    accountType: "Savings",
  });

  const accountInfo = {
    Savings: { interest: "5%", dailyLimit: 1000, fees: "5$", terms: "No loans allowed." },
    Current: { interest: "0%", dailyLimit: 2000, fees: "10$", terms: "Unlimited transfers." },
    Loan: { interest: "8%", dailyLimit: 500, fees: "3$", terms: "Guarantee required." },
    Investment: { interest: "12%", dailyLimit: 1500, fees: "20$", terms: "Long-term only." },
  };

  const selected = accountInfo[form.accountType];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Created:", form);
    alert("Account created successfully! (Mock Data)");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center">Create New Account</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Customer Info */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow-lg border border-blue-100">
          <div className="flex items-center justify-start mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full mr-3">
              <FaUser size={20} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">Customer Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                name="middleName"
                placeholder="Middle Name"
                value={form.middleName}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="relative">
              <FaIdCard className="absolute left-3 top-3 text-gray-400" />
              <input
                name="nationalId"
                placeholder="National ID"
                value={form.nationalId}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div className="relative">
              <FaHome className="absolute left-3 top-3 text-gray-400" />
              <input
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="relative">
              <FaMoneyBillWave className="absolute left-3 top-3 text-gray-400" />
              <input
                name="incomeSource"
                placeholder="Income Source"
                value={form.incomeSource}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="relative">
              <FaCoins className="absolute left-3 top-3 text-gray-400" />
              <input
                name="monthlyIncome"
                placeholder="Monthly Income"
                value={form.monthlyIncome}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="space-y-2">
              <label className="block mb-1 text-gray-600 font-medium">Proof of Residence</label>
              <input
                type="file"
                name="proofOfResidence"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="space-y-2">
              <label className="block mb-1 text-gray-600 font-medium">ID Card Image</label>
              <input
                type="file"
                name="idCardImage"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-lg space-y-4 border border-green-100">
          <div className="flex items-center justify-start mb-6">
            <div className="bg-green-600 text-white p-3 rounded-full mr-3">
              <FaFileAlt size={20} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">Account Information</h2>
          </div>

          <select
            name="accountType"
            value={form.accountType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
          >
            {Object.keys(accountInfo).map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          <div className="space-y-2 mt-4 text-gray-700">
            <p><span className="font-semibold">Interest:</span> {selected.interest}</p>
            <p><span className="font-semibold">Daily Withdrawal Limit:</span> {selected.dailyLimit}</p>
            <p><span className="font-semibold">Monthly Fees:</span> {selected.fees}</p>
            <p><span className="font-semibold">Terms:</span> {selected.terms}</p>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 shadow-md transition"
          >
            Create Account
          </button>
        </div>

      </form>
    </div>
  );
}
