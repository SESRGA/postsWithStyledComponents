import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 40px;
    margin: 10px;
    color: darkblue;
    text-align: center;
`

export const MyTitle = ({children, props}) => {
    return <StyledTitle {...props}>{children}</StyledTitle>
}