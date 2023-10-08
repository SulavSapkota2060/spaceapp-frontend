import React, { useState, useEffect } from "react";
import "./Profile.css";
import { checkAuth, logout } from "../../../utils/UserAPI";
import { getPostsByUser } from "../../../utils/PostsAPI";
import PostBox from "../../../components/PostBox/PostBox";
import { Navigate, useNavigate } from "react-router";
import { AuthWrapper } from "../../../utils/AuthWrapper";

const Profile = () => {
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [userProjects, setUserProjects] = useState([]);
  useEffect(() => {
    checkAuth()
      .then((res) => {
        if (res == null) {
          // logout();
          // navigate("/login");
        } else {
          setUserInfo(res.data);
          console.log(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("errorrrr");
      });
    getPostsByUser().then((res) => setUserProjects(res.data));
  }, []);
  return (
    <AuthWrapper>
      {loading ? (
        <p>loading </p>
      ) : (
        <div className="main-container">
          <div className="cover-photo">
            <img src="coverphoto.png" />
          </div>
          <div className="main-details">
            <div className="profile-pic">
              <img src="profilepic.png" />
            </div>
            <h1 className="name-address">
              <span className="name">{userInfo.full_name}</span>
              <br />
              <button
                onClick={() => {
                  logout();
                  <Navigate to="/login" />;
                }}
              >
                Logout
              </button>
              <span className="address">{userInfo.location}</span>
              <br />
              <span className="username">{userInfo.email}</span>
            </h1>
          </div>
          <h2 className="maintext">
            <span className="title">About Me</span>
            <br />
            <br />
            <span className="text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum."Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled
            </span>
          </h2>
          <h2 className="maintext">
            <span className="title">Projects</span>
            <br />
            <br />
            {userProjects.map((post) => {
              return <PostBox post={post} />;
            })}
          </h2>
        </div>
      )}
    </AuthWrapper>
  );
};

export default Profile;
