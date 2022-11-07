import { createContext, ReactNode, useState } from "react";

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
}

type AuthContextData = {
  user: User | null;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() { }

  async function signOut() { }

  return (
    <AuthContext.Provider value={{ isSigningIn, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}



