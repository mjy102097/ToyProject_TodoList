import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { MainCon } from '../styles/TodolistMain';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';
import axios from 'axios';

function TodolistIncomplete() {
  const [ isModaltodo, setIsModalTodo ] = useState (false);
  const [ todoList, setTodoList ] = useState([])
  const [ updateTodo, setUpdateTodo ] = useState({
    todolistId : "",
    userId : "",
    todolistTxt : "",
    todolistDate : "" 
  });
  const [ registerTodo, setRegisterTodo ] = useState({

  });
  const [ selectTodo, setSelectTodo ] = useState({

  });
  const [ params, setParams ] = useState({
    todolistTxt : "",
    todolistDate : ""
})
const requestGetTodo = async (todolistId) => { 
  let responseData = null;
  try {
      const response = await axios.get(`http://localhost:8080/api/v1/todo/${todolistId}`);
      console.log(response);
      responseData = response.data;
  } catch(error) {
      console.error(error);
  }
  return responseData;
}
  const requestTodoList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/todo", {params});
      setTodoList(response.data);
    } catch(e) {
      console.error(e);
    }
  }
  const handleDeleteTodoClick = async (todolistId) => {
    if(window.confirm("삭제하시겠습니까?")) {
        await requestDeleteTodo(todolistId);
        await requestTodoList();
        alert("삭제 완료!");
    }
}
const requestDeleteTodo = async (todolistId) => {
    let responseData = null;
    try {
        const response = await axios.delete(`http://localhost:8080/api/v1/todo/${todolistId}`);
        responseData = response.data;
    } catch(error) {
        console.error(error);
    }
    return responseData;
}
const closeModalTodo = () => {
  setIsModalTodo(false);
  setUpdateTodo({
        computerId : "",
        company : "",
        cpu : "",
        ram : "",
        ssd : "",
    });
}
const handleUpdateTodoClick = async (todolistId) => {
  setIsModalTodo(true);
    const responesData = await requestGetTodo(todolistId);
    setUpdateTodo(responesData);
}
const handleUpdateSubmitClick = async () => {
    await requestUpdateTodo();
    await requestTodoList();
    closeModalTodo();
}
const requestUpdateTodo = async () => {
    let responseData = null;
    try {
        const response = await axios.put(`http://localhost:8080/api/v1/todo/${updateTodo.todolistId}`, updateTodo);
        responseData = response.data;
    } catch(error) {
        console.error(error);
    }
}
const handleUpdateInputChange = (e) => {
  setUpdateTodo(uctodo => {
    return {
        ...uctodo,
        [e.target.name] : e.target.value
    }
  })
}
  return (
    <div>
    <ReactModal 
      style={{
        content : {
          boxSizing : 'border-box',
          transform : 'translate(-50%, -50%)',
          left : '50%',
          top : '50%',
          padding : '20px',
          width : '400px',
          height : '400px',
          backgroundColor : '#fafafa',
        }
      }}
      isOpen={isModaltodo}
      onRequestClose={closeModalTodo}
    >
      <div css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      `}>
          <h2>할 일 수정</h2>
            <input type='text' name='todolistTxt' onChange={handleUpdateInputChange} value={updateTodo.todolistTxt} disabled={true}/>
          <div>
            <button onClick={handleUpdateSubmitClick}>확인</button>
            <button onClick={() => closeModalTodo()}>취소</button>
          </div>
      </div>
    </ReactModal>
    <div css={MainCon}>
      <div class="todo-mainContainer">
        <h1 class="title">Todo Incomplate List</h1>
        <div class="input-box">
            <input type="text" class="todo-input" />
            <button class="button todo-submit">조회</button>
        </div>
        <div class="todo-container">
            <ul class="todo-list-container">
                <li class="todo-card">
                    <h3 class="todo-date">날짜</h3>
                    <p class="todo-content">오늘 할 일</p>
                    <div class="todo-buttons">
                        <button class="button edit-button" onClick={handleUpdateTodoClick}>수정</button>
                        <button class="button delete-button" onClick={handleDeleteTodoClick}>삭제</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
    </div> 
  );
}
export default TodolistIncomplete;
