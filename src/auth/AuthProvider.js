import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = {
    user,
    login() {
      setUser({ id: 1, username: 'eze324'})
    },
    logout() {
      setUser(null)
    },
    isLogged() {
      return !!user;
    }
  }

  return <AuthContext.Provider value={contextValue}>
    { children }
  </AuthContext.Provider>
}

export default AuthProvider;