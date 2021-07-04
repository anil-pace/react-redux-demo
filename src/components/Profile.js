import React from 'react'
import {useSelector, useDispatch} from "react-redux";

export default function Profile() {

    const {name, age, status} = useSelector((state)=> {
        console.log(state);
        return state;
    });

    const dispatch = useDispatch();

    const updateAge=(age)=>{
        dispatch({type:"UPDATE_AGE", payload:age})
    }

    return (
        <div>
            <h2> My name is {name} </h2>
            <h2> I am {age} years old</h2>
            <h2> My status is {status}</h2>
            <button onClick={()=>updateAge(40)}> Update Age </button>
        </div>
    )
}
