import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";
import { AuthWrapper } from "../../../utils/AuthWrapper.jsx";
import { newPost } from "../../../utils/PostsAPI";

const NewPost = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [postType, setPostType] = useState("");
  const navigation = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("slug", slug);
    formData.append("image", image);
    formData.append("post_type", postType);
    console.log(formData);
    try {
      newPost(formData).then((res) => {
        if (res.status == 200) {
          navigation("/admin/dashboard", {
            state: {
              status: "success",
              message: "Added Post Succesfully!",
            },
          });
        }
      });
    } catch (error) {
      // Handle fetch error
      console.log("Error creating a new post:", error);
    }
  };

  return (
    <AuthWrapper>
      <div className="new-post">
        <h3>Create New Post</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postType">Post Type</label>
            <select
              id="postType"
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
            >
              <option value="">Select Post Type</option>
              <option value="Event">Event</option>
              <option value="Resource">Resource</option>
              <option value="Blog">Blog</option>
            </select>
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default NewPost;
