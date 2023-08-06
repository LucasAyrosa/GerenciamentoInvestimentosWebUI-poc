import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" Component={LoginPage} />
      <Route path='/signup' Component={SignupPage} />
    </Routes>
  </Router>
  );
}

export default App;
