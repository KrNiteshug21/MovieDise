import Content from "./Content";
import SearchResults from "./SearchResults";
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
    search,
  } = useContext(DataContext);

  return (
    <section>
      {search?.length === 0 ? (
        <>
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
        </>
      ) : (
        <SearchResults />
      )}
    </section>
  );
};

export default Homepage;
