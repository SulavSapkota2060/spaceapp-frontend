import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import { checkAuth } from "../../utils/UserAPI";
import { Link } from "react-router-dom";
import { filterPostsByKeyword } from "../../utils/PostsAPI";

const NavigationBar = ({ setPosts }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    checkAuth()
      .then((res) => {
        setLoggedIn(true);
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {});

  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="container-nav-main">
          <div className="container-1">
            <div className="name-open-source">
              <h1 className="name">Boolean Assassians</h1>
            </div>

            <div>
              <input
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                  filterPostsByKeyword(e.target.value).then((res) => {
                    console.log(res.data);
                    setPosts(res.data);
                  });
                }}
                type="text"
                className="search-box" placeholder="Search"
              />
            </div>
          </div>
          <div>
            <ul className="main-ul">
              <li className="main-li">
                <Link to="/" className="main-home">Home</Link>
              </li>

              <li className="main-li">
                <a href="" className="main-a main-btn">
                  {loggedIn != false ? (
                    <Link to={"/admin/dashboard"} className="main-my-profile" >My Profile</Link>
                  ) : (
                    <Link to={"/login"} className="main-login" >Login</Link>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
