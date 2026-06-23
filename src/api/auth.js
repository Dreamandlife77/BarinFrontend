import axios from "axios";

const API = axios.create({
  baseURL:
     //"http://localhost:5000/api/auth",
     "http://18.171.221.21:5000/api/auth",
});

export const loginUser =
  async ({
    email,
    password,
  }) => {

    const response =
      await API.post(
        "/login",
        {
          email,
          password,
        }
      );

    return response.data;
  };

export const registerUser =
  async ({
    name,
    email,
    password,
  }) => {

    const response =
      await API.post(
        "/register",
        {
          name,
          email,
          password,
        }
      );

    return response.data;
  };