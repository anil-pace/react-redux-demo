// https://scalablecss.com/styled-components-quickstart-guide/

import styled, { css } from 'styled-components';


const CustomButton = styled.button`
  display: inline-block;
  margin: 0.5rem 1rem;
  width: 11rem;
  height: 50px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  padding: 0.5rem;


  ${props => props.isPrimary && css`
    background: ${props => props.theme.bgColor};;
    color: white;
  `}

  ${props => props.theme && css`
    background: props.theme.bgColor;
    color: white;
  `}
  
  ${props => props.isSecondary && css`
    background: red;
    color: white;
  `}

 

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:disabled {
    background-color: black;
    color: grey;
    opacity: 0.7;
    cursor: default;
  }

`;

export default CustomButton;