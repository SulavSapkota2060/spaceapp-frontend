import axios from "axios";
import Cookies from "js-cookie";

const endpoint = "http://booleanassassins.pythonanywhere.com/";
const urls = {
  user: {
    login: "auth/login",
    logout: "auth/logout",
    register: "auth/register",
    userProfile: "auth/user_profile",
    changePassword: "auth/change_password/",
  },
  blog: {
    getPostsByUser: "api/get_posts_by_user",
    getPost: "api/get_post/",
    updatePost: "api/update_post/",
    newPost: "api/add_post",
    getPosts: "api/posts",
    filterPostsByTag: "api/filter_by_tag/",
    filterPostsByKeyword: "api/filter/",
  },
};

// Setting Predefined Headers
const headers = {
  headers: {
    jwt: Cookies.get("jwt"),
    withCredentials: true,
  },
};

// post function
const post = async (url, body) => {
  return axios
    .post(url, body, { withCredentials: true }, headers)
    .catch((err) => {
      console.log("err");
      if (err.response.status == 401) {
        return null;
      }
    });
};

const get = async (url) => {
  return axios
    .get(
      url,
      {
        withCredentials: true,
      },
      headers
    )
    .catch((err) => {
      if (err.response.status == 401) {
        return null;
      }
    });
};

// get function

export { endpoint, urls, post, get };
