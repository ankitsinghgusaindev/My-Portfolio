import "./Hero.css";
import ProfileImage from "../assets/AnkitImg.png";

import { FaDownload, FaArrowRight } from "react-icons/fa";

const downloadResume = async () => {
  try {
    const response = await fetch("/Ankit_Singh_Gusain_Resume_SDE.pdf");

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "Ankit_Singh_Gusain_Resume_SDE.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="availability">
          <span></span>
          Available for Opportunities
        </div>

        <div className="hero-tag">
          Software Engineer • React Developer • AI Solutions Builder
        </div>

        <h1>
          Hi, I'm <br />
          <span>Ankit Singh Gusain</span>
        </h1>

        <h2>React Developer</h2>

        <p>
          Software Engineer focused on building scalable applications,
          cloud-native solutions, and AI-powered digital products. Passionate
          about solving complex problems through modern technologies and clean
          engineering practices.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={downloadResume}>
            Download Resume
            <FaDownload/>
          </button>

          <a href="#projects" className="secondary-btn">
            View Projects 
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-wrapper">
          <img src={ProfileImage} alt="Ankit Singh Gusain" />
        </div>

        <div className="hero-stats">
          <div>
            <h3>3.5+</h3>
            <span>Years</span>
          </div>

          <div>
            <h3>15+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>10+</h3>
            <span>Tech Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
