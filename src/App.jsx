import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Routes حسب الدور */}
      <Route path="/admin/dashboard" element={<h1>Admin Dashboard</h1>} />
      <Route path="/manager/accounts" element={<h1>Manager Accounts</h1>} />
      <Route path="/teller/create-account" element={<h1>Teller Create Account</h1>} />
    </Routes>
  );
}

export default App;
