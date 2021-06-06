const myReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        case 'RESET': return 0
        default: return state
    }
}
export default myReducer;

// const geod = (state = {}, action) => {
//     switch (action.type) {
//         case 'ACTIVATE_GEOD':
//             return action.geod;
//         case 'CLOSE_GEOD':
//             return {};
//         default:
//             return state;
//     }
// };
// export default geod;