import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { postsReducer } from "./postsReducer"

const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

