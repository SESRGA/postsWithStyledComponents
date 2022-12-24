import axios from "axios";
import { getAllPostsAction } from "../store/postsReducer"

export default class PostService {
    static getAllPosts(limit = 10, page = 1) {
        return function(dispatch) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => dispatch(getAllPostsAction(json)))
        }
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }

    static async getUsersList() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response
    }
}
