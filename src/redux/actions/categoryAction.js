import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get("/categories?populate=*");
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getOneCategory = createAsyncThunk(
  "category/getOneCategory",
  async (id, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `/products?populate=*&[filters][categories][id][$eq]=${id}`
      );
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//FilterObj

export const getProductsByCategoryId = createAsyncThunk(
  "categoriesss/getProductsByCategoryId",
  async (
    {
     
      page,
      rating,
      price,
      type,
      sort,
      colorArray,
      categoryArray,
    },
    thunkApi
  ) => {
    try {
      // Create an array of color filters based on colorArray
      const colorFilters = colorArray.map(
        (color) => `[filters][color][$eq]=${color}`
      );

      // Create an query for multiple category question
      let query = "";

      for (let i = 0; i < categoryArray.length; i++) {
        query += `&[filters][categories][id][$eq]=${categoryArray[i]}`;
      }
      //console.log(query, "aaaaaaaa");

      // Join the color filters with '&' and include them in the query string
      const colorFilterString = colorFilters.join("&");

      const res = await instance.get(
        `/products?populate=*${categoryArray && query}  
        &[filters][rating][$gte]=${rating ? "4" : ""}${
          colorArray && `&${colorFilterString}`
        }${type && `&[filters][type][$eq]=${type}`}${
          price[0] && `&[filters][price][$gte]=${price[0]}`
        }${price[1] && `&[filters][price][$lte]=${price[1]}`}${
          sort && `&sort=price:${sort}`
        }&pagination[page]=${page}&pagination[pageSize]=12`
      );

      return res.data;
    } catch (error) {
      console.log(error);
      thunkApi.rejectWithValue(error);
    }
  }
);
