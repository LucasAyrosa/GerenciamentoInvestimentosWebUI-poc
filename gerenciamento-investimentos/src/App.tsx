import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/login" Component={LoginPage} />
      <Route path='/signup' Component={SignupPage} />
    </Routes>
  </Router>
  <ToastContainer position="top-right" autoClose={3000} />
  </>
  );
}

export default App;
