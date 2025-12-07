import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // عناوين حسب الدور
  const titles = {
    Admin: "Admin Dashboard",
    Manager: "Manager Panel",
    Teller: "Teller Workspace",
  };

  return (
    <div className="w-full bg-white shadow flex items-center justify-between px-6 py-4">
      {/* اليسار */}
      <h1 className="text-xl font-bold text-blue-700">
        {titles[role] || "Bank System"}
      </h1>

      {/* اليمين */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">
          Role: <span className="font-bold">{role}</span>
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
