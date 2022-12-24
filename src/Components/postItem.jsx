import React, { useState } from "react";
import { PostForm } from '../Components/postForm';
import { MyModal } from './StyledComponents/myModal'
import { updatePostAction } from '../store/postsReducer'
import { useDispatch } from "react-redux";
import { Flex } from "./StyledComponents/flex";
import { MyButton } from "./StyledComponents/myButton";
import { MySpan } from "./StyledComponents/mySpan";

export const PostItem = (props) => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const updatePost = (newPost) => {
        dispatch(updatePostAction(newPost))
        setModal(false)
    }

    return (
        <Flex border='darkblue solid 1px' margin='15px' padding='10px'>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm postEvent={updatePost} existedPost={props.post}/>
            </MyModal>
            <Flex direction='column' width='85%' align='flex-start'>
                <MySpan>{props.id + 1}.{props.post.title}</MySpan>
                <MySpan>{props.post.body}</MySpan>
                <MySpan>id: {props.post.id}</MySpan>
            </Flex>
            <Flex direction='column' width='15%' align='flex-end'>
                <MyButton onClick={() => props.openPost(props.post.id)}>Открыть</MyButton>
                <MyButton onClick={() => setModal(true)}>Редактировать</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </Flex>
        </Flex>
    )
}