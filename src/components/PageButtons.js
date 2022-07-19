import { NavLink } from "react-router-dom";
import { useState } from "react";

function PageButtons() {
  const [page, setPage] = useState(page);

  return (
    <div className="page-control">
      <NavLink>
        <button
          className="btn"
          onClick={() => {
            if (page > 1) {
              let nextPage = page - 1;
              setPage(nextPage);
              console.log(page);
            }
          }}
        >
          Last Page
        </button>
      </NavLink>
      <p id="page-number">{page}</p>
      <NavLink>
        <button
          className="btn"
          onClick={() => {
            let nextPage = page + 1;
            setPage(nextPage);
            console.log(page);
          }}
        >
          Next Page
        </button>
      </NavLink>
    </div>
  );
}

export default PageButtons;
