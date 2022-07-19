import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import title from "../images/logo.svg";
import logo from "../images/moviepedia-logo.png";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <div className="title-wrapper">
          <img src={logo} alt="Moviepedida logo" id="logo" />
          <img src={title} alt="moviepedia title" id="moviepedia-title" />
        </div>
      </NavLink>
      <Nav />
    </header>
  );
}

export default Header;
