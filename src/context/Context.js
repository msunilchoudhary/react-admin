import { createContext, useState } from "react";

const AppContext = createContext({
    isShowSidebarDropdown: false,
    setIsShowSidebarDropdown: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [isShowSidebarDropdown, setIsShowSidebarDropdown] = useState(false);

  return (
    <AppContext.Provider value={{ isShowSidebarDropdown, setIsShowSidebarDropdown }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;