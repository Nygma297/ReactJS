import { combinereducers } from 'redux'
import add_todo from '../actions/action'

function todo(state, action){
    switch(action.type){
        case add_todo:
            return{
                id:action.id,
                text:action.text
            }
        default:
        	return state

    }
}

function todos(state=[], action){
    switch(action.type){
        case add_todo:
            return[
				...state,
				todo(undefined, action)
			]
        default:
        	return state

    }
}

const todoApp=combineReducers({
	todos
})

export default todoApp