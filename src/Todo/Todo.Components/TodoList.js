import React, { Component } from 'react'

export default class TodoList extends Component {
    
  render() {
    return (
      <div className='todoList'>
          <label>
              <input type="checkbox" checked={this.props.elem.finished} 
              onChange={(e)=>{
                this.props.onChange({
                  ...this.props.elem,
                  finished:e.target.checked
                })
              }}
              />
              {this.props.elem.userName}
          </label>
              <button onClick={()=>{this.props.onDelete(this.props.elem)}}>x</button> 
      </div>
    )
  }
}
