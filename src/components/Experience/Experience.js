import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const ExperienceItem = ({ company, dates, title, bullets, location }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-1">{company}</h3>
    {title && <div className="text-purple-600 font-medium mb-1">{title}</div>}
    <div className="text-gray-600 mb-4">{dates}</div>
    <ul className="space-y-2 mb-4">
      {bullets.map((bullet, index) => (
        <li key={index} className="text-gray-700 flex items-start">
          <span className="text-purple-500 mr-2 mt-1.5">•</span>
          {bullet}
        </li>
      ))}
    </ul>
    <div className="flex items-center text-gray-600 gap-2">
      <FaLocationDot className="text-purple-500" />
      {location}
    </div>
  </div>
);

const CertificationItem = ({ title, institution, dates, achievements }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
    <div className="text-purple-600 font-medium mb-1">{institution}</div>
    <div className="text-gray-600 mb-4">{dates}</div>
    {achievements && (
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700 flex items-start">
            <span className="text-purple-500 mr-2 mt-1.5">•</span>
            {achievement}
          </li>
        ))}
      </ul>
    )}
  </div>
);

function Experience() {
  const experiences = [
    {
      company: "Solidigm",
      dates: "October 2021 - February 2024",
      title: "Technology Solutions Manager",
      bullets: [
        "Partnered with Moveworks and engineering to develop an AI-powered HR chatbot, improving monthly ticket resolution efficiency by 70%",
        "Developed and optimized ServiceNow workflows and interactive dashboards using JavaScript, HTML/CSS, improving system performance and user experience",
        "Led Agile development sprints for 100+ system improvements, managing full testing lifecycle and deployment strategies for enterprise applications",
        "Spearheaded the design and implementation of scalable HR and Finance systems for 1,000+ employees, including global travel and expense systems (Concur, Navan) and ServiceNow HRSD for centralized employee request management",
      ],
      location: "San Francisco, California",
    },
    {
      company: "Google",
      dates: "March 2013 - October 2021",
      title: "Technical Operations Engineer",
      bullets: [
        "Engineered automation solutions using JavaScript and Google Apps Script, reducing manual processing time by 80%",
        "Developed COVID-19 leave request system handling 100,000+ employees, implementing complex business logic and workflow automation",
        "Led migration of Global Benefits team from internal case management tool to Salesforce, improving efficiency and scalability through discovery, design, training, and implementation",
        "Optimized Workday/HRIS systems through custom SQL queries and workflow automation, achieving 70% reduction in processing time",
      ],
      location: "San Francisco, California",
    },
  ];

  const certifications = [
    {
      title: "Software Engineering Certificate",
      institution: "App Academy",
      dates: "January 2025",
      achievements: [
        "Developed full-stack applications using React, Redux, Express, and Flask, implementing RESTful APIs and complex state management patterns",
        "Built and deployed scalable web applications with PostgreSQL databases, implementing efficient data models and optimizing query performance",
        "Engineered responsive front-end interfaces using modern JavaScript (ES6+), implementing custom hooks and optimizing component lifecycle",
      ],
    },
    {
      title: "Bachelor of Arts in Physical and Biological Anthropology",
      institution: "University of California, Berkeley",
      dates: "May 2011",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="experience-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over 10 years of experience building HR technology solutions, now
              transitioning into full-stack development. Combining deep domain
              expertise with technical skills to create efficient, user-focused
              applications that bridge business and engineering needs.
            </p>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h3>
          {certifications.map((cert, index) => (
            <CertificationItem key={index} {...cert} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://docs.google.com/document/d/1KiGK1FMftqQkUUQ2_-_DePFt3D-b19Oeq7qtliHAXYY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-500 transition-colors duration-300"
          >
            View My Complete Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
