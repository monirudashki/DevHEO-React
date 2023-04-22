import { useState, useEffect, createContext } from "react";
import React from "react";
import { IUser } from "../Types/User.type";
import { authContextProviderProps } from "./authContextProviderProps.types";
import { AuthContextValue } from "./authContextValue.type";
import { getCurrentUser } from "../Services/authService";

export const AuthContext = createContext<AuthContextValue | null>(null);

//TODO look for any to be FunctionComponent with props

export const AuthProvider: any = ({ children }: authContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        setIsLoading(false);
        setCurrentUser(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const currentUserLoginHandler = (userData: IUser) => {
    setCurrentUser(userData);
  };

  if (!isLoading) {
    return (
      <AuthContext.Provider
        value={{
          currentUser,
          currentUserLoginHandler,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
};
