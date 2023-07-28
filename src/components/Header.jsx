import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsSun } from 'react-icons/bs';
import useTheme from '../custom-hooks/useTheme';

const Header = () => {
  const { selectedTheme, toggleTheme } = useTheme();
  console.log('from Header');
  return (
    <header className='header'>
      <h1>Contact Manager</h1>
      {selectedTheme === 'light' ? (
        <HiOutlineMoon size={25} className='icon' onClick={toggleTheme} />
      ) : (
        <BsSun size={25} className='icon' onClick={toggleTheme} />
      )}
    </header>
  );
};

export default Header;
