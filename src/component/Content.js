import Movie from "./Movie";
import { NavLink } from "react-router-dom";

const Content = ({ assets, array, filters, link }) => {
  return (
    <section className="contentPage">
      <div className="setWidth">
        <div className="filter">
          {array.map((btn) => {
            return (
              <NavLink
                key={btn.id}
                onClick={(e) => filters(e.target.id)}
                id={btn.value}
                className="filterBtn"
              >
                {btn.title}
              </NavLink>
            );
          })}
        </div>
        <div className="contentContainer">
          {assets
            ?.filter((asset) => asset.poster_path !== null)
            .map((asset) => {
              return <Movie key={asset.id} asset={asset} link={link} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Content;
