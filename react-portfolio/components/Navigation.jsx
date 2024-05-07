// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About Me</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : undefined}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink></li>
        <li><NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : undefined}>Resume</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
