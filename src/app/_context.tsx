"use client";
import { createContext, useState, useContext, PropsWithChildren } from "react";

type ActivePageContextType = {
  activePage: "Business" | "Personal";
  setActivePage: React.Dispatch<React.SetStateAction<"Business" | "Personal">>;
};

export const ActivePageContext = createContext<
  ActivePageContextType | undefined
>(undefined);

export const ActivePageProvider = ({ children }: PropsWithChildren) => {
  const [activePage, setActivePage] = useState<"Business" | "Personal">(
    "Personal",
  );

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (context === undefined) {
    throw new Error("useActivePage must be used within a ActivePageProvider");
  }
  return context;
};
