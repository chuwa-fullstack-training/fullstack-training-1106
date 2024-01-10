import { Navigate, Outlet, useLocation} from "react-router-dom";

export default function Auth (){
    const username = localStorage.getItem("username");
    const location = useLocation();

    if(!username){
        return (<Navigate to="/login" state={{from: location.pathname}}></Navigate>)
    }

    return (<Outlet></Outlet>)
}