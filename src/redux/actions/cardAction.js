import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api";

export const getSelectedProducts = createAsyncThunk(
  "cardproducts/getSelectedProducts",
  
  async (products, { rejectWithValue }) => {
    try {
     
      let query = `/products?populate=*`;

      for (let i = 0; i < products.length; i++) {
        query += `&filters[id][$in][${i}]=${products[i]}`;
      } 
    
      const res = await instance.get(query);
    
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
