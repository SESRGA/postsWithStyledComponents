import React, {useEffect, useState} from "react";
import { Flex } from "./StyledComponents/flex";
import { MySpan } from "./StyledComponents/mySpan";
import { MyTitle } from "./StyledComponents/myTitle";
import { useDispatch } from "react-redux";
import { PostForm } from '../Components/postForm';
import { MyModal } from './StyledComponents/myModal'
import { updatePostAction } from '../store/postsReducer'
import { MyButton } from "./StyledComponents/myButton";
import { Comment } from "./comment"
import PostService from '../API/postService';

export const PostComponent = ({post}) => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const updatePost = (newPost) => {
        dispatch(updatePostAction(newPost))
        setModal(false)
    }

    const [comments, setComments] = useState([])
    useEffect(() => {
        if(post.id <= 100) {
            fetchPosts()
        }
    }, [])

    async function fetchPosts() {
        const commentsResponse = await PostService.getCommentsByPostId(post.id)
        setComments(commentsResponse.data)
    }

    return (
        <Flex direction='column'> 
            <Flex justify='space-between'>
                <MyTitle>post id: {post.id}</MyTitle>
                <MyButton onClick={() => setModal(true)}>Редактировать</MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm postEvent={updatePost} existedPost={post}/>
                </MyModal>
            </Flex>
            <Flex border='darkblue solid 1px'  direction='column'>
                <MySpan>{post.title}</MySpan>
                <MySpan>{post.body}</MySpan>
            </Flex>
            {comments.length 
                ? <Flex border='darkblue solid 1px'  direction='column' margin='15px 0'>
                    {comments.map(comment => <Comment comment={comment}/>)}
                </Flex>
                : null 
            }
        </Flex>
    )
}