import React, { Component } from 'react'


export default class TodoFooter extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div className='todoFooter'>
          <span>{ this.props.todo.filter((elem)=> elem.finished).length}
          /{this.props.todo.length} finished</span>
          <button onClick={this.props.clearFinished}>ClearFinished</button>
      </div>
    )
  }
}
