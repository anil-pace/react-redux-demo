import {createReducer} from "@reduxjs/toolkit"; 
// import {updateStatus} from "./../actions/userAction";  //not needed anymore
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const initialState={
    name: "Anil Kumar",
    age: 30,
    status: "Single"
}

export const fetchUserName = createAsyncThunk(
    "fetchUserName",
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const res2 = await res.json();
        return res2[0].name;
    }
)
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
     },
     extraReducers: {
         [fetchUserName.fulfilled]: (state, action) => {
             state.name = action.payload;
         },
         [fetchUserName.pending]: (state, action) => {
            state.name = "loading...";
         },
         [fetchUserName.rejected]: (state, action) => {
            state.name = "try again!";
        },
         
    }
})
export default userReducer.reducer
export const {updateAge, updateName, updateStatus} = userReducer.actions