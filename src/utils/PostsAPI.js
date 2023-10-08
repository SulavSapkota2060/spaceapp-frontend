import { urls, endpoint } from "./API";
import { get, post } from "./API";

const getPostsByUser = async () => {
  return get(`${endpoint}${urls.blog.getPostsByUser}`).then((res) => res);
};

const getPost = async (id) => {
  return get(`${endpoint}${urls.blog.getPost}${id}`).then((res) => res);
};

const updatePost = async (id, data) => {
  return post(`${endpoint}${urls.blog.updatePost}${id}/`, data).then(
    (res) => res
  );
};

const getPosts = async () => {
  console.log("first");
  return get(`${endpoint}${urls.blog.getPosts}`).then((res) => res);
};

const newPost = async (data) => {
  return post(`${endpoint}${urls.blog.newPost}`, data).then((res) => res);
};

const filterPostsByTag = async (filter) => {
  return get(`${endpoint}${urls.blog.filterPostsByTag}${filter}`).then(
    (res) => res
  );
};

const filterPostsByKeyword = async (filter) => {
  return get(`${endpoint}${urls.blog.filterPostsByKeyword}${filter}`).then(
    (res) => res
  );
};

export {
  filterPostsByKeyword,
  filterPostsByTag,
  getPostsByUser,
  getPost,
  updatePost,
  newPost,
  getPosts,
};
