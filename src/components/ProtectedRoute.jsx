import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { token, role } = useAuth();

  // غير مسجل دخول
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // مسجل دخول لكن ما عنده صلاحية للصفحة
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;
