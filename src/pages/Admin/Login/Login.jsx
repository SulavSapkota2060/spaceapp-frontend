import React, { useEffect, useState } from "react";
import "./Login.css";
import Cookies from "js-cookie";
import { loginUser } from "../../../utils/UserAPI";
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import Alert from "../../../components/Alert/Alert";

const Login = () => {
  const [email, changeEmailAddress] = useState("");
  const [password, changePassword] = useState("");
  const [alert, changeAlert] = useState({ status: null, text: "" });
  const navigate = useNavigate();
  const state = useLocation();

  const signInUser = () => {
    loginUser({
      email: email,
      password: password,
    }).then((res) => {
      if (res.data.jwt != null) {
        console.log("first");
        console.log(res);
        Cookies.set("jwt", res.data.jwt, { expires: 7, sameSite: true });
        navigate("/admin/dashboard");
      } else {
        changeAlert({
          status: "error",
          text: "Invalid Credentials",
        });
      }
    });
  };

  useEffect(() => {
    if (state.state) {
      changeAlert({
        status: state.state.status,
        text: state.state.text,
      });
    }
  }, []);
  return (
    <div>
      <section className="login-page">
        <div className="container">
          {alert.status ? (
            <Alert type={alert.status} message={alert.text} />
          ) : null}
        </div>
      </section>

      <section className="login">
        <div className="items">
          <h1>Welcome Back!</h1>
          <p>Enter your Email and Password to continue</p>

          <img src="/logo.png" alt="" className="img-login" />
        </div>
        <div className="sign-in-section">
          <h1>Sign in To your Account</h1>

          <section className="email-label">
            <label for="">Email</label>
            <br />
            <input
              type="text"
              placeholder="Email Address"
              id="email-form-enter"
              onChange={(e) => changeEmailAddress(e.target.value)}
            />
          </section>

          <section className="password-label">
            <label for="">Password</label>
            <br />
            <input
              type="password"
              id="password-form-enter"
              placeholder="Password"
              onChange={(e) => changePassword(e.target.value)}
            />
          </section>

          <br />
          <br />
          <a href="" className="a-main-login">
            <button
              type="submit"
              className="btn-login"
              onClick={(e) => {
                e.preventDefault();
                signInUser();
              }}
             >
          
            Login</button>
          </a>

          <div className="container-btn">
            <div>
              <a href="">
                <button className="btn-google-sign">Sign with Google</button>
              </a>
            </div>
            <div>
              <a href="">
                <button className="btn-create-an-account">
                  Create an account
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
