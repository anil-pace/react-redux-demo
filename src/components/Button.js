// https://buttercms.com/blog/building-reusable-components-using-react

import React, { useState } from "react";

function Button(props) {
    const [color] = useState(props.color);
    const [variant] = useState(props.variant);

    return (
        <button onClick={props.handleClick}  className={`btn-${variant} btn-${color}`}
        
        >{props.children}</button>
    );
}
export default Button;
