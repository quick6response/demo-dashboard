import React, { useState, ReactNode, FC } from "react";
import { AlertContext } from "./AlertContext";

type AlertProviderProperties = {
  children: ReactNode;
};
export const AlertProvider: FC<AlertProviderProperties> = ({ children }) => {
  const [alert, setAlert] = useState<ReactNode | null>(null);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
