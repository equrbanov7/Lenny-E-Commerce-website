import { createSlice } from "@reduxjs/toolkit";
import { getSearchingData } from "../actions/searchAction";

const initialState = {
  loading: false,
  searchedData: {},
  searchFocus:false
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchInputControl:(state)=>{
        state.searchFocus=!state.searchFocus
    }
  },
  extraReducers: (builder) => {
    //getSearchData
    builder.addCase(getSearchingData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchingData.fulfilled, (state, action) => {
      state.loading = false;
      //Api cavab
      state.searchedData = action.payload;
      //  console.log(action.payload)
    });

    builder.addCase(getSearchingData.rejected, (state, action) => {
      state.loading = false;
      //Api cavab error
      console.log(action.payload);
    });
  },
});

export const { searchInputControl } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
