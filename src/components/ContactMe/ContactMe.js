import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import "./ContactMe.css";

function ContactMe() {
  return (
    <div id = "contact-me-section">
      <div className="container-purple">
        <h2 className="header-white">Let's Build Something Cool</h2>
        <div id="contacts-grid">
          <div className="contact-tile">
            <FaLocationDot className="icon" />
            <h3 className="contact-method">Location:</h3>
            <p>San Francisco, California</p>
          </div>
          <div className="contact-tile">
            <MdEmail className="icon" />
            <h3 className="contact-method">Email:</h3>
            <a href="mailto:lainey.code@gmail.com">lainey.code@gmail.com</a>
          </div>
          <div className="contact-tile">
            <FaGithub className="icon" />
            <h3 className="contact-method">Github:</h3>
            <a href="https://github.com/lainey1">lainey1</a>
          </div>
          <div className="contact-tile">
            <CiLinkedin className="icon" />
            <h3 className="contact-method">LinkedIn:</h3>
            <a href="https://www.linkedin.com/in/laineypad">laineypad</a>
          </div>
          <div className="contact-tile">
            <FaMobileAlt className="icon" />
            <h3 className="contact-method">Phone:</h3>
            415-610-1885
          </div>
          <div className="contact-tile">
            <FaMedium className="icon" />
            <h3 className="contact-method">Medium:</h3>
            <a href="https://medium.com/@laineycodes">@laineycodes</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
