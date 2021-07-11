import React, { useContext } from 'react'
import { FormContext } from './FormContext';


// const Select = ({ field_id, field_label, field_placeholder, field_value, field_options }) => {
const Select = (props) => {
    // const { handleChange } = useContext(FormContext)

    return (
        <>
            <label 
                className="form-label">
                    {props.field_label}
            </label>
            <select 
                className="form-select" 
                aria-label="Default select example"
                onChange={event => props.handleChange(props.field_id, event)}
            >
                <option >Open this select menu</option>
                {props.field_options.length > 0 && props.field_options.map((option, i) =>
                    <option value={option.option_label} key={i}>{option.option_label}</option>

                )}
            </select>
        </>
    )
}

export default Select