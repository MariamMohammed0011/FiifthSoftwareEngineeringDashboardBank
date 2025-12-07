import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Unauthorized from "./pages/Auth/Unauthorized";
import MainLayout from "./layouts/MainLayout";

import ProtectedRoute from "./components/ProtectedRoute";

// Admin
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountTypeList from "./pages/AccountTypes/AccountTypeList";
import AddAccountType from "./pages/AccountTypes/AddAccountType";
import EditAccountType from "./pages/AccountTypes/EditAccountType";

// Teller Pages
import CreateAccount from "./pages/Accounts/CreateAccount";
import AccountList from "./pages/Accounts/AccountList";
import AccountDetails from "./pages/Accounts/AccountDetails";
import EditAccount from "./pages/Accounts/EditAccount";

// Manager
// You will replace this later
// import ManagerRequests from "./pages/Manager/ManagerRequests";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Admin pages */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />
<Route
  path="/admin/account-types"
  element={
    <ProtectedRoute allowedRoles={["Admin"]}>
      <MainLayout>
        <AccountTypeList />
      </MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/account-types/add"
  element={
    <ProtectedRoute allowedRoles={["Admin"]}>
      <MainLayout>
        <AddAccountType />
      </MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/account-types/edit/:id"
  element={
    <ProtectedRoute allowedRoles={["Admin"]}>
      <MainLayout>
        <EditAccountType />
      </MainLayout>
    </ProtectedRoute>
  }
/>
      {/* ==================== TELLER ROUTES ==================== */}

      {/* Create Account */}
      <Route
        path="/teller/create-account"
        element={
          <ProtectedRoute allowedRoles={["Teller"]}>
            <MainLayout>
              <CreateAccount />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Account List */}
      <Route
        path="/teller/accounts"
        element={
          <ProtectedRoute allowedRoles={["Teller"]}>
            <MainLayout>
              <AccountList />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* View Account */}
      <Route
        path="/teller/accounts/view/:id"
        element={
          <ProtectedRoute allowedRoles={["Teller"]}>
            <MainLayout>
              <AccountDetails />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Edit Account */}
      <Route
        path="/teller/accounts/edit/:id"
        element={
          <ProtectedRoute allowedRoles={["Teller"]}>
            <MainLayout>
              <EditAccount />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* ==================== MANAGER ==================== */}
      {/* <Route
        path="/manager/requests"
        element={
          <ProtectedRoute allowedRoles={["Manager"]}>
            <MainLayout>
              <ManagerRequests />
            </MainLayout>
          </ProtectedRoute>
        }
      /> */}

    </Routes>
  );
}

export default App;
