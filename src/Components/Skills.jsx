import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  // FaNodeJs,
  FaAws,
  // FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiRedux,
  SiFirebase,
  // SiExpress,
  // SiMongodb,
   SiJquery,
  SiMysql,
  // SiKubernetes,
  SiFigma,
   SiSketch,
  SiClaude,
  SiGooglegemini,
  SiGithubcopilot,
   SiCanva,
    SiPostgresql,
} from "react-icons/si";

import { RiOpenaiFill } from "react-icons/ri";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux-Toolkit", icon: <SiRedux  /> },
      
    ],
  },

  {
    category: "Backend Development",
    items: [
      // { name: "Node.js", icon: <FaNodeJs /> },
      // { name: "Express.js", icon: <SiExpress /> },
      // { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MySQL", icon: < SiPostgresql /> },
    ],
  },

  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <FaAws /> },
      // { name: "Docker", icon: <FaDocker /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },

  {
    category: "AI Tools & Productivity",
    items: [
      { name: "ChatGPT", icon: <RiOpenaiFill /> },
      { name: "Claude", icon: <SiClaude /> },
      { name: "Gemini", icon: <SiGooglegemini /> },
      { name: "Perplexity", icon: "🧠" },
      { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
      { name: "Cursor AI", icon: "⚡" },
      { name: "Canva AI", icon: <SiCanva /> },
    ],
  },

  {
    category: "UI / UX Design",
    items: [
      { name: "Figma", icon: <SiFigma /> },
       { name: "Sketch", icon: <SiSketch /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-header">

        <span className="skills-tag">
          Technical Expertise
        </span>

        <h2>
          Engineering Solutions Through
          <span> Modern Technologies</span>
        </h2>

        <p>
          Leveraging software engineering principles, cloud technologies,
          modern frameworks, and AI-powered tools to build scalable,
          maintainable and impactful digital products.
        </p>

      </div>

      <div className="skills-container">

        {skills.map((group, index) => (
          <div className="skill-category" key={index}>

            <h3>{group.category}</h3>

            <div className="skills-grid">

              {group.items.map((skill, i) => (
                <div className="skill-card" key={i}>

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <span>{skill.name}</span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

      

      <div className="currently-learning">

        <h3>Currently Exploring </h3>

        <div className="learning-tags">
          <span>Backend Technology</span>
          <span>Prompt Engineering</span>
          <span>System Design</span>
          {/* <span>Microservices</span> */}
          {/* <span>Advanced React Patterns</span> */}
        </div>

      </div>

    </section>
  );
};

export default Skills;