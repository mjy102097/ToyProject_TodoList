import React from 'react';

function TodoInComplete({todolist}) {
    const filteredItems = todolist.filter(todo => todo.complete === 0);
    return (
        <div className='todo-list-content'>
          <ul>
            {  
            filteredItems.map((item, index) => (
              <li key={index} className='todo-item incomplete'>
                <p>{item.date}</p>
                <p>{item.content}</p> 
                <button >✔</button>
                <button >🖍</button>
                <button >✂</button>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default TodoInComplete;