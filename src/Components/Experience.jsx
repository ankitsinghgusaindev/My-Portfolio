import "./Experience.css";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Decimal Technology Pvt Ltd",
      duration: "Jan 2024 - Jul 2024",
      icon: <FaLaptopCode />,
      description:
        "Integrated software components and third-party systems to improve accessibility, reliability, and overall product functionality.",
      achievements: [
        "Improved software accessibility & functionality",
        "Managed testing and validation procedures",
        "Integrated third-party services",
      ],
      skills: ["React.js", "JavaScript", "Testing", "System Validation"],
    },

    {
      role: "Software Developer",
      company: "Saarathi Finbiz Pvt Ltd",
      duration: "Oct 2020 - Jan 2024",
      icon: <FaCode />,
      description:
        "Developed and maintained software solutions using Agile methodologies while contributing to system testing and product delivery.",
      achievements: [
        "Delivered fintech software solutions",
        "Worked in Agile development cycles",
        "Performed testing and diagnostics",
      ],
      skills: ["JavaScript", "React.js", "MySQL", "Agile"],
    },
  ];

  return (
    <section className="experience-section" id="experience">

      <div className="experience-header">
        <span className="experience-tag">
          Professional Journey
        </span>

        <h2>
          My <span>Experience</span>
        </h2>
      </div>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-icon">
              {exp.icon}
            </div>

            <div className="timeline-content">

              <div className="experience-top">

                <span className="duration">
                  {exp.duration}
                </span>

                <span className="company-badge">
                  {exp.company}
                </span>

              </div>

              <h3>{exp.role}</h3>

              <p>{exp.description}</p>

              <div className="achievement-list">

                {exp.achievements.map((item, i) => (
                  <div key={i} className="achievement-item">
                    ✓ {item}
                  </div>
                ))}

              </div>

              <div className="experience-skills">

                {exp.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Experience;