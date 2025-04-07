import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../../utils/UseLocalStorage';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <ThemeContext.Provider value={[ theme, setTheme ]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);