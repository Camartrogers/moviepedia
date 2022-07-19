import { NavLink } from "react-router-dom";

function NavSort() {
  const sortClass = (sort) => {
    let buttons = document.querySelectorAll(".btn");
    //remove active-sort class from each button, if any
    buttons.forEach((button) => {
      button.classList.remove("active-sort");
    });
    //add active- sort class to selected sorting option button
    document.querySelector(`#${sort}`).classList.add("active-sort");
  };
  return (
    <nav>
      <div className="nav-sort">
        <ul>
          <NavLink to="/sort/popular">
            <li
              className="btn active-sort"
              onClick={() => {
                sortClass("popular");
              }}
              id="popular"
            >
              Popular
            </li>
          </NavLink>
          <NavLink to="/sort/top-rated">
            <li
              className="btn"
              onClick={() => {
                sortClass("top-rated");
              }}
              id="top-rated"
            >
              Top Rated
            </li>
          </NavLink>

          <NavLink to="/sort/now-playing">
            <li
              className="btn"
              onClick={() => {
                sortClass("now-playing");
              }}
              id="now-playing"
            >
              Now Playing
            </li>
          </NavLink>

          <NavLink to="/sort/upcoming">
            <li
              className="btn"
              onClick={() => {
                sortClass("coming-soon");
              }}
              id="coming-soon"
            >
              Coming Soon
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavSort;
