import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

const ShowPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState();
  const [showVideo, setShowVideo] = useState();
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const trailer = showVideo?.find((sho) => {
    if (!showVideo) return null;
    else if (showVideo?.length === 0) return null;
    else if (sho.type === "Trailer") return sho;
    else if (sho.type === "Featurette") return sho;
    else if (sho.type === "Clip") return sho;
    else return showVideo[0];
  });
  console.log("trailer", trailer);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}`,
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
        console.log("show", response.data);
        setShow(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id, loading]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}/videos`,
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
        console.log("showVideo", response.data.results);
        setShowVideo(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

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
              src={`https://image.tmdb.org/t/p/w342/${show?.poster_path}`}
              alt={show?.title}
            />
            <div className="movieInfo">
              <h2>
                {show?.name} {"  "} {show?.first_air_date?.slice(0, 4)}
              </h2>
              <div className="genre">
                {show?.genres?.map((gen) => (
                  <span key={gen?.id}>
                    {gen.name}
                    {", "}
                  </span>
                ))}
              </div>
              <p className="tagline">{show?.tagline}</p>
              <button className="play" onClick={() => setShowTrailer(true)}>
                <FaPlay />
                Play Trailer
              </button>
              <p className="overview">{show?.overview}</p>
            </div>
          </>
        )}
      </div>

      {showTrailer && (
        <div className="trailer videoWrapper">
          <iframe
            title="Featured Show Trailer"
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            frameBorder="0"
            allowFullScreen
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

export default ShowPage;
