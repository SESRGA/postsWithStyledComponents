import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    width: ${({width}) => width || '250px'};
    height: ${({height}) => height || '150px'};
    border-radius: 10px;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 16px;
    resize: none;
    border: #FF7700 solid 2px;
    color: darkblue;
    outline: none;
`

export const MyTextArea = (props) => {
    return <StyledTextArea {...props} />
}