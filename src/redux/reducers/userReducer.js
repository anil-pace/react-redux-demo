import {createReducer} from "@reduxjs/toolkit"; 
import {updateStatus} from "./../actions/userAction";

const initialState={
    name: "Anil",
    age: 30,
    status: "Single"
}

export default createReducer(initialState, (builder)=>{

    console.log("asdfkjasldfjklasjdfljasldkf")
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