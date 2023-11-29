import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api";

export const getSearchingData = createAsyncThunk(
    "search/getSearchingData",
    async (searchName, { rejectWithValue }) => {
      //console.log(searchName?.length,"namee")
      try {
      
        const res = await instance.get(`/products?populate=*&filters[title][$contains]=${searchName}`);
        
        return res.data;
      } catch (error) {
        rejectWithValue(error);
      }
    }
  );