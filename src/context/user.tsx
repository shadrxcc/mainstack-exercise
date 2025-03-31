import React, { createContext, useContext, ReactNode } from "react";
import { User } from "../services/models/shared.model";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/apis/user";

interface UserContextType {
  user: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  return (
    <UserContext.Provider value={{ user: user ?? null }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
