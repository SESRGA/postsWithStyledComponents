import React, { useEffect, useState } from "react";
import PostService from "../API/postService";
import { CreatPostButton } from "./createPostButton";
import { SelectComponent } from "./selectComponent"
import { Flex } from "./StyledComponents/flex";

export const PostFilter = ({filter, setFilter, disabled, border, color}) => {
    const [userIds, setUserIds] = useState([])
    
    useEffect(() => {
        fetchUserIds()
    }, [])

    const fetchUserIds = async () => {
        const response = await PostService.getUsersList()
        setUserIds(response.data.map(user => user.id))
    }
    return (
        <Flex align='flex-end' direction='column'>
            <CreatPostButton disabled={disabled}/>
            <SelectComponent 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по..."
                options={[
                    { value: "id", name: "По ID" },
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" }
                ]}
                disabled={disabled}
                border={border}
                color={color}
            />
            <SelectComponent
                value={filter.userFilter}
                onChange={selectedUser => setFilter({...filter, userFilter: selectedUser})}
                defaultValue="Фильтр по user id"
                options={[
                {value: "", name: "Сбросить фильтр"},
                ...userIds.map(userId => {
                    return {value: userId, name: userId.toString()}
                })]}
                disabled={disabled}
                border={border}
                color={color}
            />
        </Flex>
    )
}