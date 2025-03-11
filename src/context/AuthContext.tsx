import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthUser,
  UserRole,
  getCurrentUser,
  signIn,
  signOut,
  signUp,
} from "../lib/auth";

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: any }>;
  register: (
    email: string,
    password: string,
    fullName: string,
    role: UserRole,
  ) => Promise<{ success: boolean; error?: any }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true);
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setIsLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user: authUser, error } = await signIn(email, password);
      if (error) throw error;
      if (!authUser) throw new Error("Login failed");

      setUser({
        id: authUser.id,
        email: authUser.email || "",
        fullName: authUser.fullName,
        role: authUser.role,
      });

      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error };
    }
  };

  const register = async (
    email: string,
    password: string,
    fullName: string,
    role: UserRole,
  ) => {
    try {
      const { user: authUser, error } = await signUp(
        email,
        password,
        fullName,
        role,
      );
      if (error) throw error;
      if (!authUser) throw new Error("Registration failed");

      // After registration, we'll redirect to login
      return { success: true };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error };
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
