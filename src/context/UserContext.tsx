import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(undefined);

export const useUserDetails = () => {
  return useContext(UserContext);
};

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const value = {
    currentUser,
    setCurrentUser,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>

  );
};
