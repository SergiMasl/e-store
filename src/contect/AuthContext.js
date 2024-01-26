// AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(Cookies.get("authToken") || null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    setAuthToken(token || null);
  }, []); // Run once on component mount

  const updateAuthToken = (token) => {
    setAuthToken(token);
    if (token) {
      Cookies.set("authToken", token);
    } else {
      Cookies.remove("authToken");
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, updateAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
