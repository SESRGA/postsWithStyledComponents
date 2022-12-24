const defaultState = {
    posts: []
}

const CREATE_POST = "CREATE_POST"
const REMOVE_POST = "REMOVE_POST"
const UPDATE_POST = "UPDATE_POST"
const GET_ALL_POSTS = "GET_ALL_POSTS"

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS: 
            return {...state, posts: [...action.payload]}
        case CREATE_POST: 
            return {...state, posts: [...state.posts, action.payload]}
        case UPDATE_POST: 
        return { 
            ...state, 
            posts: state.posts.map(
                post => post.id === action.payload.id 
                    ? action.payload
                    : post
            )
         }
        case REMOVE_POST: 
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        default: 
            return state;
    }
}

export const getAllPostsAction = (payload) => ({type: GET_ALL_POSTS, payload})
export const createPostAction = (payload) => ({type: CREATE_POST, payload})
export const updatePostAction = (payload) => ({type: UPDATE_POST, payload})
export const removePostAction = (payload) => ({type: REMOVE_POST, payload})