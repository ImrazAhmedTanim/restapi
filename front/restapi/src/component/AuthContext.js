import React, { useState, useContext } from "react";

const AuthContext = React.createContext();

const AuthInfo = ({ children }) => {
  const [isLoggedIn, setLoggedin] = useState(false);

  const handleAuthInfo = () => {
    setLoggedin(true);
  };

  const handleLogout = () => {
    setLoggedin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleAuthInfo, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthInfo;
