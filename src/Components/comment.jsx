import React from "react";
import { Flex } from "./StyledComponents/flex";
import { MySpan } from "./StyledComponents/mySpan";

export const Comment = ({comment}) => {
    return (
        <Flex border='#FF7700 solid 1px' margin='30px' direction='column' width='95%'>
            <MySpan>{comment.body}</MySpan>
            <MySpan>{comment.email}</MySpan>
        </Flex>
    )
}