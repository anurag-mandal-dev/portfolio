import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="section-heading">
          <h2>About Me</h2>
          <p>
            Passionate about building scalable backend applications and
            continuously improving my development skills.
          </p>
        </div>

        <div className="about-content">

          <div className="about-left">

            <h3>Python Backend Developer</h3>

            <p>
              I'm <span>Anurag Mandal</span>, a B.Sc. Computer Science student
              passionate about backend development using Python. I enjoy
              building real-world applications, designing databases, developing
              REST APIs, and solving programming challenges.
            </p>

            <p>
              My goal is to become a skilled Backend Developer by building
              practical projects and continuously learning modern technologies.
            </p>

          </div>

          <div className="about-right">

            <div className="about-card">
              <h4>Python Development</h4>
              <p>Building clean, efficient and scalable backend applications.</p>
            </div>

            <div className="about-card">
              <h4>Backend Development</h4>
              <p>Creating REST APIs using Flask and integrating databases.</p>
            </div>

            <div className="about-card">
              <h4>Database</h4>
              <p>Working with SQL, SQLite and MySQL.</p>
            </div>

            <div className="about-card">
              <h4>Frontend</h4>
              <p>Developing responsive interfaces using React and CSS.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;