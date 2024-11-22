import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

const MoviePage = () => {
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

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
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
      url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovieVideo(response.data.results);
        // console.log("movieVideo", response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <section className="moviePage">
      <div className="movieIntro setWidth">
        {loading && <h1>LOADING... PLEASE WAIT</h1>}
        {!loading && (
          <>
            <img
              className="moviePoster"
              src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
              alt={movie?.title}
            />
            <div className="movieInfo">
              <h2>
                {movie?.title} ({movie?.release_date?.slice(0, 4)})
              </h2>
              <div>
                <b>Languages:</b>{" "}
                {movie?.spoken_languages?.map((lang, index) => {
                  return <span key={index}>{lang?.english_name}, </span>;
                })}
              </div>
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
              <p>
                <b>Status:</b> {movie?.status}
              </p>
            </div>
          </>
        )}
      </div>
      {showTrailer && (
        <div className="trailer videoWrapper">
          <iframe
            title="Featured Movie Trailer"
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "0.5rem" }}
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
