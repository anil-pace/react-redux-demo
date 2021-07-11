import React from 'react'
import Checkbox from './Checkbox';
import Input from './Input';
import Select from './Select';


// const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options } }) => {
const Element =(props)=>{
    console.log("=============== props ===============>");
    console.log(props);
    switch (props.field.field_type) {
        case 'text':
            return (<Input
                field_id={props.field.field_id}
                field_label={props.field.field_label}
                field_placeholder={props.field.field_placeholder}
                field_value={props.field.field_value}
                handleChange={props.handleChange}

            />)
        case 'select':
            return (<Select
                field_id={props.field.field_id}
                field_label={props.field.field_label}
                field_placeholder={props.field.field_placeholder}
                field_value={props.field.field_value}
                field_options={props.field.field_options}
                handleChange={props.handleChange}

            />)
        case 'checkbox':
            return (<Checkbox
                field_id={props.field.field_id}
                field_label={props.field.field_label}
                field_value={props.field.field_value}
                handleChange={props.handleChange}

            />)

        default:
            return null;
    }


}

export default Element