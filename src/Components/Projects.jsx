import "./Project.css";
import {
  FaMapMarkedAlt,
  FaChartLine,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Uttarakhand Tourism Platform",
    tech: ["React.js", "JavaScript", "CSS"],
    description:
      "Interactive tourism platform showcasing districts, adventure activities, travel guides, and destination information with a modern responsive UI.",
    features: [
      "Adventure Activity Filtering",
      "District-wise Exploration",
      "Responsive Design",
    ],
  },

  {
    icon: <FaChartLine />,
    title: "FinTech Dashboard",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    description:
      "Financial analytics dashboard for monitoring customer loans, transactions, performance metrics, and business insights.",
    features: [
      "Analytics Dashboard",
      "Customer Management",
      "Data Visualization",
    ],
  },

  {
    icon: <FaUserCircle />,
    title: "Portfolio Website",
    tech: ["React.js", "CSS", "React Icons"],
    description:
      "Modern software engineer portfolio featuring interactive UI, responsive layouts, project showcases, and recruiter-friendly design.",
    features: [
      "Responsive Design",
      "Interactive Components",
      "Modern UI",
    ],
  },

  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Frontend",
    tech: ["React.js", "Redux"],
    description:
      "Scalable shopping application featuring product browsing, filtering, cart management, and optimized user experience.",
    features: [
      "Product Filtering",
      "Cart Management",
      "Responsive Layout",
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-header">

        <span className="projects-tag">
          Featured Work
        </span>

        <h2>
          Recent <span>Projects</span>
        </h2>

        <p>
          A collection of software solutions, web applications,
          and digital experiences built using modern technologies
          and engineering best practices.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-features">

              {project.features.map((feature, i) => (
                <span key={i}>
                  ✓ {feature}
                </span>
              ))}

            </div>

            <div className="project-tech">

              {project.tech.map((tech, i) => (
                <span key={i}>
                  {tech}
                </span>
              ))}

            </div>

            <div className="project-links">
              <button>Live Demo</button>
              <button>GitHub</button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;