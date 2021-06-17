import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  width: ${({ fullWidth }) => fullWidth ? '100%' : '300px'};
  color: black;
  border: none;
  color: white;
  text-decoration: none;
  display: inline-block;

  ${props => props.isSecondary && css`
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



export const CustomButton = ({ children }) => {
  return <Button 
          // className={className}
          // onClick={onClick}
          // disabled={disabled}
          >
            {children}
            </Button>;
};
