import React from 'react';

function TodoInComplete({todolist}) {

    console.log(todolist);
    const filteredItems = todolist.filter(todo => todo.complete === 0);
    return (
        <div className='todo-list-content'>
          <ul>
            {  
            filteredItems.map((item, index) => (
              <li key={index}>
                <p>{item.date}</p>
                <p>{item.content}</p> 
                <button >✔</button>
                <button >🖍</button>
                <button >✂</button>
              </li>
            ))}
            미완료
          </ul>
        </div>
    );
}

export default TodoInComplete;