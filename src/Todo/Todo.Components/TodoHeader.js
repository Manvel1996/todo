import React, { Component } from 'react'
import '../MainTodo.scss'


export default class TodoHeader extends Component {
    constructor(props){
        super(props)
        this.state={
            fruit:""
        }
    }
  render() {
    return (
      <div className='todoHeader'>
          <form onSubmit={(e)=>{
              e.preventDefault();
              this.props.onAdd(this.state.fruit)
              this.setState({fruit:""})
              }}>

              <div className='formDiv'>
                  <input type="text" value={this.state.fruit} onChange={(e)=>{
                    this.setState({fruit: e.target.value})
                  }}/>
                <button>Add</button>
              </div>  
          </form>
      </div>
    )
  }
}
