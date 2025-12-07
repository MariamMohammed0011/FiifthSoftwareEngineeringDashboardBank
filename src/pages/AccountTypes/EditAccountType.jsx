import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { accountTypeService } from "../../services/accountTypeService";

export default function EditAccountType() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(accountTypeService.getById(id));
  }, [id]);

  if (!data) return <p className="p-6">Loading...</p>;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    accountTypeService.update(id, data);
    navigate("/admin/account-types");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Edit Account Type</h1>

      <div className="space-y-4">
        {Object.keys(data).map((key) =>
          key !== "id" ? (
            <div key={key}>
              <label className="block mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                name={key}
                value={data[key]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ) : null
        )}
      </div>

      <button className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded">Update</button>
    </form>
  );
}
