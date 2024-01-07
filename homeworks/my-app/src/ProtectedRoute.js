import { Navigate } from "react-router-dom";

export default function ProtectedRoute({username, children}) {
    console.log("route", username);
    if (!username) {
        return <Navigate to="/login" />;
    }
    return children;
}