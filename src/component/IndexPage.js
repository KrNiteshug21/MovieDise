import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [show, setShow] = useState("login");

  return (
    <section className="signinPage">
      <div
        className="rootContainer"
        style={{
          maxWidth: "min(calc(100% - 3rem), 1100px)",
          marginInline: "auto",
        }}
      >
        <Login show={show} setShow={setShow} />
        <Signup show={show} setShow={setShow} />
      </div>
      <Link to={"/home"} className="getStarted">
        Get Started
      </Link>
    </section>
  );
};

export default IndexPage;
