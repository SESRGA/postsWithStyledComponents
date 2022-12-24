import React, { useEffect } from "react";
import {useState} from 'react';
import { Flex } from "./StyledComponents/flex";
import { MyButton } from "./StyledComponents/myButton";
import { MyInput } from "./StyledComponents/myInput";
import { MyTextArea } from "./StyledComponents/myTextArea";

export const PostForm = ({postEvent, existedPost}) => {
    const [post, setPost] = useState({title: "", body: ""})
    useEffect(() => {
        if(existedPost) {
            setPost(existedPost)
        }
    }, [existedPost])
    const createOrUpdatePost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: post.id || Date.now()
        }
        postEvent(newPost)
        setPost({title: "", body: ""})
    }
    return (
        <form>
            <Flex direction='column'>
                <MyInput 
                    type="text" 
                    placeholder="Название поста" 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    width='400px'
                />
                <MyTextArea 
                    type="text" 
                    placeholder="Описание поста"
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    width='400px'
                />
                <MyButton onClick={createOrUpdatePost} >Сохранить</MyButton>
            </Flex>
        </form>
    )
} 