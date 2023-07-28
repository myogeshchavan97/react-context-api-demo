import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext';

const FirstComponent = () => {
  console.log('from FirstComponent');
  return <div>FirstComponent</div>;
};

const SecondComponent = () => {
  console.log('from SecondComponent');
  return <div>SecondComponent</div>;
};

const ThemeOne = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <div className='mb-2'>Theme: {selectedTheme}</div>
      <Button onClick={toggleTheme}>Change Theme</Button>
      <ThemeContext.Provider value={{ selectedTheme }}>
        <FirstComponent />
        <hr />
        <SecondComponent />
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeOne;
