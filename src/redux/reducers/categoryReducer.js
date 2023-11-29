import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getOneCategory,
  getProductsByCategoryId,
} from "../actions/categoryAction";

const initialState = {
  loading: false,
  categories: {},
  oneCategory: {},

  // filteredProd:[],
  filterObj: {
    color: "",
    page: "",
    price: ["", ""],
    type: "",
    sort: "",
    rating: "",
    id: "",
    check: false,
    colorArray: [],
    categoryArray: [],
  },
  checkFilterControl: [{ checkedName: "", checking: false }],
  checkPriceRangeControl: [{ checkedName: "", checking: false }],
  checkCategoryControl: [{ checkedName: "", checking: false }],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setObjFilter: (state, action) => {
      //function
      state.filterObj[action.payload.name] = action.payload.value;
      //console.log(action.payload);
    },
    controlChecked: (state, action) => {
      const { checkedName, checking } = action.payload;
      const existingControl = state.checkFilterControl.find(
        (item) => item.checkedName === checkedName
      ); 

      if (existingControl) {
        existingControl.checking = checking;
      } else {
        state.checkFilterControl.push(action.payload);
      }
    },
    controlPriceRange: (state, action) => {
      const { checkedName, checking } = action.payload;
      const existingControl = state.checkPriceRangeControl.find(
        (item) => item.checkedName === checkedName
      );

      if (existingControl) {
        existingControl.checking = checking;
      } else {
        state.checkPriceRangeControl.push(action.payload);
      }
    },
    controlCategory: (state, action) => {
      const { checkedName, checking } = action.payload;
      const existingControl = state.checkCategoryControl.find(
        (item) => item.checkedName === checkedName
      );

      if (existingControl) {
        existingControl.checking = checking;
      } else {
        state.checkCategoryControl.push(action.payload);
      }
    },
    resetPriceRange: (state, action) => {
      state.checkPriceRangeControl = action.payload;
    },
    signOutUserFilters: (state) => {
      return {
        ...state,
        filterObj: {
          color: "",
          page: "",
          price: ["", ""],
          type: "",
          sort: "",
          rating: "",
          id: "",
          check: false,
          colorArray: [],
          categoryArray: [],
        },
        checkFilterControl: [{ checkedName: "", checking: false }],
        checkPriceRangeControl: [{ checkedName: "", checking: false }],
        checkCategoryControl: [{ checkedName: "", checking: false }],
      };
    },
  },

  extraReducers: (builder) => {
    //getCategories
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      //Api cavab
      state.categories = action.payload;
      //  console.log(action.payload)
    });

    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      //Api cavab error
      console.log(action.payload);
    });

    // getOneCategory
    builder.addCase(getOneCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOneCategory.fulfilled, (state, action) => {
      state.loading = false;
      //Api cavab
      state.oneCategory = action.payload;
    });
    builder.addCase(getOneCategory.rejected, (state, action) => {
      state.loading = false;
      //Api cavab error
      console.log(action.payload);
    });

    // getFilteredProducts
    builder.addCase(getProductsByCategoryId.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductsByCategoryId.fulfilled, (state, action) => {
      state.loading = false;
      //Api cavab
      state.oneCategory = action.payload;
    });
    builder.addCase(getProductsByCategoryId.rejected, (state, action) => {
      state.loading = false;
      //Api cavab error
      console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  setObjFilter,
  controlChecked,
  controlPriceRange,
  resetPriceRange,
  signOutUserFilters,
  controlCategory,
} = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
