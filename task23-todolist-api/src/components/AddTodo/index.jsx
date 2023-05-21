import React, { useState } from 'react';
import { setLocalStorage, addToLocalStorage, getFromLocalStorage } from '../../localStorage/localStorageFuns.js';
import { getDataFromAPI, addToApi } from '../../service/server';
import './style.css';

export default function AddTodo({ todos, setTodos }) {
  const [value, setValue] = useState({
    title: '',
    description: ''
  });

  let saveTitle = (info) => {
    let newValue = {
      title: info,
      description: value.description
    };
    setValue(newValue);
    console.log(newValue);
  };

  let saveDescription = (info) => {
    let newValue = {
      title: value.title,
      description: info
    };
    console.log(newValue);
    setValue(newValue);
  };

  let createTodo = () => {
    let newTodo = {
      title: value.title,
      description: value.description,
      completed: false
    }
    addToApi(newTodo)
    setLocalStorage('todos', 'https://61498bf2035b3600175ba32f.mockapi.io/todo')
    let data = getFromLocalStorage('todos')
    setTodos(data)
    setValue({
      title: '',
      description: ''
    })
  }

  return (
    <div className='wrapper'>
      <input
        type='text'
        name='title'
        id='title'
        placeholder='Todo Title'
        className='add-todo-text'
        value={value.title}
        onChange={(e) => saveTitle(e.target.value)}
      />
      <input
        type='text'
        name='description'
        id='description'
        placeholder='Description'
        className='add-todo-text'
        value={value.description}
        onChange={(e) => saveDescription(e.target.value)}
      />
      <input type='button' value='Create Todo' className='add-todo-btn' onClick={createTodo} />
    </div>
  );
}
