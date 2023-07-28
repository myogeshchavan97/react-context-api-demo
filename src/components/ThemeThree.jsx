import React, { useContext } from 'react';
import ThemeContext, { ThemeProvider } from '../context/ThemeContext';

const FirstComponent = () => {
  useContext(ThemeContext);
  console.log('from FirstComponent');
  return <div>FirstComponent</div>;
};

const SecondComponent = () => {
  console.log('from SecondComponent');
  return <div>SecondComponent</div>;
};

const ThemeThree = () => {
  return (
    <ThemeProvider>
      <FirstComponent />
      <hr />
      <SecondComponent />
    </ThemeProvider>
  );
};

export default ThemeThree;
