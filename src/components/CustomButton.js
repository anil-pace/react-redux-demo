import styled, { css } from 'styled-components';


const CustomButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  height: 50px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  padding: 0.5rem;


  ${props => props.isPrimary && css`
    background: blue;
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
`;

export default CustomButton;