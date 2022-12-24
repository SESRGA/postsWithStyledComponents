import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
    text-align: ${({textalign}) => textalign || 'left'}
    margin: ${({margin}) => margin || '0'};  
    padding: ${({padding}) => padding || '10px'};    
    font-size ${({fontsize}) => fontsize || '20px'}
`

export const MySpan = (props) => {
    return <StyledSpan {...props} />
}