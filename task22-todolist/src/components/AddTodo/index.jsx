import React, { useState } from 'react'
import './style.css'
export default function AddTodo({todos, setTodos}) {
  console.log(todos)
  const [value, setValue] = useState({
    title: '',
    description: ''
  })
  let saveTitle = (info) =>{
    let newValue = {
    title: '',
    description: value.description
  }
  newValue.title = info
  setValue(newValue)
  console.log(newValue)
  }
  let saveDescription = (info) =>{
    let newValue = {
    title: value.title,
    description: ''
  }
  newValue.description = info
  console.log(newValue)
  setValue(newValue)
  }

  let createTodo = () => {
    setTodos([...todos, {
      id: todos.length + 1,
      title: value.title,
      description: value.description,
      completed: false
    }])
    
    setValue({
      title: '',
      description: ''
    })
  }
  return (
    <div className='wrapper'>
            <input type="text" name="title" id="title" placeholder ="Todo Title" className="add-todo-text" value ={value.title} onChange = {(e) => saveTitle(e.target.value)}/>
            <input type="text" name="description" id="description" placeholder ="Description" className="add-todo-text" value ={value.description} onChange = {(e) => saveDescription(e.target.value)}/>
            <input type="button" value="Create Todo" className='add-todo-btn' onClick={createTodo}/>
    </div>
  )
}
