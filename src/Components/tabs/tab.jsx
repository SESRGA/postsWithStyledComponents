import React from "react";
import { Flex } from "../StyledComponents/flex";
import { MyButton } from "../StyledComponents/myButton";
import { MySpan } from "../StyledComponents/mySpan";

export const Tab = ({id, removeTab, currentTab, setCurrentTab}) => {
    return (
        <Flex 
            maxwidth='250px' 
            height='80px'
            border='#FF7700 solid 2px' 
            borderradius='10px' 
            margin='10px' 
            padding='5px'
            cursor='pointer'
            background={currentTab === id ? '#1A1349' : null}
            color={currentTab === id ? 'white' : null}
            onClick={() => setCurrentTab(id)}
        >
            <MySpan>Post ID: {id}</MySpan>
            <MyButton 
                onClick={(e) => {
                    removeTab(id)
                    e.stopPropagation()
                }}
                width='20px'
                height='20px'
                borderradius='10px'
                border='darkblue solid 1px'
            >
                x
            </MyButton>
        </Flex>
    )
}