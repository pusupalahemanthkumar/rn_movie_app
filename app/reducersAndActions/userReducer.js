import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from"axios";
const initialState={
    userData:null,
    error:null
}

export const authenticateAsync =(email,password)=>{
    return async (dispatch,getState)=>{
        try{
            const r= await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            // console.log(r);
            // const config = {
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //   };
            //   const { data } = await axios.post(
            //     "http://localhost:5000/api/users/login",
            //     {
            //       email,
            //       password,
            //     },
            //     config
            //   );
     
            //   console.log(data)
              dispatch(authenticate({token:true,name:"test",email:"test@gmail.com"}));
              console.log("login success");

        }catch(err){
            console.log(err);
        }
        
    }

}

export const registerAsync =(name,email,password,phone)=>{
    return async (dispatch,getState)=>{
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const { data } = await axios.post(
            "http://localhost:5000/api/users/register",
            {
              name,
              email,
              password,
              phone
            },
            config
          );
          console.log(data)
          dispatch(register(data));
    }

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      authenticate: (state, action) => {
        state.userData = action.payload
      },
      register :(state,action)=>{
        state.userData = action.payload
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { authenticate, register } = userSlice.actions
  
  export default userSlice.reducer
