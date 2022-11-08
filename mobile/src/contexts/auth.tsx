import { createContext, ReactNode, useEffect, useState } from "react";
import Constants from 'expo-constants';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";

const SCOPE = 'read:user';
const USER_STORAGE = '@nlwheat:user';
const TOKEN_STORAGE = '@nlwheat:token';

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

type AuthResponse = {
  token: string;
  user: User;
}

type AuthorizationResponse = {
  params: {
    code?: string;
  };
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    setIsSigningIn(true);
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${Constants.expoConfig?.extra?.CLIENT_ID}&scope=${SCOPE}`;
    const { params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
    if (params?.code) {
      const authResponse = await api.post<AuthResponse>('/authenticate', { code: params.code });
      const { user, token } = authResponse.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
      await AsyncStorage.setItem(TOKEN_STORAGE, token);
      setUser(user);
    }

    setIsSigningIn(false);
  }

  async function signOut() { }

  return (
    <AuthContext.Provider value={{ isSigningIn, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}



