import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthRegister,fetchAuthLogin } from "./authThunk";
const initialState = {
  token: "",
  userDatas: {},
  error: "",
  status: "nothing",
  regStatus:"nothing",
  showContent:"false",
  showModalLoginInfo: false
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers:{
    changeShowContent(state) {
        state.showContent=!state.showContent
    } ,
    changeRegistrationStatus(state){
        state.regStatus="nothing";
        state.showContent=!state.showContent
    },
    changeRegistrationDefault(state){
      state.regStatus="pending"
    },
    signOutAct(state) {
      state.token = "";
      state.userDatas = {};
      state.error = "";
      state.status = "nothing";
      state.regStatus = "nothing";
      state.showContent = false;
      state.showModalLoginInfo=false
    },
    changeSignInStatus(state){
      state.status="nothing"
    },
    changeModalLogStatus(state){
      state.showModalLoginInfo=!state.showModalLoginInfo
    }
    
    
  },
  extraReducers: (builder) => {

    //Registerr
    builder.addCase(fetchAuthRegister.pending, (state) => {
      state.regStatus = "pending";
    });
    builder.addCase(fetchAuthRegister.fulfilled, (state, action) => {
      state.regStatus = "success";
      //Api cavab
    //   state.userDatas= action.payload.user;
    //   state.token=action.payload.jwt
     console.log(action.payload)

      // console.log(action.payload,"buildercard")
    });

    builder.addCase(fetchAuthRegister.rejected, (state, action) => {
      state.regStatus = "error";
      state.error= action.payload
      //Api cavab error
      console.log(action.payload);
    });

    // Loginn

    builder.addCase(fetchAuthLogin.pending, (state) => {
        state.status = "pending";
      });
      builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
        state.status = "success";
        //Api cavab
        state.userDatas= action.payload.user;
        state.token=action.payload.jwt
       console.log(action.payload,"logonJsttt" )
  
        // console.log(action.payload,"buildercard")
      });
  
      builder.addCase(fetchAuthLogin.rejected, (state, action) => {
        state.status = "error";
        state.error= action.payload
        state.token=""
        //Api cavab error
        console.log(action.payload);
      });
  },
});

export const {
  changeShowContent,
  changeRegistrationStatus,
  changeRegistrationDefault,
  signOutAct,
  changeSignInStatus,
  changeModalLogStatus
}= authReducer.actions
export default authReducer.reducer;
