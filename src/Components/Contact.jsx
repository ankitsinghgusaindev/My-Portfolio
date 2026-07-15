import "./Contact.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  // FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="contact-tag">Let's Connect</span>

        <h2>
          Let's Build Something
          <span> Amazing Together</span>
        </h2>

        <p>
          Open to Software Engineering, Frontend Development, and AI-powered
          product opportunities. Feel free to reach out for collaboration or
          discussion.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>

          <h3>Phone</h3>

          <p>+91 8826041265</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <h3>Email</h3>

          <p>ankit.gusain97@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>

          <h3>Location</h3>

          <p>Tehri Garhwal Uttarakhand</p>
        </div>
      </div>

      <div className="social-links">
        {/* <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a> */}

        <a
          href="https://github.com/ankitsinghgusaindev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
      </div>

      <div className="contact-cta">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ankit.gusain97@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
