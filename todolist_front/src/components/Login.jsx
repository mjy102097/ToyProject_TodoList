import axios from 'axios';
import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { MainCon } from '../styles/TodolistMain';

function Login(props) {
    const [ userList, setUserList ] = useState({
        userId : "",
        username : "",
        password : ""
    });
    const [ inputData, setInputData ] = useState({...userList});

    const inputRef = {
        username : useRef(),
        password : useRef()
    }
    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const {username, password } = inputRef;
            switch(e.target.name) {
                case "username" :
                    password.current.focus();
                    break;
                case "password" :
                    username.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({ ...userList });
                    break;
                default:
            }
        }
    }
    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name] : e.target.value
            }
        });
    }
    const handleUserLoginClick = async () => {
        try{
            const response = await axios.post(`http://localhost:8080/api/v1/userlogin/${userList}`)
            setUserList(response.data);
        }catch(e) {
            console.error(e);
        }
    }
    return (
        <div css={MainCon}>
            <div className="todo-mainContainer">
            <input name="username" placeholder="아이디" 
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={inputData.username}
            ref={inputRef.username}/>

            <input name="password" placeholder="비밀번호" 
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={inputData.password}
            ref={inputRef.password}/>
            <tr>
                <button onClick={handleUserLoginClick}>로그인</button>
                <button onClick={handleUserLoginClick}>회원가입</button>
            </tr>
    </div>
    </div>
    );
}
export default Login;