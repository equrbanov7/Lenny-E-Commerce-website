import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (obj, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `/products?populate=*&pagination[start]=${0}&pagination[limit]=${obj}`
      );
 
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);



export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async (id, { rejectWithValue }) => {
    try {

    
      const res = await instance.get(
        `/products?populate=*&[filters][id][$eq]=${id} `
      );

      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
