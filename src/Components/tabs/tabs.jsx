import React from "react";
import { DefaultTab } from "./defaultTab";
import { Flex } from "../StyledComponents/flex";
import { Tab } from "./tab";

export const Tabs = ({ids, removeTab, currentTab, setCurrentTab}) => {
    const idsArray = Array.from(ids)
    return (
        <Flex justify='start' wrap='wrap'>
            <DefaultTab currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            {idsArray.map(id => 
                <Tab 
                    id={id} 
                    removeTab={removeTab} 
                    currentTab={currentTab} 
                    setCurrentTab={setCurrentTab}
                    key={id}
                />
            )}
        </Flex>
    )
}