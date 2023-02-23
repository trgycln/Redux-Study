import {combineReducers, createStore} from "redux"
import todosReducer from "./Reducers/todosReducer"
import secondReducer from "./Reducers/secondReducer"

const rootReducer = combineReducers({
	todosState:todosReducer,
	secondState:secondReducer
})

const store = createStore(rootReducer)

export default store