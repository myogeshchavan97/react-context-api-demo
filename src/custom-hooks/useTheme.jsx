import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (typeof context === 'undefined') {
    throw new Error('Use useTheme only inside the ThemeContext');
  }

  return context;
};

export default useTheme;
