import React from "react";
import { Flex } from "../StyledComponents/flex";
import { MySpan } from "../StyledComponents/mySpan";

export const DefaultTab = ({currentTab, setCurrentTab}) => {
    return (
        <Flex 
            maxwidth='250px' 
            height='80px'
            border='#FF7700 solid 2px' 
            borderradius='10px' 
            margin='10px 10px 10px 0' 
            padding='5px'
            cursor='pointer'
            background={currentTab === null ? '#1A1349' : null}
            color={currentTab === null ? 'white' : null}
            onClick={() => setCurrentTab(null)}
        >
            <MySpan>Список</MySpan>
        </Flex>
    )
}