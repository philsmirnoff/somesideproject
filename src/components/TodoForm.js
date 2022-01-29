import React, {useState} from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  return (
      <form className="todo-form">
        <input
         type="text"
         placeholder="Add a todo"
         value={input} name="text"
         className='todo-input'
        />
        <button className="todo-button">Add to Do</button>
      </form>
  )
}

export default TodoForm;
