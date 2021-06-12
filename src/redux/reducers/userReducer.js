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