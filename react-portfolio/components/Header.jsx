// src/components/Header.jsx
import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Dennis Angelov</h1> 
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
