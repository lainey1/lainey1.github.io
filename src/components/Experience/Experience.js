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
        "Led implementation and operations of global HR systems (Concur, Navan, ServiceNow HRSD), managing daily maintenance and support for 1,000+ employees.",
        "Collaborated with Moveworks and IT team to launch an AI-powered HR chatbot within 2 months, scaling from 500+ monthly tickets to 70% automated resolution by year-end, reducing manual support workload.",
        "Drove 100+ system improvements through Agile sprints, overseeing business acceptance testing for enterprise deployments.",
      ],
      location: "San Francisco, CA",
    },
    {
      company: "Google",
      dates: "March 2013 - October 2021",
      title: "Technical Operations Engineer",
      bullets: [
        "Managed end-to-end migration of global benefits team to Salesforce case management system, leading discovery, implementation, and deployment across all regions.",
        "Automated HR workflows using Apps Script/JavaScript and SQL, reducing manual effort by 80%.",
        "Collaborated with engineering to enhance internal HR tools and enterprise systems (Workday, Concur).",
      ],
      location: "San Francisco, CA",
    },
  ];

  const certifications = [
    {
      title: "Software Engineering Certificate",
      institution: "App Academy",
      dates: "January 2025",
      achievements: [
        "Developed full-stack applications using React, Redux, Express, and Flask, implementing RESTful APIs and complex state management patterns.",
        "Built and deployed scalable web applications with PostgreSQL databases, implementing efficient data models and optimizing query performance.",
        "Engineered responsive front-end interfaces using modern JavaScript (ES6+), implementing custom hooks and optimizing component lifecycle.",
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
              Tech operations leader with 10+ years of enterprise systems
              experience, now building full-stack apps using JavaScript, Python,
              and React. Combines business process expertise with technical
              implementation skills to develop scalable software solutions that
              drive measurable impact.
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
