import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState("popular");
  const [shows, setShows] = useState([]);
  const [filterShows, setFilterShows] = useState("airing_today");
  const API_KEY = "fd66dd3881aa6ecdadeedc7bff8b736c";

  useEffect(() => {
    const getMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/${filterMovies}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images`;
      const response = await axios.get(url);

      if (response.status === 200) {
        const movies = response.data.results;
        setMovies(movies);
        // console.log("movies", movies);
      } else {
        throw new Error(response.statusText);
      }
    };

    getMovies();
  }, [filterMovies]);

  useEffect(() => {
    const getTvShows = async () => {
      const url = `https://api.themoviedb.org/3/tv/${filterShows}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images`;
      const response = await axios.get(url);

      if (response.status === 200) {
        const shows = response.data.results;
        setShows(shows);
        // console.log("tvshows", shows);
      } else {
        throw new Error(response.statusText);
      }
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
        API_KEY,
        moviefilterArray,
        showFilterArray,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
