"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { AuthProviderProps, IAuthContext, IUser } from "./type";

const AuthContext = createContext<IAuthContext | undefined>({
  isAuthenticated: null,
  setIsAuthenticated: () => {},
  isUserData: null,
  setIsUserData: () => {},
});

export const UseAuth: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<string | null>(null);
  const [isUserData, setIsUserData] = useState<IUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      try {
        const parsUser = JSON.parse(user);
        setIsAuthenticated(token);

        setIsUserData(parsUser);
      } catch (error) {
        console.error("Error al parsear el usuario:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, isUserData, setIsUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
