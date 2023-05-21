import Header from './components/Header/index.jsx';
import AddTodo from './components/AddTodo/index.jsx';
import ListTodo from './components/ListTodo/index.jsx';
import {setLocalStorage, addToLocalStorage, getFromLocalStorage} from './localStorage/localStorageFuns.js'
import { useEffect, useState} from 'react';

function App() {
  setLocalStorage('todos', 'https://61498bf2035b3600175ba32f.mockapi.io/todo')
  let data = getFromLocalStorage('todos')
  const [todos, setTodos] = useState(data)
  console.log(todos)

  return (
    <div className="App">
      <Header />
      <AddTodo todos = {todos} setTodos={setTodos}/>
      <ListTodo todos={todos} setTodos ={setTodos}/>
    </div>
  );
}

export default App;