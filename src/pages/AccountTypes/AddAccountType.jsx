import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountTypeService } from "../../services/accountTypeService";

export default function AddAccountType() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    interestRate: "",
    withdrawLimit: "",
    depositLimit: "",
    monthlyFees: "",
    terms: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    accountTypeService.add(form);
    navigate("/admin/account-types");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Add Account Type</h1>

      <div className="space-y-4">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label className="block mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              name={key}
              value={form[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
      </div>

      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Save</button>
    </form>
  );
}
