import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ path, element }) => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      window.history.pushState({}, "", path);
      return navigate("/login");
    }
  }, []);
  return element;
};

export default ProtectedRoute;
