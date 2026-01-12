import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('menuflexible_email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const login = (userEmail: string) => {
    localStorage.setItem('menuflexible_email', userEmail);
    setEmail(userEmail);
  };

  const logout = () => {
    localStorage.removeItem('menuflexible_email');
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ email, login, logout, isAuthenticated: !!email }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
