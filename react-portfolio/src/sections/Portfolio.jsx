// src/sections/Portfolio.jsx
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import Section from '../components/Section';
import './Portfolio.css';  // Ensure you create a Portfolio.css for styling

const projects = [
  {
    id: 1,
    title: 'Weather-Dashboard',
    imageUrl: project1,
    githubUrl: 'https://github.com/Youthfulmaster/Weather-Dashboard?tab=readme-ov-file',
  },
  {
    id: 2,
    title: 'Coding quiz',
    imageUrl: project2,
    githubUrl: 'https://github.com/Youthfulmaster/codingQuiz',
    className: 'large-item', // Ensure this class is applied
  },
  {
    id: 3,
    title: 'Project Three',
    imageUrl: project3,
    githubUrl: 'https://github.com/YourUsername/project3',
  },
];

const Portfolio = () => {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className={`portfolio-item ${project.className || ''}`}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
              <p>{project.title}</p>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
