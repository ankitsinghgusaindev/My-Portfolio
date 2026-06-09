import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-tag">About Me</span>

          <h2>
            Building Software That Solves
            <span> Real Business Problems</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm <strong>Ankit Singh Gusain</strong>, a Software Engineer with
              3+ years of professional experience delivering enterprise-grade
              applications and software solutions for FinTech organizations.
            </p>

            <p>
              Throughout my journey, I have contributed to software development,
              system testing, application modernization, and performance
              optimization while working across frontend, databases, and cloud
              technologies.
            </p>

            <p>
              My expertise lies in building scalable web applications using
              React.js, JavaScript, and AWS while following modern engineering
              practices, Agile methodologies, and clean architecture principles.
            </p>

            <p>
              Currently exploring AI-powered development workflows, intelligent
              automation, cloud-native architectures, and modern software
              engineering practices to build smarter digital products.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>💻 Software Engineering</h3>
              <p>Designing scalable and maintainable software systems.</p>
            </div>

            <div className="highlight-card">
              <h3>🏦 FinTech Experience</h3>
              <p>
                Delivered solutions supporting financial services and enterprise
                workflows.
              </p>
            </div>

            <div className="highlight-card">
              <h3>☁️ Cloud & DevOps</h3>
              <p>Experience with AWS, Docker, Git</p>
            </div>

            <div className="highlight-card">
              <h3>🤖 AI & Automation</h3>
              <p>Exploring AI-driven development and intelligent automation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
