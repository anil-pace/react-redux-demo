import { createReducer } from "@reduxjs/toolkit";
import { create } from "jss";


const initialState={
    name: "anil",
    age: 35,
    status: "coder"
  };

//  export default (state = initialState, action)=>{
//     if(action.type === "UPDATE_AGE"){
//         return {
//             ...state,
//             age: action.payload
//         }
//     }
//     return state
//  }

export default createReducer(initialState, (builder)=>{
    builder.addCase("UPDATE_AGE", (state, action)=>{
        state.age = action.payload
    })
})