import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { MainCon } from '../styles/TodolistMain';
import axios from 'axios';

function TodolistMain() {
  const [ todoList, setTodoList ] = useState({
    todolistTxt: "",
    todolistDate: ""
  });

  const handleRegisterInputChange = (e) => {
    setTodoList(todoList => {
      return {
          ...todoList,
          [e.target.name]: e.target.value
        }
    })
  }

  const handleRegisterSubmitClick = async () => {
    try {
      const response = await axios.post("http://localhost:8080/todolist", todoList);
      if(response.status === 200) {
        console.log(response.data);
        alert("등록성공!");
      }
    } catch (error) {
      console.error(error);
      alert("등록실패!");
    }

    setTodoList(todoList => {
      return{
        todolistTxt: "",
        todolistDate: ""
      }
    });
  }

  return (
    <div css={MainCon}>
      <div className="todo-mainContainer">
        <h1 className="title">Todo Main List</h1>
        <div className="input-box">
        <input type="text" className="todo-input" 
          name='todolistTxt'
          onChange={handleRegisterInputChange}
          value={todoList.todolistTxt}
        />
        <input type="date" className="todo-input"
          name='todolistDate'
          onChange={handleRegisterInputChange}
          value={todoList.todolistDate}
        />
        <button className="button todo-submit" onClick={handleRegisterSubmitClick}>추가</button>
        <button className="button edit-button">수정</button>
        <button className="button delete-button">삭제</button>
        </div>
        
        <div className="todo-container">
            <ul className="todo-list-container">
                <li className="todo-card">
                    <h3 className="todo-date">날짜</h3>
                    <p className="todo-content">오늘 할 일</p>
                </li>
            </ul>
        </div>
    </div>
    </div>
  );
}

export default TodolistMain;