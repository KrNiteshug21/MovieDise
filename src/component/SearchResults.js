import DataContext from "../Context/DataContext";
import { useContext } from "react";
import Movie from "./Movie";

const SearchResults = () => {
  const { searchResults } = useContext(DataContext);

  return (
    <section className="container">
      <div className="searchItemWrapper setWidth">
        {searchResults
          ?.filter((searchItem) => searchItem.media_type !== "person")
          .map((searchItem) => {
            return (
              <Movie
                key={searchItem.id}
                asset={searchItem}
                link={searchItem.media_type === "tv" ? "show" : "movie"}
              />
            );
          })}
      </div>
    </section>
  );
};

export default SearchResults;
