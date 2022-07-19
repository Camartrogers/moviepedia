import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

function PageFavs() {
  const favs = useSelector((state) => state.favs.items);

  return (
    <section className="favs-page">
      {favs.length < 1 ? (
        <div className="no-favs">
          <h2>No Favourites added yet!</h2>
          <p>
            No favourites added yet. Return to the <Link to="/">home</Link> page
            to add some favourites.
          </p>
        </div>
      ) : (
        <div className="movies-container">
          {favs.map((movie, i) => {
            return <MovieCard key={i} movie={movie} isFav={true} />;
          })}
        </div>
      )}
    </section>
  );
}

export default PageFavs;
