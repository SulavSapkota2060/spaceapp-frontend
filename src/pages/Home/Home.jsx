import React, { useEffect, useState } from "react";
import PostBox from "../../components/PostBox/PostBox";
import "./Home.css";
import { getPosts } from "../../utils/PostsAPI";

const Home = ({ posts }) => {
  return (
    <div className="home">
      <section className="main-section">
        <h1 className="trending">Trending</h1>
        <p className="description">
          See what Github community is most excited about today
        </p>
      </section>

      {false ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => {
          return <PostBox post={post} />;
        })
      )}
    </div>
  );
};

export default Home;
