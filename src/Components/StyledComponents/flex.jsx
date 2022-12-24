import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-Items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    margin: ${({margin}) => margin || '0'};  
    padding: ${({padding}) => padding || '0'};    
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    border: ${({border}) => border || ''};
    border-radius: ${({borderradius}) => borderradius || '0'};
    background: ${({background}) => background || ''};
    color: ${({color}) => color || 'darkblue'};
    cursor: ${({cursor}) => cursor || ''};
    max-width: ${({maxwidth}) => maxwidth || '100%'};
`

export const Flex = (props) => {
    return <StyledFlex {...props} onClick={props.onClick}/>
}