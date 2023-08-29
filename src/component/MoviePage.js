import { useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";
import { useContext, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

const MoviePage = () => {
  const { API_KEY } = useContext(DataContext);
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieVideo, setMovieVideo] = useState();
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false); // hide or show trailer
  const trailer = movieVideo?.find((mov) => {
    if (mov.type === "Trailer") return mov;
    else if (mov.type === "Featurette") return mov;
    else if (mov.type === "Clip") return mov;
    else return movieVideo[0];
  });
  console.log("trailer", trailer);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY2ZGQzODgxYWE2ZWNkYWRlZWRjN2JmZjhiNzM2YyIsInN1YiI6IjY0YzEyMzU1MTNhMzIwMDBlMjFhOThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fibMrLld6TS6bvaKZtYYLL9TIpNC1PdRcKzFdu4QIwo",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log("movie", response.data);
        setMovie(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id, loading]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/videos?${API_KEY}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY2ZGQzODgxYWE2ZWNkYWRlZWRjN2JmZjhiNzM2YyIsInN1YiI6IjY0YzEyMzU1MTNhMzIwMDBlMjFhOThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fibMrLld6TS6bvaKZtYYLL9TIpNC1PdRcKzFdu4QIwo",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovieVideo(response.data.results);
        console.log("movieVideo", response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id, API_KEY]);

  return (
    <section className="moviePage">
      <div className="movieIntro setWidth">
        {loading && (
          <h1
            style={{
              display: "grid",
              placeContent: "center",
            }}
          >
            LOADING... PLEASE WAIT
          </h1>
        )}
        {!loading && (
          <>
            <img
              className="moviePoster"
              src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
              alt={movie?.title}
            />
            <div className="movieInfo">
              <h2>
                {movie?.title} {movie?.release_date?.slice(0, 4)}
              </h2>
              <div className="genre">
                {movie?.genres?.map((gen) => (
                  <span key={gen?.id}>
                    {gen.name}
                    {", "}
                  </span>
                ))}
              </div>
              <p className="tagline">{movie?.tagline}</p>
              <button className="play" onClick={() => setShowTrailer(true)}>
                <FaPlay />
                Play Trailer
              </button>
              <p className="overview">{movie?.overview}</p>
            </div>
          </>
        )}
      </div>
      {showTrailer && trailer && <h1>Oops! Trailer not available</h1>}
      {showTrailer && (
        <div className="trailer videoWrapper">
          <iframe
            title="Featured Movie Trailer"
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            frameborder="0"
            allowFullscreen
          ></iframe>
          <button className="close" onClick={() => setShowTrailer(false)}>
            <AiFillCloseCircle size="20" />
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default MoviePage;
