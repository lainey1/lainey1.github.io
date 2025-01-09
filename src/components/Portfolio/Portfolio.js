import pawSpot from "../../static/images/pawSpot-site-view.png";
import eaterVerse from "../../static/images/eater_verse_wireframe.png";
import underConstruction from "../../static/images/under-construction.jpg";
import "./Portfolio.css";

const ProjectTile = ({
  image,
  title,
  repoLink,
  siteLink,
  description,
  techStack,
}) => (
  <div className="project-tile">
    <div className="project-image-container">
      <img src={image} alt={title} className="project-image" />
    </div>
    <div className="project-details">
      <p>
        <b>{title}</b> (
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          repo
        </a>
        ,{" "}
        <a href={siteLink} target="_blank" rel="noopener noreferrer">
          site
        </a>
        ) {description}
      </p>
      <div className="tech-stack">
        <b>Tech Stack: </b>
        {techStack}
      </div>
    </div>
  </div>
);

function Portfolio() {
  const projects = [
    {
      image: pawSpot,
      title: "PawSpot",
      repoLink: "https://github.com/lainey1/pawSpot",
      siteLink: "https://pawspot.onrender.com",
      description:
        "is an online marketplace connecting pet owners with trusted paw pal hosts for short- and long-term stays. This project showcases my full-stack development skills, including secure authentication, dynamic content, and real-time features.",
      techStack: "React & Redux, Express, PostgreSQL, JWT Authentication",
    },
    {
      image: eaterVerse,
      title: "Eaterverse",
      repoLink: "https://github.com/lainey1/eater_verse",
      siteLink: "https://eaterverse.onrender.com",
      description:
        "is an innovative platform for restaurant reservations, reviews, and user profile management, combining restaurant discovery and booking in a seamless experience.",
      techStack: "React & Redux, Flask, PostgreSQL, Flask Authentication",
    },
    {
      image: underConstruction,
      title: "Reciprocity",
      repoLink: "https://github.com/lainey1/eater_verse",
      siteLink: "",
      description: "TBD",
      techStack: "React & Redux, Flask, PostgreSQL, Flask Authentication",
    },
  ];

  return (
    <div id="portfolio-section">
      <div id="portfolio-text">
        <h2 className="header-white">My Portfolio</h2>
        <p className="text-portfolio">
          Welcome to my portfolio! Here you'll find a mix of projects that
          highlight my skills in both front-end and back-end development and my
          ability to craft user-friendly solutions and tackle challenges
          creatively. Explore to see how I bring ideas to life!
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectTile key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
