import React, { useState } from "react";

function CustomFormInput(props) {
    console.log("===========>");
    console.log(props);
    const [inputType] = useState(props.type)
    const [label] = useState(props.label)
    const [placeholder] = useState(props.placeholder);
    const [inputName] = useState(props.inputname);
    const [inputValue, setInputValue] = useState('');
    

    function handleChange(event) {
        setInputValue(event.target.value);
         if (props.onChange) props.onChange(inputValue)
    }
    return (
        <div>
            <label htmlFor={inputName}>{label}</label>
            <input
                name={inputName}
                type={inputType}
                value={inputValue}
                name="input-form"
                placeholder={placeholder}
                onChange={handleChange}
                class="inputclass"
                // required
                 />
            <span>{inputValue}</span>
        </div>
    );
}
export default CustomFormInput;