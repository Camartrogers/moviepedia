import SingleMovieComponent from "../components/SingleMovie";
import { API_KEY } from "../globals/globlalVariables";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PageSingleMovie({ movie }) {
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  const [movieData, setMovieData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      console.log(data);
      setMovieData(data);
    };

    fetchMovie();
  }, []);

  return (
    <section className="single-movie-container">
      {movieData !== false && <SingleMovieComponent movie={movieData} />}
    </section>
  );
}

export default PageSingleMovie;
