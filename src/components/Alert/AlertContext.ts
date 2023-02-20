import { createContext, ReactNode } from "react";

export const AlertContext = createContext<{
  alert: ReactNode;
  setAlert: (alert: ReactNode) => void;
}>({
  alert: null,
  setAlert: () => void 0,
});
