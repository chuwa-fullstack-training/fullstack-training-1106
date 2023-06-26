import * as React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import Home from './components/Home';
import './styles.css';

const About = React.lazy(() =>
  waitForImport('./components/About', 1500).then(path => import(path))
);
const Dashboard = React.lazy(() =>
  waitForImport('./components/Dashboard', 1500).then(path => import(path))
);

function waitForImport(path, delay) {
  return new Promise(resovle => {
    setTimeout(() => resovle(path), delay);
  });
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<Spin size="large" />}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <React.Suspense fallback={<Spin size="large" />}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <header>
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="dashboard">Dashboard</Link>
        </nav>
      </header>
      <main
        style={{
          height: '500px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Outlet />
      </main>
      <footer>®2023 terms and conditions</footer>
    </>
  );
}

function NoMatch() {
  return <div>404 not found</div>;
}
