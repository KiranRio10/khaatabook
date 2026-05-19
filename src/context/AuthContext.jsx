import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if(storedUser){
      setUser(JSON.parse(storedUser));
    }

  }, []);

  const login = (email, password) => {

    const loggedUser = { email };

    setUser(loggedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(loggedUser)
    );
  };

  const logout = () => {

    setUser(null);

    localStorage.removeItem("user");
  };

  return(
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;