import { createContext, useEffect, useState } from "react";
import authApi from "../apis/auth";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);
  const [editRepair, setEditRepair] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getMe();
          setAuthUser(res.data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsAuthUserLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (dataLogin) => {
    const res = await authApi.login(dataLogin);
    setAccessToken(res.data.accessToken);
    const getAuthUser = await authApi.getMe();
    setAuthUser(getAuthUser.data.user);

    console.log(res.data);
  };
  const loginAdmin = async (dataLogin) => {
    const res = await authApi.loginAdmin(dataLogin);
    setAccessToken(res.data.accessToken);
    const getAuthUser = await authApi.getMe();
    setAuthUser(getAuthUser.data.user);

    console.log(res.data);
  };
  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        loginAdmin,
        logout,
        authUser,
        isAuthUserLoading,
        editRepair,
        setEditRepair,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
