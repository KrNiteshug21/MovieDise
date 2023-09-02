import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = ({ show, setShow }) => {
  const [loginMail, setLoginMail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const [loginPwdType, setloginPwdType] = useState("password");

  return (
    <>
      {show === "signup" && (
        <div className="loginSidePanel">
          <h1>Already have an account?</h1>
          <Link to="#" onClick={(e) => setShow("login")}>
            {" "}
            Login
          </Link>
        </div>
      )}
      {show === "login" && (
        <div className="loginContainer formContainer">
          <h2>Login</h2>
          <form
            className="signinForm"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(loginMail, loginPwd);
              setLoginMail("");
              setLoginPwd("");
            }}
          >
            <label htmlFor="mail">Email:</label>
            <input
              type="text"
              value={loginMail}
              name="mail"
              onChange={(e) => setLoginMail(e.target.value)}
              placeholder="Email..."
              required
            />
            <label id="password">Password:</label>
            <input
              type={loginPwdType}
              value={loginPwd}
              name="password"
              onChange={(e) => setLoginPwd(e.target.value)}
              placeholder="Password..."
              required
            />
            {loginPwdType === "text" ? (
              <FaEye
                className="eyeIcon1"
                onClick={() => setloginPwdType("password")}
              />
            ) : (
              <FaEyeSlash
                className="eyeIcon1"
                onClick={() => setloginPwdType("text")}
              />
            )}
            <Link to="#">Forgot Password</Link>
            <input className="loginBtn" type="submit" value="Log In" />
          </form>

          <p>Or</p>
          <Link to="#" className="loginWithFacebook">
            <FaFacebook /> Login with Facebook
          </Link>
          <Link to="#" className="loginWithGoogle">
            <FcGoogle />
            Login with Google
          </Link>
        </div>
      )}
    </>
  );
};

export default Login;
