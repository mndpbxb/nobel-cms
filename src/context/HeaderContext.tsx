import { createContext, useContext, useEffect, useState } from "react";

export const HeaderContext = createContext(undefined);

export const useHeaderDetails = () => {
  return useContext(HeaderContext);
};

export const HeaderContextProvider = (props) => {
  const [header, setHeader] = useState<string>("");
  const [subHeader, setSubHeader] = useState<string>("");

  const value: {
    header: string;
    setHeader: React.Dispatch<React.SetStateAction<string>>;
    subHeader: string;
    setSubHeader: React.Dispatch<React.SetStateAction<string>>;
  } = {
    header,
    setHeader,
    subHeader,
    setSubHeader,
  };

  return (
    <HeaderContext.Provider value={value}>
      {props.children}
    </HeaderContext.Provider>
  );
};
