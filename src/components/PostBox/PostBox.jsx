import React from "react";
import "./PostBox.css";
import { Link } from "react-router-dom";

const PostBox = ({ post }) => {
  const tagClasses = ["item-1", "item-2", "item-3"];
  return (
    <div className="postbox">
      <section className="project-descriptions">
        <div className="project-1">
          <div className="project-name">
            <h1>{post.title}</h1>
            <p>{post.slug}</p>
            <br />
            <br />
            <p className="stars">⭐️⭐️⭐️⭐️⭐️</p>
          </div>

          <div className="project-details">
            <p>{post.content}</p>
            <div className="developer-name">{post.user}</div>

            <div className="programming-languages">
              <div className="container-programming-languages">
                {post.tags.split(",").map((tag) => {
                  return (
                    <a href={`/posts/filter/${tag}`}>
                      <div
                        className={tagClasses[Math.floor(Math.random() * 3)]}
                      >
                        {tag}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <Link to={`/post_details/${post.id}`}>
              <button className="view">View</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostBox;
