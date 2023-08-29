import Content from "./Content";
import DataContext from "../Context/DataContext";
import { useContext } from "react";

const Homepage = () => {
  const {
    movies,
    shows,
    setFilterMovies,
    setFilterShows,
    moviefilterArray,
    showFilterArray,
  } = useContext(DataContext);

  return (
    <section>
      <Content
        assets={movies}
        array={moviefilterArray}
        filters={setFilterMovies}
        link="movie"
      />
      <Content
        assets={shows}
        array={showFilterArray}
        filters={setFilterShows}
        link="show"
      />
    </section>
  );
};

export default Homepage;
