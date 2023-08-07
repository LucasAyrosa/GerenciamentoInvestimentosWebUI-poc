import React, { ReactNode, createContext, useContext, useState } from 'react';
import { loginRequest } from '../interfaces/login';
import { apiLogin } from '../services/api';

interface authContextType {
    login: (loginData: loginRequest) => Promise<void>,
    logout: () => void,
    isLoggedIn: boolean
}

const AuthContext = createContext({} as authContextType);

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({ children}: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const  login =async (loginData: loginRequest) => {
    try {
        await apiLogin(loginData);
        setIsLoggedIn(true);
    }catch(error) {

    }
  };

  const logout = () => {
    localStorage.removeItem('gipucmgpoc');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
