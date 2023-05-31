import Header from './components/Header/index.jsx';
import AddTodo from './components/AddTodo/index.jsx';
import ListTodo from './components/ListTodo/index.jsx';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])
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

