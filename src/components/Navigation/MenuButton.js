import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHomeOutline } from "react-icons/ti";
import { PiToolbox } from "react-icons/pi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { CiMobile4 } from "react-icons/ci";
import "./Navigation.css";

function MenuButton() {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current || !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <div id="menu-container">
        <button onClick={toggleMenu} id="button-menu">
          <GiHamburgerMenu fontSize="1.25rem" />
        </button>
      </div>

      <div
        className={`menu-dropdown ${showMenu ? "" : "hidden"}`}
        ref={ulRef}
      >
        <ul id="menu-links">
          <li>
            <a href="#about-me-section" className="menu-link" onClick={handleLinkClick}>
              <span>
                <TiHomeOutline />
                {"  "}About
              </span>
            </a>
          </li>
          <li>
            <a href="#skills-section" className="menu-link" onClick={handleLinkClick}>
              <span>
                <PiToolbox />
                {"  "}Skills
              </span>
            </a>
          </li>

          <li>
            <a href="#portfolio-section" className="menu-link" onClick={handleLinkClick}>
              <span>
                <CgWebsite />
                {"  "}Portfolio
              </span>
            </a>
          </li>

          <li>
            <a href="#resume-section" className="menu-link" onClick={handleLinkClick}>
              <span>
                <MdOutlineWorkHistory />
                {"  "}Experience
              </span>
            </a>
          </li>

          <li>
            <a href="#contact-me-section" className="menu-link" onClick={handleLinkClick}>
              <span>
                <CiMobile4 />
                {"  "}Contact Me
              </span>
            </a>
          </li>


        </ul>
      </div>
    </>
  );
}

export default MenuButton;
