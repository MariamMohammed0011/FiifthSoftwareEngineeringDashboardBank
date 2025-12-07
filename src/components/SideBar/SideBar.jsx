import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Sidebar() {
  const { role } = useAuth();

  // روابط حسب الدور
  const menu = {
    Admin: [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Account Types", path: "/admin/account-types" },  // NEW
  { name: "Accounts", path: "/admin/accounts" },
  { name: "Sub Accounts", path: "/admin/sub-accounts" },
  { name: "Requests", path: "/admin/requests" },
  { name: "Status Management", path: "/admin/status" },
  { name: "Restrictions", path: "/admin/restrictions" },
],


    Manager: [
      { name: "Pending Requests", path: "/manager/requests" },
      { name: "Review Frozen Accounts", path: "/manager/review-frozen" },
    ],

   Teller: [
  { name: "Create Account", path: "/teller/create-account" },
  { name: "Accounts List", path: "/teller/accounts" },
  { name: "Add Sub Account", path: "/teller/add-sub-account" },
],

  };

  const links = menu[role] || [];

  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-5 shadow-lg">
      <h2 className="text-xl font-bold mb-8">Welcome, {role}</h2>

      <nav className="space-y-3">
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium transition 
               ${isActive ? "bg-blue-900" : "hover:bg-blue-600"}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
