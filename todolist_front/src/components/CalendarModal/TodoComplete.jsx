import React from 'react';

function TodoComplete({todolist}) {
    const filteredItems = todolist.filter(todo => todo.complete === 1);
    return (
        <div className='todo-list-content'>
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index} className='todo-item complete'>
                <p>{item.date}</p>
                <p>{item.content}</p> 
                <button>✔</button>
                <button>🖍</button>
                <button>✂</button>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default TodoComplete;