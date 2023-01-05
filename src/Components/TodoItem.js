import React from 'react';
import { toast } from 'react-toastify';

function TodoItem({todo,deleteTodo, id}) {
  return (
    
     <ul className='todo-item'>
        <li >{[todo]}</li>
          <i className='fas fa-times-circle' onClick={() => {
            deleteTodo(id)
            toast.error('Todo deleted!')
          }}></i>
        </ul>
   
  )
}

export default TodoItem;