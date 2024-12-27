import { FaLocationDot } from "react-icons/fa6";
import "./Experience.css"

function Experience() {
  return (
    <div id="experience-section">



    <div id="experience-container">
      <h2>Recent Experience</h2>

      <div className ="experience"> Full-Stack Software Engineer with 10+ years of experience in HR technology and operations management, transitioning into software engineering. Skilled in both frontend and backend development, specializing in JavaScript, Python, SQL, and frameworks like React, Flask, and Express. Experienced in driving process optimization and delivering innovative, user-centric solutions that improve operational efficiency.
      </div>



      <div>
          <div className="experience">
            <h3 className="company">App Academy / Professional Development</h3>
            <div className="dates"> Feb 2024 - Present </div>
            <ul className="bullets">
              <li>Took a career break to pursue a 6-month intensive training program in full-stack web development.</li>
              <li>Gained hands-on experience in building web applications using JavaScript, Python, SQL, React.js, Express.js, and other modern technologies.</li>
              <li>Focused on mastering both frontend and backend development, with an emphasis on building scalable and user-friendly solutions.</li>

            </ul>
            <div className="location"><FaLocationDot />{"    "}San Francisco, California</div>
          </div>

          <div className="experience">
            <h3 className="company">Solidigm</h3>
            <div className="dates"> Oct 2021 - Feb 2024 </div>
            <div className="title">HR Operations & Technology Manager</div>
            <ul className="bullets">
              <li>Designed and implemented HR and Finance systems for over 1,000 employees, streamlining operations and integrating an AI-powered chatbot with Moveworks to automate global HR support and enhance user experience.</li>
              <li>Collaborated with stakeholders to prioritize and deploy 100+ ServiceNow and Workday system improvements using Agile methodologies.</li>
              <li>Enhanced the team's operational reporting capabilities and utilized data analysis to shape HR leadership strategies.</li>
              <il>Implemented Agile methodologies to manage team sprints and project timelines effectively.</il>
            </ul>
            <div className="location"><FaLocationDot />{"    "}San Francisco, California</div>

          </div>

          <div className="experience">
            <h3 className="company">Google</h3>
            <div className="title">HR Operations Partner</div>
            <div className="dates"> March 2013 - Oct 2021 </div>
            <ul className="bullets">
              <li>Managed global HR programs, automating workflows with SQL and Google Apps Script for 150,000+ employees, and documenting user journeys and process workflows to identify improvements.</li>
              <li>Streamlined Leaves of Absence Workday/HRIS logic, reducing manual processing time by 70% and improving compliance.</li>
              <li>Designed Google's internal process automation tool for COVID-19 leave requests, streamlining workflows and scaling support for a workforce of 100,000+ employees.</li>
              <il></il>
            </ul>
            <div className="location"><FaLocationDot />{"    "}San Francisco, California</div>

          </div>
        </div>

    </div>

    <div id="button-container">
            <a
              href="https://docs.google.com/document/d/1KiGK1FMftqQkUUQ2_-_DePFt3D-b19Oeq7qtliHAXYY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
              >
              View My Complete Resume
            </a>
          </div>

    </div>
  )
}

export default Experience;
