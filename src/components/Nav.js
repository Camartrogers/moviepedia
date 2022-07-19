import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-main" style={{ paddingBottom: "1rem" }}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/favs">Favourites</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
