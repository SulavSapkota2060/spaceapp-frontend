import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "../Admin/ChangePassword/ChangePassword";
import UpdatePost from "../Admin/UpdatePost/UpdatePost";
import Login from "../Admin/Login/Login";
import NewPost from "../Admin/NewPost/NewPost";
import Profile from "../Admin/Profile/Profile";
import Signup from "../Admin/Signup/Signup";
import ProjectView from "../ProjectView/ProjectView";
import CreateProject from "../CreateProject/CreateProject";
import { getPosts } from "../../utils/PostsAPI";
import PostsByTags from "../PostsByTags/PostsByTags";

const Layout = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data);
      console.log("l");
      setLoading(false);
    });
  }, []);

  return (
    <div className="layout">
      <BrowserRouter>
        <NavigationBar setPosts={setPosts} />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/create_post" element={<CreateProject />} />
          <Route path="/posts/filter/:postTag" element={<PostsByTags />} />
          <Route path="/post_details/:post_id" element={<ProjectView />} />
          <Route path="/admin/new-post" element={<NewPost />} />
          <Route path="/admin/dashboard" element={<Profile />} />
          <Route path="/admin/change-password" element={<ChangePassword />} />
          <Route path="/admin/update-post/:post_id" element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
