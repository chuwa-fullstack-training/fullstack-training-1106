import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';
import { AuthProvider } from './AuthContext.jsx'; 

function App() {
    return (
      <Router>
        <AuthProvider>
          <Page />
        </AuthProvider>
      </Router>
    )
}

export default App;