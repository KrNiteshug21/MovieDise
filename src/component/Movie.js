import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Movie = ({ asset, link }) => {
  const [hover, setHover] = useState(false);
  const moviePosterUrl = "https:image.tmdb.org/t/p/w500";
  const showsPosterUrl = "https://image.tmdb.org/t/p/w185";
  const posterUrl = "https://image.tmdb.org/t/p/w342";

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className="movieCards">
      <div className="imgWrapper">
        <img
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={`${moviePosterUrl || showsPosterUrl || posterUrl}/${
            asset?.poster_path
          }`}
          alt={asset?.title}
        />
        <div
          className="movieCardText"
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            display: hover ? "block" : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div className="voteAverage">
              <p>{asset?.vote_average?.toFixed(1)}</p>
            </div>
            <p>{asset?.release_date || asset?.first_air_date}</p>
          </div>

          <Link to={`/${link}/${asset?.id}`}>
            <h2>{asset?.title || asset?.name}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
