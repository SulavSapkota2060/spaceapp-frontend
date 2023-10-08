import React from "react";
import "./PostItem.css";
import { Link } from "react-router-dom";

const PostItem = ({ post, handlePostClick }) => {
  return (
    <div
      className="post-item"
      key={post.id}
      onClick={() => handlePostClick(post.id)}
    >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="buttons">
        <Link to={`/post/${post.id}`} className="button-view">
          View
        </Link>
        <Link to={`/admin/update-post/${post.id}/`} className="button-edit">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
