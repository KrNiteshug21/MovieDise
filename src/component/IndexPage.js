import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const IndexPage = () => {
  const [show, setShow] = useState("login");

  return (
    <section className="signinPage">
      <div className="rootContainer">
        <AnimatePresence onExitComplete>
          <Login show={show} setShow={setShow} />
          <Signup show={show} setShow={setShow} />
        </AnimatePresence>
      </div>
      <Link to={"/home"} className="getStarted">
        Get Started
      </Link>
    </section>
  );
};

export default IndexPage;
