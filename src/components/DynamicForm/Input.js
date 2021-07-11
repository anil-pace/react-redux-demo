import React, { useContext } from 'react'
import { FormContext } from './FormContext';

//const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
const Input = (props) => {
    console.log("==============input props===========>");
    console.log(props);
    // const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label 
                htmlFor="exampleInputEmail1" 
                className="form-label">
                    {props.field_label}
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                placeholder={props.field_placeholder ? props.field_placeholder : ''}
                value={props.field_value}
                onChange={event => props.handleChange(props.field_id, event)}
            />
        </div>
    )
}

export default Input