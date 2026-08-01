import "./Projects.css";
import ProjectCard from "./ProjectCard";

import societyImg from "../../assets/projects/society.jpg";
import routineImg from "../../assets/projects/routine.png";
import portfolioImg from "../../assets/projects/portfolio.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      image: societyImg,
      title: "Society Complaint Management System",

      description:
        "A Flutter application that allows residents to register complaints, upload images and track complaint status in real time.",

      tech: [
        "Flutter",
        "Firebase",
        "Firestore",
        "Firebase Storage",
      ],

      github: "#",
      demo: "#",
    },

    {
      id: 2,
      image: routineImg,

      title: "Daily Routine Tracker",

      description:
        "A productivity application that helps users organize daily tasks, monitor progress and receive reminder notifications.",

      tech: [
        "Flutter",
        "Provider",
        "Shared Preferences",
        "Notifications",
      ],

      github: "#",
      demo: "#",
    },

    {
      id: 3,

      image: portfolioImg,

      title: "Personal Portfolio Website",

      description:
        "A modern portfolio website built with React to showcase my projects, skills, education and technical journey.",

      tech: [
        "React",
        "CSS",
        "JavaScript",
        "Git",
      ],

      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="section-heading">
          <h2>Projects</h2>

          <p>
            A selection of projects that reflect my learning,
            technical skills and problem-solving approach.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;