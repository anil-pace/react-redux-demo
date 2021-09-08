import {createReducer} from "@reduxjs/toolkit"; 
// import {updateStatus} from "./../actions/userAction";  //not needed anymore
import {createSlice} from "@reduxjs/toolkit";


const initialState={
    name: "Anil Kumar",
    age: 30,
    status: "Single"
}

// export default createReducer(initialState, (builder)=>{

//     console.log("asdfkjasldfjklasjdfljasldkf")
//     builder.addCase("UPDATE_AGE", (state, action)=>{
//         state.age = state.age + action.payload
//     })
//     builder.addCase("UPDATE_NAME", (state, action)=>{
//         state.name =  action.payload
//     })
//     builder.addCase(updateStatus, (state, action)=>{
//         state.status =  action.payload
//     })
// })

 const userReducer = createSlice({
    name:"person",
    initialState,
    reducers:{
        updateName(state, action){
            console.log("==update name ==>");
            state.name = action.payload
        },
        
        updateAge(state, action){
            console.log("==update age ==>");
            state.age = action.payload
        },
        
        updateStatus(state, action){
            console.log("==update status ==>");
            state.status = action.payload
        }
    }
})
export default userReducer.reducer
export const {updateAge, updateName, updateStatus} = userReducer.actions