import React, { useEffect } from "react";
import Typed from "typed.js";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Experience from "../Experience/Experience";
import ContactMe from "../ContactMe/ContactMe";
import profileImage from "../../static/images/headshot-lavendar.jpg";

const aboutMeText = `Software engineer passionate about transforming complex business challenges into elegant technical solutions. With a unique background in HR technology and enterprise systems, I bring both technical expertise and deep domain knowledge to full-stack development. Currently building impactful applications using JavaScript, Python, and React, with a focus on performance optimization and user-centric design.`;

const strings = [
  "is a full-stack software engineer...",
  "builds scalable web applications...",
  "specializes in React and Node.js development...",
  "creates efficient automation solutions...",
  "optimizes system performance...",
  "designs user-centric interfaces...",
  "implements complex business logic...",
  "bridges technology and business needs...",
];

const AboutMe = () => {
  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      id="about-me-section"
    >
      <div className="w-full">
        <section className="min-h-screen bg-gradient-to-b from-purple-700 to-purple-600 flex items-start pt-20 md:items-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="w-56 h-56 md:w-72 md:h-72 relative">
                <img
                  src={profileImage}
                  alt="Profile of Lainey"
                  className="rounded-full w-full h-full object-cover shadow-xl border-4 border-white/20 transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
              </div>

              <div className="max-w-2xl text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  Lainey (Dailo) Paddock
                </h1>

                <div className="h-16 mb-6">
                  <p className="text-xl md:text-2xl text-white/90">
                    <span>&nbsp;</span>
                    <span className="typed"></span>
                  </p>
                </div>

                <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
                  {aboutMeText}
                </p>

                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="#portfolio-section"
                    className="px-6 py-3 bg-white text-purple-700 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300"
                  >
                    View Portfolio
                  </a>
                  <a
                    href="#contact-me-section"
                    className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-400 transition-colors duration-300"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Portfolio />
        <Experience />
        <ContactMe />
      </div>
    </div>
  );
};

export default AboutMe;
