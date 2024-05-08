// sections/Resume.jsx

import Section from '../components/Section';

const Resume = () => {
  return (
    <Section id="resume" title="Resume">
      <a href="/path/to/resume.pdf" download>Download my Resume</a>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </Section>
  );
};

export default Resume;
