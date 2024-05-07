// src/components/Section.jsx
import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id}>
      <div className="section-content">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
