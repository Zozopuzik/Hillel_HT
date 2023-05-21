import React, { useState } from 'react'
import './style.css'
import {deleteTodoFromApi, updateTodoInApi} from '../../service/server'
export default function ListTodo({todos, setTodos}) {

    const [edit, setEdit] = useState(null)
    let deteleTodo = (id) =>{
       let newTodos = [...todos].filter(todo => todo.id != id)
       deleteTodoFromApi(id)
        setTodos(newTodos)
    }
    let editTodo = (id) =>{
        setEdit(id)
    }

    let doChanges = (id, el) =>{
        let newTodos = [...todos].filter(todo => {
            if(todo.id === id){
                console.log(el.name)
                todo[`${el.name}`] = el.value
                updateTodoInApi(id, todo)
            }
            return todo
        })
        setTodos(newTodos)
    }

    let saveEdition = (id) =>{
        setEdit(null)
    }
    let changeStatus = (id) =>{
        let newTodos = [...todos].filter(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
                updateTodoInApi(id, todo)
            }
            return todo
        })
        setTodos(newTodos)
    }
  return (

    <div>
         <div  className = 'todo-row'>
                <input type="checkbox" name="todoCheck"/>
                <div className="title">Name</div>
                <div className="decription">Description</div>
                <div className="status">Status</div>
                <div className="action">Action</div>
            </div>
        {todos.map(todo =>(
            edit === todo.id ?
            <div key = {todo.id} className = 'todo-row'>
            <input type="checkbox" name="todoCheck" id={todo.id} checked ={todo.completed}  onChange = {(event) =>{
                changeStatus(todo.id)}
            } />
            <input className='edit-input' value = {todo.title} name="title" onChange={(el) => doChanges(todo.id, el.target)}></input>
            <input className='edit-input'  value = {todo.description} name = "description" onChange={(el) => doChanges(todo.id, el.target)}></input>
            <div className="status">{todo.completed ? <div className='completed'>Comleted</div> : <div className='pending'>Pending</div>}</div>
            <div className="action">
            <button className='save-edition' onClick={() => saveEdition(todo.id)} >save edition</button>
            <button className='delete-btn' onClick={() => deteleTodo(todo.id)}>delete</button>
            </div>
        </div>
           
            :
         <div key = {todo.id} className = 'todo-row'>
                <input type="checkbox" name="todoCheck" id={todo.id} checked ={todo.completed}  onChange = {(event) =>{
                    changeStatus(todo.id)}
                } />
                <div className="title">{todo.title}</div>
                <div className="decription">{todo.description}</div>
                <div className="status">{todo.completed ? <div className='completed'>Comleted</div> : <div className='pending'>Pending</div>}</div>
                <div className="action">
                <button className='edit-btn' onClick={() => editTodo(todo.id)}>edit</button>
                <button className='delete-btn' onClick={() => deteleTodo(todo.id)}>delete</button>
                </div>
            </div>   
           
        ))}
    </div>
  )
}
