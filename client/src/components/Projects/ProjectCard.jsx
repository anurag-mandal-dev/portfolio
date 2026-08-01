import "./ProjectCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      {/* Image */}
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      {/* Content */}
      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {/* Tech Stack */}
        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="demo-btn"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;