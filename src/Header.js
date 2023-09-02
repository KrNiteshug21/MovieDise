import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

const Header = () => {
  const { search, setSearch } = useContext(DataContext);
  const location = useLocation();
  const style = {
    header: {
      width: "100%",
      height: "90vh",
      backgroundImage: `url("https://www.pixel4k.com/wp-content/uploads/2019/09/spiderman-into-the-spiderverse_1568055399.jpg.webp"`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#27374d",
    },
  };
  return (
    <header
      className="header"
      style={location.pathname === "/home" ? style.header : {}}
    >
      <div
        className="headerContainer setWidth"
        style={
          location.pathname === "/home"
            ? { backdropFilter: "blur(0.75rem)" }
            : {}
        }
      >
        <div className="webTitle">
          <Link to="/home">
            <h1>MovieDise</h1>
          </Link>
        </div>
        <nav className="navbar">
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor:
                  isActive && location.pathname === "/home"
                    ? "#27374d"
                    : isActive
                    ? "#dde6ed"
                    : "",
                color:
                  isActive && location.pathname === "/home"
                    ? "#dde6ed"
                    : isActive
                    ? "#27374d"
                    : "#fff",
              };
            }}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#dde6ed" : "",
                color:
                  isActive || location.pathname === "/home"
                    ? "#27374d"
                    : "#dde6ed",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#dde6ed" : "",
                color:
                  isActive || location.pathname === "/home"
                    ? "#27374d"
                    : "#dde6ed",
              };
            }}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      </div>
      {location.pathname === "/home" && (
        <div className="searchDiv">
          <input
            className="searchField"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
      )}
    </header>
  );
};

export default Header;
