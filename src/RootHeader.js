import { Link, NavLink, useLocation } from "react-router-dom";
import "./index.css";

const Header = () => {
  const location = useLocation();
  const style = {
    header: {
      width: "100%",
      height: "100vh",
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
      style={location.pathname === "/" ? style.header : {}}
    >
      <div
        className="headerContainer setWidth"
        style={
          location.pathname === "/" ? { backdropFilter: "blur(0.5rem)" } : {}
        }
      >
        <div className="webTitle">
          <Link
            to="/"
            style={{
              color: "#dde6ed",
              textDecoration: "none",
            }}
          >
            <h1>MovieDise</h1>
          </Link>
        </div>
        <nav className="navbar">
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor:
                  isActive && location.pathname === "/"
                    ? "#27374d"
                    : isActive
                    ? "#dde6ed"
                    : "",
                color:
                  isActive && location.pathname === "/"
                    ? "#dde6ed"
                    : isActive
                    ? "#27374d"
                    : "#fff",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#dde6ed" : "",
                color:
                  isActive || location.pathname === "/" ? "#27374d" : "#dde6ed",
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
                  isActive || location.pathname === "/" ? "#27374d" : "#dde6ed",
              };
            }}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
