//https://blog.logrocket.com/8-awesome-features-of-styled-components/


import styled from "styled-components"

const CustomDiv = styled.div`
    // border: 1px solid ${props => props.borderColor ? props.borderColor : "palevioletred"};

    padding: 10px;
    color: ${props => props.theme.color};
    border: 5px solid ${props => props.theme.borderColor};
`
export default CustomDiv;