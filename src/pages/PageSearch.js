import Movies from "../components/Movies";
import { API_KEY } from "../globals/globlalVariables";
import { useEffect, useState } from "react";

function PageHome() {
  const [moviesData, setMoviesData] = useState(false);
  const [error, setError] = useState(false);
  const [movieQuery, setMovieQuery] = useState(" ");

  const errorMessage = "Something went wrong...Please try again later.";

  //URL for API to query movies
  // https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=the+avengers

  useEffect(() => {
    //fetch movie data using query string
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieQuery}`
      ).catch((err) => {
        moviesData !== false && setMoviesData(false);
        setError(errorMessage);
      });

      const data = await response.json();

      if (data.success === false) {
        // Bad response from API...
        // Reset the movies if it is not false...
        moviesData !== false && setMoviesData(false);
        error !== false && setError(false);
        setError(errorMessage);
      } else {
        // Good response from API
        // Reset the error if it is not false...
        error !== false && setError(false);
        // Grab the first 12 movies from the API
        const first12Movies = data.results.splice(0, 12);
        setMoviesData(first12Movies);
      }
    };

    fetchMovies();
    console.log(moviesData);
  }, [movieQuery]);

  const searchMovies = (searchValue) => {
    setMovieQuery(searchValue);
  };

  const searchResult = () => {
    if (moviesData === false) {
      return (
        <section className="search-area">
          <h2>Try using the search field to type in a movie title</h2>
        </section>
      );
    }
    if (moviesData.length === 0) {
      return (
        <section className="search-area">
          <h2>No results found</h2>
          <p>Try another movie title or check your search for typos.</p>
        </section>
      );
    } else {
      return (
        <section>
          <Movies moviesData={moviesData} />
        </section>
      );
    }
  };

  return (
    <section className="page-search">
      <input
        type="search"
        id="search-input"
        placeholder="Search for a movie title"
        onChange={(e) => searchMovies(e.target.value)}
      />
      {searchResult()}
    </section>
  );
}

export default PageHome;
