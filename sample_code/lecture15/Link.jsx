import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" state={{ id: '123' }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/dashboard" reloadDocument>
            Dashboard
          </Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

function Home() {
  console.log('home');
  return (
    <div>
      <h2>Home</h2>
      <Outlet />
    </div>
  );
}

function About() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  console.log('dashboard');
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
