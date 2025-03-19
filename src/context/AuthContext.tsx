
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data storage
const mockUsers: Record<string, { email: string; password: string }> = {};
const STORAGE_KEY = 'fashionweek-auth-user';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simple mock auth
    setIsLoading(true);
    
    // Add a small delay to simulate network
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const userKey = email.toLowerCase();
    if (!mockUsers[userKey] || mockUsers[userKey].password !== password) {
      setIsLoading(false);
      throw new Error('Invalid credentials');
    }
    
    const user = { id: userKey, email };
    setUser(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    setIsLoading(false);
  };

  const signup = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Add a small delay to simulate network
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const userKey = email.toLowerCase();
    if (mockUsers[userKey]) {
      setIsLoading(false);
      throw new Error('User already exists');
    }
    
    mockUsers[userKey] = { email, password };
    const user = { id: userKey, email };
    setUser(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    setIsLoading(false);
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
