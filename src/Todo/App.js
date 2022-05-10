import React from 'react'
import TodoItem from './Todo.Components/TodoItem';
import TodoHeader from './Todo.Components/TodoHeader';
import TodoFooter from './Todo.Components/TodoFooter';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      todo:[
        {
          id:1,
          userName: "Gazar",
          finished:false,
        },
        {
          id:2,
          userName:"Kartofil",
          finished:false,
        },
        {
          id:3,
          userName:"Kaxamb",
          finished:false,
        },
      ]
    }
  }

  handleClear = ()=>{
    this.setState({todo:this.state.todo.filter((elem)=> !elem.finished)})
  }

  handleDelete=(el)=>{
    this.setState({todo:this.state.todo.filter((elem) => elem.id !== el.id)})
  }

  handleChange =(el)=>{
    this.setState(this.state.todo.map((elem)=>{
      if(elem.id === el.id){
        return el
      }
      return elem
    }))
  }

  render() {
    return (
      <div className='app'>
        <TodoHeader onAdd={(fruit)=>{
          this.setState({todo:[...this.state.todo,
            {
              id:Math.random(),
              userName:fruit,
              finished:false,
              },
          ]})
        }}/>
        <TodoItem 
        todo = {this.state.todo} 
        onDelete={this.handleDelete}
        onChange={this.handleChange}
        /> 
        <TodoFooter 
        todo={this.state.todo} 
        clearFinished={this.handleClear}/>
      </div>
    )
  }
}
