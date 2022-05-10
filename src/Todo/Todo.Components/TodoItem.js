import React, { Component } from 'react'
import TodoList from './TodoList'


export default class TodoItem extends Component {



  render() {
    return (
        <div className='todoItem'>
            {this.props.todo.map((elem)=>{
                return(
                    <TodoList
                     elem={elem}
                     key={elem.id}
                     onChange={this.props.onChange}
                     onDelete={this.props.onDelete}
                    />
                )
             })}
        </div>
    )
  }
}
