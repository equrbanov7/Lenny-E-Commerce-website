import { createSlice } from "@reduxjs/toolkit";
import { getSelectedProducts } from "../actions/cardAction";

// console.log(persistor)
const initialState = {
  loading: false,
  productIds: [0],
  exampleIdCount: [{ id: 0, count: 0, checking: false }],
  selectedProducts: {},
  result: [],

  total: 0,
  count: 0,
  clickedProduct: false,
  conditionHasBeenMet: false,
};

export const selectedProductCard = createSlice({
  name: "selectedproducts",
  initialState,

  reducers: {
    // no ACTION_TYPES, this will internally create a type "user/addItem" that you will never use by hand. You will only see it in the devTools

    addItem(state, action) {
      // you can use mutable logic in createSlice reducers
      state.productIds.push(action.payload);
      // console.log(action.payload, "reducerrr")
    },
    selectingIdCount(state, action) {
      state.exampleIdCount.push(action.payload);
      // console.log(action.payload.id,"actt" )
    },
    mergingData(state, action) {
      state.result = action.payload;
    },

    removeItem(state, action) {
      const itemId = action.payload;

      // state.selectedProducts.data = state.selectedProducts.data.filter(
      //   (item) => item.id !== itemId
      // );
      state.exampleIdCount = state.exampleIdCount.filter(
        (item) => item.id != itemId
      );

      // Remove the item from the result array
      state.result = state.result.filter((item) => item.id != itemId);
      state.productIds = state.productIds.filter((id) => id != itemId);
    },
    increment(state, action) {
      // setCounter((prevCounter) => prevCounter + 1);
      // state.count += action.payload;
      const { id, newCount } = action.payload;
      var size = 0;
      // Update the count in exampleIdCount
      for (let j = 0; j < state.exampleIdCount.length; j++) {
        const item = state.exampleIdCount[j];
        if (item.id == id) {
          size = size + 1;
        }
      }
      for (let i = 0; i < state.exampleIdCount.length; i++) {
        const item = state.exampleIdCount[i];

        if (item.id == id) {
          // Update the count of the first matching item and exit the loop
          item.count = newCount - size + 1;
          break;
        }
      }

      // Update the count in the result array
      state.result = state.result.map((item) => {
        if (item.id == id) {
          return { ...item, count: newCount };
        }
        return item;
      });
      //console.log(action.payload, "aaa");
    },

    decrement(state, action) {
      const { id, newCount } = action.payload;
      if (newCount > 0) {
        var size = 0;
        // Update the count in exampleIdCount
        for (let j = 0; j < state.exampleIdCount.length; j++) {
          const item = state.exampleIdCount[j];
          if (item.id == id) {
            size = size + 1;
          }
        }
        for (let i = 0; i < state.exampleIdCount.length; i++) {
          const item = state.exampleIdCount[i];

          if (item.id == id) {
            // Update the count of the first matching item and exit the loop
            item.count = newCount - size + 1;
            break;
          }
        }

        // Update the count in the result array
        state.result = state.result.map((item) => {
          if (item.id == id) {
            return { ...item, count: newCount };
          }
          return item;
        });
      }
    },
    // verifingItem(state, action){
    //   state.clickedProduct=ac
    // }
    toggleCheck(state, action) {
      state.exampleIdCount = action.payload;
    },
    signOutUserDatas(){
      return initialState;
    }
  },

  extraReducers: (builder) => {
    //getCategories
    builder.addCase(getSelectedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSelectedProducts.fulfilled, (state, action) => {
      state.loading = false;
      //Api cavab
      state.selectedProducts = action.payload;

      // console.log(action.payload,"buildercard")
    });

    builder.addCase(getSelectedProducts.rejected, (state, action) => {
      state.loading = false;
      //Api cavab error
      console.log(action.payload);
    });
  },
});
export const {
  addItem,
  removeItem,
  increment,
  decrement,
  selectingIdCount,
  mergingData,
  toggleCheck,
  signOutUserDatas
} = selectedProductCard.actions;
export const cardReducer = selectedProductCard.reducer;
