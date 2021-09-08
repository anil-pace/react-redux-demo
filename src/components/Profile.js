import { Update } from '@material-ui/icons';
import { current } from '@reduxjs/toolkit';
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import DynamicForm from "../components/DynamicForm/index";
// import {updateStatus} from "./../redux/actions/userAction"; // action creator way
import { updateAge, updateName, updateStatus, fetchUserName } from "../redux/reducers/userReducer";

export default function Profile() {

    const {name, age, status} = useSelector((state)=> {
        console.log(state);
        return state;
    });
    const [currentStatus, setCurrentStatus] = useState(status);
    const dispatch = useDispatch();

    const changeAge=(age)=>{
        dispatch(updateAge(age));
        // dispatch({type:"UPDATE_AGE", payload: age})

    }
    const toggleName =  () => {
        dispatch(fetchUserName());
    }
    const toggleStatus = () => {
        currentStatus === "Single" ?
            setCurrentStatus("Married") :
            setCurrentStatus("Single");
        dispatch(updateStatus(currentStatus));
    }
    return (
        <div style={{"display":"flex", "justifyContent":"space-around", "alignContent":"center"}}>
            <div style={{"border":"2px solid #000", "width":"50%"}}>
                <h1>All redux / redux toolkit</h1>
                <hr />
                <h2> My name is <span style={{"color":"red"}}> {name} </span> </h2>
                <h2> I am <span style={{"color":"red"}}> {age} </span> years old</h2>
                <h2> My status is <span style={{"color":"red"}}> {currentStatus} </span></h2>

                <button onClick={()=>toggleName()}> Fetch Random Name </button>
                <button onClick={()=>changeAge(32)}> Update Age </button>
                <button onClick={()=>toggleStatus()}> Toggle Status </button>
            </div>
            {/* /* Dynamic form generation  */}
            <div style={{"border":"2px solid #000", "width":"50%"}}>
                <h1>Dynamic Form Generation </h1>
                <hr />
                <DynamicForm /> 
            </div>
        </div>
    )
}
