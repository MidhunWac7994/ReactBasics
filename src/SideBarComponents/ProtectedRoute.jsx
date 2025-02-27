import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../atom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  useEffect(() => {

    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus !== "true" && !isLoggedIn) {

      window.location.href = "/";
    }
  }, [isLoggedIn]);

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
