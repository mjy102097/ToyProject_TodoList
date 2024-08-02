import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { MainCon } from '../styles/TodolistMain';
import axios from 'axios';
import api from '../apis/instance';
import { useNavigate } from 'react-router-dom';

function TodolistMain() {
  const logout = useNavigate();

  const [ todoList, setTodoList ] = useState({
    todoTxt: "",
    todoDate: ""
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
      const response = await api.post("/todolist", todoList);
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
        todoTxt: "",
        todoDate: ""
      }
    });

    // const handlelogoutClick = () => {
    //   alert("할 일 다하셨나요?");
    //   logout("/home");
    // };
  }

  return (
    <div css={MainCon}>
      <div className="todo-mainContainer">
        <h1 className="title">Todo Main List</h1>
        <div className="input-box">
        <input type="text" className="todo-input" 
          name='todoTxt'
          onChange={handleRegisterInputChange}
          value={todoList.todoTxt}
        />
        <input type="date" className="todo-input"
          name='todoDate'
          onChange={handleRegisterInputChange}
          value={todoList.todoDate}
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
            <div>
              {/* <button onClick={handlelogoutClick}><p>로그아웃</p></button> */}
            </div>
        </div>
    </div>
    </div>
  );
}

export default TodolistMain;