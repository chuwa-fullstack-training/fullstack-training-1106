import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function ProtectedRoute({ children }) {
  const user = useMemo(() => localStorage.getItem("user"), []);

  const location = useLocation().pathname;
  if (!user) {
    return <Navigate to="/login" state={{from: location}} />;
  }

  return <>{children}</>;
}
