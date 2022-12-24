import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
    width: ${({width}) => width || '250px'};
    height: ${({height}) => height || '35px'};
    border-radius: 10px;
    padding-left: 10px;
    margin: 7px;
    border: ${({border}) => border || '#FF7700 solid 2px'};
    color: ${({color}) => color || 'darkblue'};
    cursor: pointer
`

export const MySelect = (props) => {
    return <StyledSelect {...props} onChange={props.onChange}>{props.children}</StyledSelect>
}