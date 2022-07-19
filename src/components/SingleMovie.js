import noPoster from "../images/no-movie-poster.jpg";
import { formatDate } from "../globals/globlalVariables";

function SingleMovieComponent({ movie }) {
  // // Movie Genres
  const genreArr = [];
  movie.genres.forEach((genre) => {
    genreArr.push(genre["name"]);
  });

  return (
    <>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.tagline !== "" && <em>{movie.tagline}</em>}</p>
        <p>
          <em>
            {genreArr.map((genre, i, genreArr) => {
              if (i + 1 === genreArr.length) {
                return <span>{genre} </span>;
              } else {
                return <span>{genre}, </span>;
              }
            })}
          </em>
        </p>
        <div className="poster-overview">
          {movie.poster_path === null ? (
            <img
              className="single-movie-poster"
              src={noPoster}
              alt="No poster available"
            />
          ) : (
            <img
              className="single-movie-poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <div className="single-movie-info">
            <p>{movie.overview}</p>
            <p>Length:{movie.runtime} min</p>
            <p>Release date: {formatDate(movie.release_date)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovieComponent;
