import pawSpot from "../../static/images/pawSpot-site-view.png"
import eater_verse from "../../static/images/eater_verse_wireframe.png"
import "./Portfolio.css"

function Portfolio() {
  return (
    <div id="portfolio-section">
     <div id="portfolio-text">
      <h2 className="header-white">My Portfolio</h2>;
      <p className="text-portfolio">Welcome to my portfolio! Here you'll find a mix of projects that highlight my skills in both front-end and back-end development and my ability to craft user-friendly solutions and tackle challenges creatively. Explore to see how I bring ideas to life!</p>
     </div>

      <div className="projects-grid">

        <div className="project-tile">
            <div className="project-image-container">

                <img
                  src={pawSpot}
                  alt="pawproject"
                  className="project-image"
                />

            </div>
            <div className="project-details">
              <p><b>PawSpot</b> (
                  <a href="https://github.com/lainey1/pawSpot">repo</a>,{" "}
                  <a href="https://github.com/lainey1/pawSpot">site</a>){" "}is an online marketplace connecting pet owners with trusted paw pal hosts for short- and long-term stays. This project showcases my full-stack development skills, including secure authentication, dynamic content, and real-time features.</p>

            </div>

        </div>

        <div className="project-tile">
            <div className="project-image-container">

                <img
                  src={eater_verse}
                  alt="eaterverse"
                  className="project-image"
                />

            </div>
            <div className="project-details">
              <p><b>Eaterverse</b> is under construction. Building with Flask and SQLAlchemy. (<a href="https://github.com/lainey1/eater_verse">repo</a>)</p>

            </div>

        </div>

        <div className="project-tile">
            <div className="project-image-container">

                <img
                  src={pawSpot}
                  alt="pawproject"
                  className="project-image"
                />

            </div>
            <div className="project-details">
              <p><b>Capstone</b>TBD</p>

            </div>

        </div>
    </div>

    </div>
  )
}

export default Portfolio;
