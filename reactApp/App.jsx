import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addTodo} from './actions/action'
import AddTodo from './components/AddTodo.jsx'
import ToolList from './components/TodoList.jsx'

class App extends Component{
    render(){
        const {dispatch, visibleTodos} = this.props
        return(
			<div>
				<AddTodo
					onAddClick={text=> dispatch(addTodo(text))}
				/>
				<TodoList todos={visibleTodos} />
			</div>
		)
    }
}

function select(){
	return{
		visibleTodos:state.todos
	}
}

export default connect(select)(App)