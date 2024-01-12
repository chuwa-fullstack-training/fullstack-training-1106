import { Routes, Route} from 'react-router-dom';
import UserList from "./component/UserList";
import Login from "./component/Login"
import Home from "./component/Home"
import ProtectedRoute from './component/ProtectedRoute';
import UserPorfile from './component/UserProfile';
function App(){
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={
                <ProtectedRoute>
                    <UserList />
                </ProtectedRoute>
            } />
            <Route path='/users/:login' element={
                <ProtectedRoute>
                    <UserPorfile  />
                </ProtectedRoute>
            } />
        </Routes>
    )

}






export default App;