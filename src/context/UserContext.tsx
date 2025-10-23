import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../types';

interface UserContextType {
  user: User | null;
  login: (role: 'admin' | 'customer') => void;
  logout: () => void;
  isAdmin: () => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({
    id: 1,
    name: 'Guest User',
    role: 'customer'
  });

  const login = (role: 'admin' | 'customer') => {
    setUser({
      id: 1,
      name: role === 'admin' ? 'Admin User' : 'Customer User',
      role
    });
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider..');
  }
  return context;
};