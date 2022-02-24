import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef('');

  useEffect(() => {
    inputRef.current.focus();

  }, [])

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
// bug is fixed
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
         type="text"
         placeholder="Add a todo"
         value={input} name="text"
         className='todo-input'
         onChange={handleChange}
         ref={inputRef}
        />
        <button className="todo-button">Add to Do</button>
      </form>
  )
}

export default TodoForm;
