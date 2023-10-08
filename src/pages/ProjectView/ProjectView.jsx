import React, { useEffect, useState } from "react";
import "./ProjectView.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../utils/PostsAPI";

const ProjectView = () => {
  const tagClasses = ["item-1", "item-2", "item-3"];

  const navigation = useNavigate();
  const params = useParams();
  const postId = params.post_id;
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost(postId).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>loading...</p>
  ) : (
    <section className="project-view">
      <div className="container">
        <div className="about">
          <h1>{post.title}</h1>
          <p>
            {post.content}
            <br />
            <br />
            <br />
            <div className="stars">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
          </p>
        </div>

        <div>
          <section className="tags">
            {post.tags.split(",").map((tag) => {
              return (
                <div className={tagClasses[Math.floor(Math.random() * 3)]}>
                  {tag}
                </div>
              );
            })}
          </section>

          <section className="links" id="links-project-box">
            <ul>
              {post.links != null
                ? post.links.split(",").map((tag) => {
                    return (
                      <a href={tag}>
                        <li> {tag}</li>
                      </a>
                    );
                  })
                : null}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProjectView;
