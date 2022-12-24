import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    height: ${({height}) => height || '35px'};
    width: ${({width}) => width || '180px'};
    background: ${({background}) => background || '#F5F5F5'};
    color: ${({color}) => color || 'darkblue'};
    border-radius: 10px;
    cursor: pointer;
    margin: 7px;
    border: ${({border}) => border || '#FF7700 solid 2px'};
`

export const MyButton = (props) => {
    return <StyledButton {...props} onClick={props.onClick}>{props.children}</StyledButton>
}