// old traditional approach

// export default (status)=>{
//     return {
//         type:"UPDATE_STATUS",
//         payload: status
//     }
// }

// same other new way
import {createAction} from "@reduxjs/toolkit"
export const updateStatus = createAction("UPDATE_STATUS");