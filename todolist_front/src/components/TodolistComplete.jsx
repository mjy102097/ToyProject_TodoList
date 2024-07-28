import React from 'react';
import { MainCon } from '../styles/TodolistMain';
/** @jsxImportSource @emotion/react */

function TodolistComplete() {
  return (
    <div css={MainCon}>
      <div class="todo-mainContainer">
        <h1 class="title">Todo Complete List</h1>
        <div class="input-box">
            <input type="text" class="todo-input" />
            <button class="button todo-submit">확인</button>
        </div>
        <div class="todo-container">
            <ul class="todo-list-container">
                <li class="todo-card">
                    <h3 class="todo-date">날짜</h3>
                    <p class="todo-content">오늘 할 일</p>
                    <div class="todo-buttons">
                        <button class="button edit-button">수정</button>
                        <button class="button delete-button">삭제</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
  );
}

export default TodolistComplete;