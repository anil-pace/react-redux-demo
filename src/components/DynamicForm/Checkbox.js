import React, { useContext } from 'react'
import { FormContext } from './FormContext';


// const Checkbox = ({ field_id, field_label, field_value }) => {
const Checkbox = (props) =>{
    // const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3 form-check">
            <input type="checkbox" 
                className="form-check-input" 
                id="exampleCheck1" 
                checked={props.field_value}
                onChange={event => props.handleChange(props.field_id, event)}
            />
            <label 
                className="form-check-label" 
                htmlFor="exampleCheck1">{props.field_label}</label>
        </div>
    )
}

export default Checkbox;