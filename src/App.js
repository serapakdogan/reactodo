import TodoList from './Components/TodoList';
import Todoform from './Components/Todoform';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id))
  }
  return (
    <div>
      <ToastContainer />
      <Todoform setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo= {deleteTodo}/>
    </div>
  );
}

export default App;
