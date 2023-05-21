import React, { useState } from 'react';
import './style.css';

export default function AddTodo({ todos, setTodos }) {
  const [value, setValue] = useState({
    title: '',
    description: ''
  });

  const saveTitle = (info) => {
    setValue((prevValue) => ({
      ...prevValue,
      title: info
    }));
  };

  const saveDescription = (info) => {
    setValue((prevValue) => ({
      ...prevValue,
      description: info
    }));
  };

  const createTodo = async () => {
    if (value.title !== '') {
      const newTodo = {
        title: value.title,
        description: value.description,
        completed: false
      };

      try {
        const response = await fetch('https://61498bf2035b3600175ba32f.mockapi.io/todo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTodo)
        });

        if (response.ok) {
          const newData = await response.json();
          setTodos((prevData) => [...prevData, newData]);
          setValue({
            title: '',
            description: ''
          });
        } else {
          console.log('Error creating item:', response.status);
        }
      } catch (error) {
        console.log('Error creating item:', error);
      }
    } else {
      alert('Please fill in the title');
    }
  };

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
