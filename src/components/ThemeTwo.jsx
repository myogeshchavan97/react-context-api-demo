import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';

const FirstComponent = () => {
  console.log('from FirstComponent');
  return <div>FirstComponent</div>;
};

const SecondComponent = () => {
  console.log('from SecondComponent');
  return <div>SecondComponent</div>;
};

const ThemeTwo = () => {
  return (
    <ThemeProvider>
      <FirstComponent />
      <hr />
      <SecondComponent />
    </ThemeProvider>
  );
};

export default ThemeTwo;
