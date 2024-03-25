import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState();
  const [showVideo, setShowVideo] = useState();
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [isFull, setIsFull] = useState(true);
  const trailer = showVideo?.find((sho) => {
    if (showVideo?.length === 0) return null;
    else if (sho.type === "Trailer") return sho;
    else if (sho.type === "Featurette") return sho;
    else if (sho.type === "Clip") return sho;
    else return showVideo[0];
  });
  // console.log("trailer", trailer);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY2ZGQzODgxYWE2ZWNkYWRlZWRjN2JmZjhiNzM2YyIsInN1YiI6IjY0YzEyMzU1MTNhMzIwMDBlMjFhOThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fibMrLld6TS6bvaKZtYYLL9TIpNC1PdRcKzFdu4QIwo",
      },
    };

    fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log("show", response);
        setShow(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
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
        // console.log("showVideo", response.data.results);
        setShowVideo(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <section className="moviePage">
      <div className="movieIntro setWidth">
        {loading ? (
          <h1>LOADING... PLEASE WAIT</h1>
        ) : (
          !loading && (
            <>
              <img
                className="moviePoster"
                src={`https://image.tmdb.org/t/p/w342/${show?.poster_path}`}
                alt={show?.title}
              />
              <div className="movieInfo">
                <Link to={show?.homepage}>
                  <h2>
                    {show?.name} {"  "} ({show?.first_air_date?.slice(0, 4)})
                  </h2>
                </Link>
                <p>
                  <b>First Aired:</b> {show?.first_air_date}{" "}
                </p>
                <p>
                  <b>Last Aired:</b> {show?.last_air_date}{" "}
                </p>
                <div>
                  <b>Languages:</b>{" "}
                  {show?.spoken_languages?.map((lang, index) => {
                    return <span key={index}>{lang?.english_name}, </span>;
                  })}
                </div>
                <div className="genre">
                  {show?.genres?.map((gen) => (
                    <span key={gen?.id}>
                      {gen.name}
                      {", "}
                    </span>
                  ))}
                </div>
                {show?.tagline && <p className="tagline">{show?.tagline}</p>}
                <button className="play" onClick={() => setShowTrailer(true)}>
                  <FaPlay />
                  Play Trailer
                </button>
                <p className="overview">
                  {isFull
                    ? show?.overview
                    : `${show?.overview.slice(0, 200)}...`}
                  <button
                    style={{
                      color: "blue",
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "inherit",
                    }}
                    onClick={() => setIsFull(!isFull)}
                  >
                    read {isFull ? "less" : "more"}
                  </button>
                </p>
                <p>
                  <b>Status:</b> {show?.status}
                </p>
              </div>
            </>
          )
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
