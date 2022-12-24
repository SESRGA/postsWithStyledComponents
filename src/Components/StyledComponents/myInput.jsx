import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: ${({width}) => width || '250px'};
    height: 35px;
    border-radius: 10px;
    padding-left: 10px;
    margin: 7px;
    font-size: 16px;
    border: ${({border}) => border || '#FF7700 solid 2px'};
    color: ${({color}) => color || 'darkblue'};
    outline: none;
`

export const MyInput = (props) => {
    return <StyledInput {...props} />
}