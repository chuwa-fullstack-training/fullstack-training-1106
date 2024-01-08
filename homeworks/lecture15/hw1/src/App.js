import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import {AuthProvider} from './AuthContext';
import RequireAuth from './RequireAuth';
import GitHubUsers from "./GitHubUsers";
import UserDetail from './UserDetail';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route
                            path="/users"
                            element={
                                <RequireAuth>
                                    <GitHubUsers/>
                                </RequireAuth>
                            }
                        />
                        <Route path="/users/:login" element={
                            <RequireAuth>
                                <UserDetail/>
                            </RequireAuth>}
                        />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
