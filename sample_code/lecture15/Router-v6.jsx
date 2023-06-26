import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

function Home() {
  console.log('home');
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  console.log('about');
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
