import { useEffect } from "react";
import Typed from "typed.js";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Experience from "../Experience/Experience"
import ContactMe from "../ContactMe/ContactMe";
import profileImage from "../../static/images/pro-transparent-back.jpg";
import "./AboutMe.css";

function AboutMe() {
  useEffect(() => {
    const options = {
      strings: [
        "is a full-stack engineer...",
        "is adept at agile methodology...",
        "is experienced in designing user-centric applications and systems...",
        "is focused on optimizing processes for efficiency...",
        "is proficient in project management and collaboration...",
        "is knowledgeable in system administration...",
        "is exceptional at debugging complex issues...",
        "is specialized in system and application design...",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".typed", options);

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div id="about-me-section">
        <img
          className="profile-image"
          src={profileImage}
          alt="profile img of lainey"
        />
        <div>
          <h2 id="section-header">Lainey (Dailo) Paddock</h2>

          <div id="typed-container">
            <p id="typed">
            &nbsp;<span className="typed"></span>
          </p>
          </div>


          <p id="section-paragraph">
            Software engineer and lifelong learner with 10+ years of experience
            designing technical solutions for HR. Now a full-stack engineer, I
            thrive at the intersection of business and technology.
          </p>


        </div>
      </div>
      <Skills />
      <Portfolio />
      <Experience />
      <ContactMe />
    </>
  );
}

export default AboutMe;
