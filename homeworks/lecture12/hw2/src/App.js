import React from 'react';
import './App.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
     Header
    </header>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
    Nav
    </nav>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
    Aside
    </aside>
  );
};

const Content = () => {
  return (
    <div className="content">
     Content
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
    Footer
    </footer>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
