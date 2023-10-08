import React, { useState } from "react";
import "./CreateProject.css";
import { newPost } from "../../utils/PostsAPI";

const CreateProject = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tags, setTags] = useState();
  const [links, setLinks] = useState();

  const createProject = () => {
    let project_details = {
      title: title,
      content: content,
      tags: tags,
      links: links,
    };
    newPost(project_details).then((res) => console.log(res));
  };

  return (
    <section className="main-section">
      <h1>Create A New Project</h1>

      <div className="main-container-project">
        <div className="item-1-project">
          <form action="" className="project-name">
            <label for="">Project Name</label>
            <br />
            <input
              type="text"
              name=""
              id="project-name-box"
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>

          <br />
          <form action="" className="about-the-project">
            <label for="">About the Project</label>
            <br />
            <input
              type="text"
              name=""
              id="about-the-project-box"
              onChange={(e) => setContent(e.target.value)}
            />
          </form>
        </div>

        <div className="item-2-project">
          <form action="" className="tags-project">
            <label for="">Tags(Separate tags with commas)</label>
            <br />
            <input
              type="text"
              name=""
              id="tags-project-box"
              onChange={(e) => setTags(e.target.value)}
            />
          </form>

          <form action="" className="links-project">
            <label for="">Links</label>
            <br />
            <input
              type="text"
              name=""
              id="links-project-box"
              onChange={(e) => setLinks(e.target.value)}
            />
          </form>

          <a href="">
            <button
              className="btn-add"
              onClick={(e) => {
                e.preventDefault();
                createProject();
              }}
            >
              Add
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreateProject;
