import React from "react";
import styled from "styled-components";
import { Flex } from "./flex";
import { MySpan } from "./mySpan";

const StyledCheckbox = styled.div`
    height: 16px;
    width: 16px;
    background: ${({value}) => value ? '#FF7700' : '#F5F5F5'};
    border-radius: 4px;
    cursor: pointer;
    border: darkblue solid 3px;
    color: darkblue;
    padding: 0 0 5px 0 
`

export const MyCheckbox = ({text, value, setValue, padding}) => {
    return (
        <Flex justify='start' padding={padding}>
            <StyledCheckbox onClick={() => setValue(prev => !prev)} value={value}/>
            <MySpan>{text}</MySpan>
        </Flex>
    )
}