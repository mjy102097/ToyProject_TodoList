import React from 'react';
import { MainCon } from '../styles/TodolistMain';
/** @jsxImportSource @emotion/react */

function TodolistComplete() {
  return (
    <div css={MainCon}>
      <div className="todo-mainContainer">
        <h1 className="title">Todo Complete List</h1>
        <div className="input-box">
            <input type="text" className="todo-input" />
            <button className="button todo-submit">확인</button>
        </div>
        <div className="todo-container">
            <ul className="todo-list-container">
                <li className="todo-card">
                    <h3 className="todo-date">날짜</h3>
                    <p className="todo-content">오늘 할 일</p>
                    <div className="todo-buttons">
                        <button className="button edit-button">수정</button>
                        <button className="button delete-button">삭제</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
  );
}

export default TodolistComplete;