import { useNavigate,Navigate } from "react-router-dom";
// import { , Link } from 'react-router-dom';

function ProtectedRoute({ children}){
    // const navigate = useNavigate();//why this is not working properly???

    const login = localStorage.getItem('login');
    if(!login){
        // return navigate('/login');//why this is not working properly???
        return <Navigate to="/login" />;
    }
    return (
        <div>
            {children}
        </div>
    )

}

export default ProtectedRoute;