import { createReducer } from "@reduxjs/toolkit";
import {updateStatus} from "../actions"

const initialState={
    name: "anil",
    age: 30,
    status: "coder"
  };


  // old traditional approach

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
        state.age = state.age + action.payload
    })
    builder.addCase("UPDATE_NAME", (state, action)=>{
        state.name =  action.payload
    })
    builder.addCase(updateStatus, (state, action)=>{
        state.status =  action.payload
    })
})