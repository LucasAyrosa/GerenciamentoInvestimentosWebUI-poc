import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import SidebarLayout from './components/SidebarLayout';
import DashboardPage from './DashboardPage';

function App() {
  const isUserLoggedIn = false;

  return (
    <>
    <Router>
    <Routes>
      <Route path="/login" Component={LoginPage} />
      <Route path='/signup' Component={SignupPage} />
      <Route path="/" element={<SidebarLayout authorized={isUserLoggedIn} />} >
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      {/* <Route path='**' /> */}
    </Routes>
  </Router>
  <ToastContainer position="top-right" autoClose={3000} />
  </>
  );
}

export default App;
