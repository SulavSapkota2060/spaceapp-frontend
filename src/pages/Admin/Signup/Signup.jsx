import React, { useState } from "react";
import "./Signup.css";
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { signupUser } from "../../../utils/UserAPI";
import Alert from "../../../components/Alert/Alert";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [fullName, setFullName] = useState();
  const [alert, changeAlert] = useState({ status: null, text: "" });

  const navigate = useNavigate();
  const state = useLocation();

  //{
  // "full_name":"Munish",
  // "email":"munish@lohani.com",
  // "password":"Strong@123",
  // "password2":"Strong@123"
  // }

  const signInUser = () => {
    let cred = {
      email: email,
      password: password,
      password2: password2,
      full_name: fullName,
    };
    console.log(cred);
    signupUser(cred).then((res) => {
      console.log(res);
      if (res.data.message != null) {
        navigate("/login");
      } else {
        changeAlert({
          status: "error",
          text: "Invalid Credentials",
        });
      }
    });
  };

  return (
    <section class="sign-up-section">
      <div class="left-side-sign-up">
        <h1>Hello There!</h1>
        <p>Welcome to Boolean Assassians!</p>
        <img src="/logo.png" alt="" />
      </div>
      {alert.status ? <Alert type={alert.status} message={alert.text} /> : null}
      <div class="right-side-sign-up">
        <h1>Create An Account</h1>
        <form action="">
          <label for="">Full Name</label>
          <br />
          <input
            type="username"
            name=""
            id="username-input-box"
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <br />
          <label for="">Email</label>
          <br />
          <input
            type="email"
            name=""
            id="email-form-enter"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label for="">Password</label>
          <br />
          <input
            type="password"
            name=""
            id="password-input-box"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label for="">Confirm Password</label>
          <br />
          <input
            type="password"
            name=""
            id="confirm-password-input-box"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <br />

          <a href="">
            <button
              class="btn-create-an-account"
              onClick={(e) => {
                e.preventDefault();
                signInUser();
              }}
            >
              Create an Account
            </button>
          </a>
          <br />

          <p class="account">
            Already have an account?{" "}
            <a
              href="/naasa-hackathon2023/raw_code/login/login.html"
              class="account-sign-in"
            >
              Sign In
            </a>{" "}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
