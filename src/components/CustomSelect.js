// ./components/CustomSelect.js
import React, { useState } from "react";



function CustomSelect(props) {
    const [data] = useState(props.data);
    const [selectedData, updateSelectedData] = useState("");

    function handleChange(event) {
        updateSelectedData(event.target.value);
        console.log("==========================> anil =======> " + event.target.value)
        if (props.onSelectChange) props.onSelectChange(event.target.value);
    }

    let options = data.map(data => (
        <option key={data.id} value={data.name}>
        {/* <option key={data.id} value={data.id}> */}
            {data.name}
        </option>
    ));

    return (
        <select
            name="customSearch"
            className="custom-search-select"
            onChange={handleChange}
        >
            <option>Select Theme</option>
            {options}
        </select>
    );
}
export default CustomSelect;