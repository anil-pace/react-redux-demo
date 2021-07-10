import { Update } from '@material-ui/icons';
import React from 'react'
import {useSelector, useDispatch} from "react-redux";
// import {updateStatus} from "./../redux/actions/userAction"; // action creator way
import {updateAge, updateName, updateStatus} from "../redux/reducers/userReducer"

export default function Profile() {

    const {name, age, status} = useSelector((state)=> {
        console.log(state);
        return state;
    });

    const dispatch = useDispatch();

    const changeAge=(age)=>{
        dispatch(updateAge(age));
        // dispatch({type:"UPDATE_AGE", payload: age})

    }
    const changeName= async (name)=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const res2 = await res.json();
        dispatch(updateName(res2[0].name));
        // dispatch(updateName(name));
        // dispatch({type:"UPDATE_NAME", payload: name})
    }
    const ChangeStatus=(status)=>{
        dispatch(updateStatus(status));
    }
    

    return (
        <div>
            <h2> My name is <span style={{"color":"red"}}> {name} </span> </h2>
            <h2> I am <span style={{"color":"red"}}> {age} </span> years old</h2>
            <h2> My status is <span style={{"color":"red"}}> {status} </span></h2>

            <button onClick={()=>changeName("amit kumar")}> Update Name </button>
            <button onClick={()=>changeAge(32)}> Update Age </button>
            <button onClick={()=>ChangeStatus("Married")}> Update Status </button>
        </div>
    )
}
