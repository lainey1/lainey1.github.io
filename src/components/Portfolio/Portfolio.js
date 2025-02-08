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
        "A platform connecting people through shared experiences around food, strengthening bonds and creating lasting memories. Features include saving and sharing recipes/collections and secured user data.",
      techStack: "React, Redux, Flask, PostgreSQL, AWS",
    },
    {
      image: eaterVerse,
      title: "Eaterverse",
      repoLink: "https://github.com/lainey1/eaterverse",
      siteLink: "https://eaterverse.onrender.com",
      description:
        "An innovative platform for restaurant reservations, reviews, and user profile management, combining restaurant discovery and booking in a seamless experience.",
      techStack: "React, Redux, Flask, PostgreSQL, Flask Authentication",
    },
    {
      image: pawSpot,
      title: "PawSpot",
      repoLink: "https://github.com/lainey1/pawSpot",
      siteLink: "https://pawspot.onrender.com",
      description:
        "An online marketplace connecting pet owners with trusted paw pal hosts for short- and long-term stays. Features secure authentication, dynamic content, and real-time features.",
      techStack: "React, Redux, Express, PostgreSQL, JWT Authentication",
    },
  ];

  return (
    <section className="bg-purple-600 py-16" id="portfolio-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Welcome to my portfolio! Here you'll find a mix of projects that
            highlight my skills in both front-end and back-end development and
            my ability to craft user-friendly solutions and tackle challenges
            creatively.
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
