import React from "react";
import { Link } from 'react-router-dom';
import { Flex } from "../Components/StyledComponents/flex";
import { MyTitle } from "../Components/StyledComponents/myTitle";

const ErrorPage = () => {
    return (
        <Flex direction='column'>
            <MyTitle>Непредвиденная ошибка</MyTitle>
            <Link to="/">Вернутся на главную</Link>
        </Flex>
    )
}

export default ErrorPage