import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { MainCon } from '../styles/TodolistMain';
import api from '../apis/instance';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';


function TodolistMain() {

  const logout = useNavigate();


  const [ todo, setTodo ] = useState({
    todoTxt: "",
    todoDate: ""
  });

  const [ checked , setChecked ] =useState(false);

  const [todolist, setTodolist] = useState([]);


  useEffect(() => {
    fetchList();
  },[])

  const handleToggleCheck = async (todolistId, currentStatus) => {
    try {
      // 토글 상태
      const newStatus = currentStatus === 1 ? 0 : 1;
      const response = await api.put(`/todolist/${todolistId}`, { status: newStatus });
      if (response.status === 200) {
        // 상태 업데이트
        console.log(response);
        setTodo((prevTodolist) =>
          prevTodolist.map((item) =>
            item.todolistId === todolistId ? { ...item, status: newStatus } : item
          )
        );
      }
    } catch (error) {
      console.error(error);
      alert('상태 업데이트 실패!');
    }
  };


  const fetchList = async () => {
    try{
      // 유저 아이디를 받을때 재작성
      const response = await api.get('/todolist');
      console.log(response.data);
      setTodo(response.data);
    }catch(error){
      console.log(error)
    }
  }

  const handleRegisterInputChange = (e) => {

    const {name , value} = e.target
    console.log(value);
    setTodo(todo => ({
          ...todo,
          [name]: value
    }))

    setTodo(todoList => {
      return {
          ...todoList,
          [e.target.name]: e.target.value
        }
    })
  }


  const handleRegisterSubmitClick = async () => {
    try {
      const response = await api.post("/todolist", todo);
      if(response.status === 200) {
        setTodolist(prevTodolist => [...prevTodolist,response.data])
        console.log(response.data);
        setTodo({
          todoTxt: "",
          todoDate: ""
      });
        alert("등록성공!");
        
      }
    } catch (error) {
      console.error(error);
      alert("등록실패!");
    }


    setTodo(todoList => {
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
          value={todo.todoTxt}
        />
        <input type="date" className="todo-input"
          name='todoDate'
          onChange={handleRegisterInputChange}
          value={todo.todoDate}
        />
        <button className="button todo-submit" onClick={handleRegisterSubmitClick}>추가</button>
        <button className="button edit-button">수정</button>
        <button className="button delete-button">삭제</button>
        </div>
        
        <div className="todo-container">
            <ul className="todo-list-container">
              <div>
                <li className="todo-card">
                    <h3 className="todo-date">
                    <input className="todo-check" type="checkbox" />
                      날짜</h3>
                    <p className="todo-content">오늘 할 일</p>
                </li>
              </div>
                {
                  todolist.map(todoItem => 

                      <div onClick={handleToggleCheck}
                      css={css`
                        background-color: ${checked ? '#dbdbdb':'#55555'};
                      `}
                      >
                        <li className="todo-card" key={todoItem.todolistId}>
                              <h3 className="todo-date">
                              <input className="todo-check" type="checkbox" checked={todo.status === 1} onChange={handleToggleCheck}/>
                                {todoItem.todoDate}
                              </h3>
                              <p className="todo-content">{todoItem.todoTxt}</p>
                        </li>
                      </div>
                  )  
                  }
                </ul>
            
        </div>
    </div>
    </div>
  );
}

export default TodolistMain;