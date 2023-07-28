import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ThemeContext = React.createContext();

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
