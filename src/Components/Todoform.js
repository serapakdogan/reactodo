import { useEffect, useState } from 'react';
import {toast} from 'react-toastify'

function Todoform( {todos, setTodos}) {
    const[todoValue, setTodoValue] = useState('');
    const handleSubmit = (event) => {
        if(todoValue === ' ') {
            toast.error('Please enter a todo!')
        } else if ( todos.includes(todoValue)) {
            toast.error('Todo already exist!')
        }else if(todoValue.length < 3) {
            toast.error('Todo must be at least 3 characters long!')
        }else{
            const newTodo = todoValue.trim()
            setTodos([...todos,newTodo])
            toast.success('ToDo added!')
        }
    }

    

  return (
     <div className='cnt' > 
     <h2 className='title'>todos</h2>
    <form action='' id='todo-form'>
   
        <input 
            placeholder='Please Enter You ToDo... '
            id='form-input'
            onChange={(event) => setTodoValue(event.target.value)}
            value={todoValue}
            />
        <button onClick={(event) => {
            event.preventDefault()
            handleSubmit();
            setTodoValue('')
      
        }}> 
            <i className="fas fa-plus"></i>
        </button>
    </form>
 </div>
  )
}

export default Todoform