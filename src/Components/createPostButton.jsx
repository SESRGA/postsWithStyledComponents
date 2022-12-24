import React, { useState } from 'react';
import { MyModal } from '../Components/StyledComponents/myModal';
import { PostForm } from '../Components/postForm';
import { MyButton } from '../Components/StyledComponents/myButton';
import { createPostAction } from "../store/postsReducer"
import { useDispatch } from 'react-redux';


export const CreatPostButton = ({disabled}) => {

    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()

    const createPost = (newPost) => {
        dispatch(createPostAction(newPost))
        setModal(false)
    }
    
    return (
        <>
            <MyButton 
                onClick={() => setModal(true)} 
                width={'250px'}
                disabled={disabled}
                border={disabled ? 'gray solid 2px' : ''}
                color={disabled ? 'gray' : ''}
            >
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm postEvent={createPost}/>
            </MyModal>
        </>
    )
} 