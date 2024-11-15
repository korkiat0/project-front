/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { authUser, isAuthUserLoading } = useAuth();
  if (!authUser && !isAuthUserLoading) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isAuthUserLoading && <h1>loading...</h1>}
      {children}
    </>
  );
}
