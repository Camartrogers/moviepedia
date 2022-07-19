import title from "../images/logo.svg";
import logo from "../images/moviepedia-logo.png";
import tmdbLogo from "../images/tmdb-logo.svg";

function PageAbout() {
  return (
    <section className="about-page">
      <div className="about-wrapper">
        <span>
          Greetings from
          <img src={title} alt="moviepedia title" id="title-about" />
        </span>

        <section className="about-copy">
          <p>
            This movie database was made as a school project by Cam Rogers for
            the Front-End Web Developer program at BCIT in 2022.
          </p>
          <img src={tmdbLogo} alt="TMDB logo" id="tmdb-logo" />
          <p>
            This product uses the TMDb API but is not endorsed or certified by
            TMDb.
          </p>
        </section>
        <img src={logo} alt="Moviepedida logo" id="logo-about" />
      </div>
    </section>
  );
}

export default PageAbout;
