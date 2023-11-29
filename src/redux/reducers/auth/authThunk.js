import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login } from "../../../api/auth";

export const fetchAuthRegister = createAsyncThunk(
  "auth/fetchAuthRegister",
  async (regObj, { rejectWithValue }) => {
    try {
      const result = await register(regObj);

      return result;
    } catch (error) {
      return rejectWithValue("There is an problem");
    }
  }
); 

//Login
export const fetchAuthLogin = createAsyncThunk(
  "auth/fetchAuthLogin",
  async (logObj, { rejectWithValue }) => {
    try {
      const result = await login(logObj);

      return result;
    } catch (error) {
      return rejectWithValue("There is a login issue");
    }
  }
);
