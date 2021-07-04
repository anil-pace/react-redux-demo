import React from 'react'
import {useSelector, useDispatch} from "react-redux";
// import updateStatus from "../actions" 
import {updateStatus} from "../actions"

export default function Profile() {

    const {name, age, status} = useSelector((state)=> {
        console.log(state);
        return state;
    });

    const dispatch = useDispatch();

    const updateAge=(age)=>{
        dispatch({type:"UPDATE_AGE", payload:age})
    }
    const updateName=(name)=>{
        dispatch({type:"UPDATE_NAME", payload: name})
    }
    const ChangeStatus=(status)=>{
        dispatch(updateStatus(status));
    }
    

    return (
        <div>
            <h2> My name is <span style={{"color":"red"}}> {name} </span> </h2>
            <h2> I am <span style={{"color":"red"}}> {age} </span> years old</h2>
            <h2> My status is <span style={{"color":"red"}}> {status} </span></h2>

            <button onClick={()=>updateName("amit kumar")}> Update Name </button>
            <button onClick={()=>updateAge(2)}> Update Age </button>
            <button onClick={()=>ChangeStatus("SIngle")}> Update Status </button>
        </div>
    )
}
