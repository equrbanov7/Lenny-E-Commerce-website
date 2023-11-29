import { instance } from "..";
import axios from "axios";

// Register
export const register = async (registerObj) => {
  const res = await instance.post("/auth/local/register", registerObj);

  return res.data;
};

// Login

export const login = async (loginObj) => {
  const res = await axios.post(
    "http://localhost:1337/api/auth/local",
    JSON.stringify(loginObj),
    {
      headers: {
    
         
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
