// MenuButton.jsx
import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHomeOutline } from "react-icons/ti";
import { PiToolbox } from "react-icons/pi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { CiMobile4 } from "react-icons/ci";

const menuItems = [
  { href: "#about-me-section", icon: TiHomeOutline, text: "About" },
  { href: "#skills-section", icon: PiToolbox, text: "Skills" },
  { href: "#portfolio-section", icon: CgWebsite, text: "Portfolio" },
  {
    href: "#experience-section",
    icon: MdOutlineWorkHistory,
    text: "Experience",
  }, // Changed from resume-section
  { href: "#contact-me-section", icon: CiMobile4, text: "Contact Me" },
];

const MenuItem = ({ href, icon: Icon, text, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(); // Close menu

    // Get the target element
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Account for the fixed header height (64px or 16rem)
      const headerOffset = 64;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg"
      >
        <Icon className="text-lg" />
        <span>{text}</span>
      </a>
    </li>
  );
};

function MenuButton() {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu className="text-xl text-gray-700" />
      </button>

      <div
        ref={ulRef}
        className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 ${
          showMenu
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="py-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              href={item.href}
              icon={item.icon}
              text={item.text}
              onClick={handleLinkClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuButton;
