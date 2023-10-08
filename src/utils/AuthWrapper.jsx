import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./AuthWrapper.css";
import { checkAuth } from "./UserAPI";
import { useNavigate } from "react-router-dom";

const AuthWrapper = (props) => {
  function getCookie(name) {
    var cookies = document.cookie.split(";");
    console.log(cookies);
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return undefined;
  }
  const navigate = useNavigate();
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const jwtToken = getCookie("jwt");
      console.log(Cookies.get("sessionid"));
      console.log("JWT TOKEN: ", jwtToken);
      console.log(Cookies.get("csrf"));
      if (!jwtToken) {
        // User is not logged in, redirect to desired route
        console.log("aryan")
        navigate("/login");
      } else {
        checkAuth().then((res) => {
          console.log(res)
          if (!res.data) {
            navigate("/login");
          } else {
            localStorage.setItem("user", JSON.stringify(res.data.data));
          }
        });
      }
    };

    checkUserLoggedIn();
  }, []);

  return <>{props.children}</>;
};

export { AuthWrapper };
