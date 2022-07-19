import { Link } from "react-router-dom";
import noPoster from "../images/no-movie-poster.jpg";
import FavButton from "../components/FavButton";
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlice";
import { formatDate } from "../globals/globlalVariables";

function MovieCard({ movie, isFav }) {
  const dispatch = useDispatch();

  function handleFavClick(addToFav, movie) {
    if (addToFav === true) {
      dispatch(addFav(movie));
    } else {
      dispatch(deleteFav(movie));
    }
  }

  return (
    <div className="movie-card">
      <div className="poster-with-title">
        {movie.poster_path === null ? (
          <img src={noPoster} alt="No poster available" />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p className="movie-release-date">
            Release: <br />
            {formatDate(movie.release_date)}
          </p>
          <p>Rating: {movie.vote_average}/10</p>
        </div>
      </div>
      <p className="movie-overview">{movie.overview.slice(0, 85)}...</p>
      <div className="more-info-and-heart">
        <Link to={`/movie/${movie.id}`} className="btn">
          More Info
        </Link>
        <div className="fav-heart">
          {isFav ? (
            <FavButton
              movie={movie}
              remove={true}
              handleFavClick={handleFavClick}
            />
          ) : (
            <FavButton movie={movie} handleFavClick={handleFavClick} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
