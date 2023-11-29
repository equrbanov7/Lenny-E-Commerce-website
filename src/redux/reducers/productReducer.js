import { createSlice } from '@reduxjs/toolkit'
import { getProducts, getOneProduct } from '../actions/productAction'

const initialState = {
  loading: false,
  pageObj:{start:0,limit:8 },
  products:{},
  oneProduct:{}
 
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setObjFilter: (state,action) => {
          //function
          console.log(action.payload)
      }
    }, 

    extraReducers:(builder)=>{
        //getProducts
        builder.addCase(getProducts.pending,(state)=>{
            state.loading=true
        });
        
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.loading=false;
            //Api cavab
            state.products=action.payload
         //   console.log(action.payload, "payloadd")
        });
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.loading=false;
             //Api cavab error
             console.log(action.payload)
        });

        // getOneProduct
        builder.addCase(getOneProduct.pending,(state)=>{
            state.loading=true
        });
        
        builder.addCase(getOneProduct.fulfilled,(state,action)=>{
            state.loading=false;
           
            //Api cavab
            state.oneProduct=action.payload
         //   console.log(action.payload, "payloadd")
        });
        builder.addCase(getOneProduct.rejected,(state,action)=>{
            state.loading=false;
             //Api cavab error
             console.log(action.payload)
        });
    
      }
  
})

export const productReducer= productSlice.reducer