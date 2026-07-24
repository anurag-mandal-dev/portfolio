import "./Skills.css";
import SkillCard from "./SkillCard";

function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Python",
        "Flask",
        "REST API"
      ]
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "SQLite"
      ]
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman"
      ]
    }
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        <div className="section-heading">
          <h2>Skills</h2>

          <p>
            Technologies and tools I use to build efficient,
            scalable and user-friendly applications.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;