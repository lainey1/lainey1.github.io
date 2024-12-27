import { NavLink } from "react-router-dom";
import headshot from "../../static/images/headshot.jpg";
import Menu from "./MenuButton";
import "./Navigation.css";

function Navigation() {
  return (
    <nav id="site-banner">
      <NavLink to="/" id="logo-banner">
      <img className="headshot" src={headshot} alt="Headshot" />
        <span className="site-name">Lainey (Dailo) Paddock</span>
      </NavLink>
      <Menu />
    </nav>
  );
}

export default Navigation;
