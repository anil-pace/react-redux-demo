const userReducer = createSlice({
    name: "person",
    initialState: initialState,
    reducers: {
        updateName(state, action){
            state.name = action.payload
        },
        updateAge(state, action){
            state.age =action.age
        },
        updateStatus(state, action){
            state.status = action.status
        }
    }
})
export const  {updateAge, updateName, updateStatus} = userReducer.actions
export default userReducer.reducer

import { createReducer } from "@reduxjs/toolkit";
import {updateStatus} from "./../redux/actions/userAction";

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