import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  username: "",
  setUserName: (username) => {},
});

const AuthContextProvider = ({ children }) => {
  const [username, setUserName] = useState("");
  return (
    <AuthContext.Provider value={{ username, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
