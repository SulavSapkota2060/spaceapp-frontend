import { urls, endpoint } from "./API";
import { post, get } from "./API";
import axios from "axios";

// Login USER
const loginUser = async (credentials) => {
  return post(`${endpoint}${urls.user.login}`, credentials).then((res) => res);
};

const signupUser = async (credentials) => {
  console.log("Signup Triggerred");
  return post(`${endpoint}${urls.user.register}`, credentials).then(
    (res) => res
  );
};

// Logout USER
const logout = async () => {
  return post(`${endpoint}${urls.user.logout}`).then((res) => res);
};

// Check whether the user is logged in or not. For AuthWrapper purposes
const checkAuth = async () => {
  return get(`${endpoint}${urls.user.userProfile}`).then((res) => res);
};

const changePassword = async (credentials) => {
  return post(`${endpoint}${urls.user.changePassword}`, credentials).then(
    (res) => res
  );
};

export { loginUser, logout, checkAuth, changePassword, signupUser };
