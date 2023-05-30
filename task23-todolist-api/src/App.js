import Header from './components/Header/index.jsx';
import AddTodo from './components/AddTodo/index.jsx';
import ListTodo from './components/ListTodo/index.jsx';
import SortTodo from './components/sortTodo/index.jsx';
import { useEffect, useState} from 'react';


function App() {
  const [todos, setTodos] = useState([])

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://61498bf2035b3600175ba32f.mockapi.io/todo');
        const jsonData = await response.json();
        setTodos(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  return (
    
    <div className="App">
      <Header />
      <AddTodo todos = {todos} setTodos={setTodos}/>
      <SortTodo setTodos={setTodos}/>
      <ListTodo todos={todos} setTodos ={setTodos}/>
    </div>
  );
}

export default App;