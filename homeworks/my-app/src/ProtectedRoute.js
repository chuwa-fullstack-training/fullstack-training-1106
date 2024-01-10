import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({children}) {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    console.log(isLoggedIn);
 
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
}