// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Dennis Angelov. All Rights Reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/Youthfulmaster" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/deny-a-989825308/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/24922949/deny-a" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
