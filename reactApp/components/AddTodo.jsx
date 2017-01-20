import React, {Component, PropTypes} from 'react'


export default class AddTodo extends Component{
   	update(e){
        const node = this.refs.input
   	 	const text = node.value.trim()
   		this.props.onAddClick(text)
   		node.value="Add Todo Item"
	}

    render(){
        return(
            <div>
                <input type="text" ref="input" />
                <button onClick={(e)=> this.update(e)}>Add Item</button>
            </div>
        )
    }
}