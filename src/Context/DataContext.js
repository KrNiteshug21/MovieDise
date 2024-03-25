import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState("popular");
  const [shows, setShows] = useState([]);
  const [filterShows, setFilterShows] = useState("airing_today");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY2ZGQzODgxYWE2ZWNkYWRlZWRjN2JmZjhiNzM2YyIsInN1YiI6IjY0YzEyMzU1MTNhMzIwMDBlMjFhOThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fibMrLld6TS6bvaKZtYYLL9TIpNC1PdRcKzFdu4QIwo",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${filterMovies}?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log("movies", response);
          setMovies(response.results);
        })
        .catch((err) => console.error(err));
    };

    getMovies();
  }, [filterMovies]);

  useEffect(() => {
    const getTvShows = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY2ZGQzODgxYWE2ZWNkYWRlZWRjN2JmZjhiNzM2YyIsInN1YiI6IjY0YzEyMzU1MTNhMzIwMDBlMjFhOThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fibMrLld6TS6bvaKZtYYLL9TIpNC1PdRcKzFdu4QIwo",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/tv/${filterShows}?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log("shows", response);
          setShows(response.results);
        })
        .catch((err) => console.error(err));
    };

    getTvShows();
  }, [filterShows]);

  const moviefilterArray = [
    { id: "1", title: "Now Playing", value: "now_playing" },
    { id: "2", title: "Popular", value: "popular" },
    { id: "3", title: "Top Rated", value: "top_rated" },
    { id: "4", title: "Upcoming", value: "upcoming" },
  ];
  const showFilterArray = [
    { id: "1", title: "Airing Today", value: "airing_today" },
    { id: "2", title: "On The Air", value: "on_the_air" },
    { id: "3", title: "Popular", value: "popular" },
    { id: "4", title: "Top Rated", value: "top_rated" },
  ];

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY2ZGQzODgxYWE2ZWNkYWRlZWRjN2JmZjhiNzM2YyIsInN1YiI6IjY0YzEyMzU1MTNhMzIwMDBlMjFhOThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fibMrLld6TS6bvaKZtYYLL9TIpNC1PdRcKzFdu4QIwo",
      },
    };

    search.length > 0 &&
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setSearchResults(response.results);
        })
        .catch((err) => console.error(err));
  }, [search]);

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        filterMovies,
        setFilterMovies,
        shows,
        setShows,
        filterShows,
        setFilterShows,
        moviefilterArray,
        showFilterArray,
        search,
        setSearch,
        searchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
