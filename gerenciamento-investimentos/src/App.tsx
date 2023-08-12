import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SidebarLayout from './components/SidebarLayout';
import DashboardPage from './DashboardPage';
import { AuthProvider } from './contexts/AuthContext';
import {useAuth} from './contexts/AuthContext';
import AddOperationPage from './AddOperationPage';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <React.StrictMode>
      <AuthProvider >
        <Router>
          <Routes>
            <Route path="/login" Component={LoginPage} />
            <Route path='/signup' Component={SignupPage} />
            <Route path="/" element={<SidebarLayout />} >
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path='/operacao/nova' element={<AddOperationPage />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer position="top-right" autoClose={3000} />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
