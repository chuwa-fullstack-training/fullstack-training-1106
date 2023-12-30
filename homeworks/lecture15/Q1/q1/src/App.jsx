// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import { AuthProvider } from './AuthContext'; 

function App() {
  return (
    <Router>
      <AuthProvider> 
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
