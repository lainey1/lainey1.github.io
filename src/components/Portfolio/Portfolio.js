import React from "react";
import { ExternalLink, Github } from "lucide-react";

import pawSpot from "../../static/images/pawSpot-site-view.png";
import eaterVerse from "../../static/images/eaterverse.png";
import reciprocity from "../../static/images/reciprocity.png";

const ProjectTile = ({
  image,
  title,
  repoLink,
  siteLink,
  description,
  techStack,
}) => (
  <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-[30%] m-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="relative w-full pt-[56.25%] overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="flex flex-col justify-between p-6 flex-grow">
      <div>
        <div className="flex items-center gap-4 mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex gap-2">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={`${title} repository`}
            >
              <Github size={20} />
            </a>
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={`${title} live site`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.split(", ").map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm transition-colors duration-300 hover:bg-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      image: reciprocity,
      title: "Reciprocity",
      repoLink: "https://github.com/lainey1/reciprocity",
      siteLink: "https://reciprocity.onrender.com/",
      description:
        "A full-stack recipe sharing platform featuring optimized Redux state management with fine-tuned useSelector hooks, AWS S3 integration for image storage, and a fully responsive UI built with advanced CSS media queries. Implemented secure user authentication and efficient data management.",
      techStack: "React, Redux, Flask, PostgreSQL, AWS",
    },
    {
      image: eaterVerse,
      title: "Eaterverse",
      repoLink: "https://github.com/lainey1/eaterverse",
      siteLink: "https://eaterverse.onrender.com",
      description:
        "A restaurant management platform featuring SQLAlchemy-powered backend with optimized One-to-Many and Many-to-Many associations. Implemented real-time status updates using JavaScript. Currently working on integrating Google Maps API and building comprehensive search functionality with multiple filter parameters.",
      techStack: "React, Redux, Flask, PostgreSQL, Flask Authentication",
    },
    {
      image: pawSpot,
      title: "PawSpot",
      repoLink: "https://github.com/lainey1/pawSpot",
      siteLink: "https://pawspot.onrender.com",
      description:
        "An Airbnb-style platform built with Express and PostgreSQL backend, featuring JWT authentication and dynamic React components. Implemented reusable component architecture using state and props for optimal data flow, while managing development through GitHub Kanban.",
      techStack: "React, Redux, Express, PostgreSQL, JWT Authentication",
    },
  ];

  return (
    <section className="bg-purple-600 py-16" id="portfolio-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Welcome to my portfolio! Here you'll find full-stack applications
            demonstrating my proficiency in modern web technologies, database
            design, API integration, and responsive UI development.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectTile key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
