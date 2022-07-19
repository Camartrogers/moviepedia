import Movies from "../components/Movies";
import { API_KEY } from "../globals/globlalVariables";
import { useEffect, useState } from "react";
import NavSort from "../components/NavSort";

function PageHome({ sort }) {
  const [moviesData, setMoviesData] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const errorMessage = "Something went wrong...Please try again later.";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=${page}`
      ).catch((err) => {
        moviesData !== false && setMoviesData(false);
        setError(errorMessage);
      });

      const data = await response.json();

      if (data.success === false) {
        // Bad response from API
        // Reset the movies if not false
        moviesData !== false && setMoviesData(false);
        error !== false && setError(false);
        setError(errorMessage);
      } else {
        // Good response from API
        // Reset the error if not false
        error !== false && setError(false);
        // Grab the page 1 of movies from the API

        const first12Movies = data.results.splice(0, 20);
        setMoviesData(first12Movies);
      }
    };
    fetchMovies();
  }, [sort, page]);
  // if sort changes
  // setPage(1);

  return (
    <>
      <section className="page-home">
        <NavSort />
        {moviesData !== false && <Movies moviesData={moviesData} />}
      </section>
      <div className="page-control">
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
        <p id="page-number">{page}</p>
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
      </div>
    </>
  );
}

export default PageHome;
