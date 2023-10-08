import React, { useEffect, useState } from "react";
import PostBox from "../../components/PostBox/PostBox";
import "../Home/Home.css";
import { filterPostsByTag, getPosts } from "../../utils/PostsAPI";
import { useParams, useNavigate } from "react-router";

const PostsByTags = ({}) => {
  const navigation = useNavigate();
  const params = useParams();
  const postTag = params.postTag;
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    filterPostsByTag(postTag).then((res) => {
      setPosts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="">
      <section className="main-section">
        <h1 className="trending">Tag: {postTag.toUpperCase()}</h1>
        <p className="description">Relevant Search Results</p>
      </section>

      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => {
          return <PostBox post={post} />;
        })
      )}
    </div>
  );
};

export default PostsByTags;
