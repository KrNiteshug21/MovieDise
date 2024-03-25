import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";

const Signup = ({ show, setShow }) => {
  const [signupMail, setSignupMail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [signupPwdType, setsignupPwdType] = useState("password");
  return (
    <AnimatePresence>
      {show === "login" ? (
        <motion.div
          className="signinSidePanel"
          initial={{ opacity: 0, translateX: 0 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: -500 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1>Don't have an account?</h1>
          <Link to="#" onClick={(e) => setShow("signup")}>
            Signup
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="signupContainer formContainer"
          initial={{ opacity: 0, translateX: 0 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>Signup</h2>
          <form
            className="signinForm"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(signupMail, signupPwd, confirmPwd);
              if (signupPwd !== confirmPwd)
                alert("Both password must be same!");
              setSignupMail("");
              setSignupPwd("");
              setConfirmPwd("");
            }}
          >
            <label htmlFor="mail">Email:</label>
            <input
              type="text"
              value={signupMail}
              name="mail"
              onChange={(e) => setSignupMail(e.target.value)}
              placeholder="Email..."
              required
            />
            <label id="password">Password:</label>
            <input
              type={signupPwdType}
              value={signupPwd}
              name="password"
              onChange={(e) => setSignupPwd(e.target.value)}
              placeholder="Password..."
              required
            />
            <label id="confirm">Confirm Password:</label>
            <input
              type={signupPwdType}
              value={confirmPwd}
              name="confirm"
              onChange={(e) => setConfirmPwd(e.target.value)}
              placeholder="Confirm Password..."
              required
            />
            {signupPwdType === "text" ? (
              <FaEye
                className="eyeIcon2"
                onClick={() => setsignupPwdType("password")}
              />
            ) : (
              <FaEyeSlash
                className="eyeIcon2"
                onClick={() => setsignupPwdType("text")}
              />
            )}
            <input className="signupBtn" type="submit" value="Signup" />
          </form>

          <p>Or</p>
          <Link to="#" className="loginWithFacebook">
            <FaFacebook /> Login with Facebook
          </Link>
          <Link to="#" className="loginWithGoogle">
            <FcGoogle />
            Login with Google
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Signup;
