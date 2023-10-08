import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdatePost.css";
import { AuthWrapper } from "../../../utils/AuthWrapper.jsx";
import { getPost, updatePost } from "../../../utils/PostsAPI";
import { checkAuth } from "../../../utils/UserAPI";

const UpdatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [postType, setPostType] = useState("");
  const [user, changeUser] = useState("");
  const navigation = useNavigate();
  const params = useParams();
  const postId = params.post_id;

  useEffect(() => {
    checkAuth().then((res) => changeUser(res.data.data.email));
    // Fetch the existing post data
    getPost(params.post_id).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
      setSlug(res.data.slug);
      setPostType(res.data.post_type);
    });
  }, [postId]);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    console.log(formData);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("slug", slug);
    formData.append("user", user);
    formData.append("image", image);
    formData.append("post_type", postType);
    console.log(formData);
    try {
      // Assuming you have an updatePost function in your PostsAPI to handle the update request
      updatePost(postId, formData).then((res) => {
        if (res.status == 200) {
          navigation("/admin/dashboard", {
            state: {
              status: "success",
              message: "Updated Post Succesfully!",
            },
          });
        }
        // Redirect to the updated post or a success page
      });
    } catch (error) {
      // Handle fetch error
      console.log("Error updating the post:", error);
    }
  };

  return (
    <AuthWrapper>
      <div className="update-post">
        <h3>Update Post</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titlte</label>
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
          <button type="submit">Update Post</button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default UpdatePost;
