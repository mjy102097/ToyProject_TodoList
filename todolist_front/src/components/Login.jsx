import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { MainCon } from '../styles/TodolistMain';
import api from '../apis/instance';
import { useNavigate } from 'react-router-dom';

function Login(props) {
        
    const [ user, setUser ] = useState({
        username : "",
        password : ""
    });
    const [ inputData, setInputData ] = useState({...user});

    const navigate = useNavigate();
    const todogate = useNavigate();
    
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
                    setUser(user => [ ...user, inputData ]);
                    setInputData({ ...user });
                    break;
                default:
            }
        }
    }
    const handleInputChange = (e) => {
        setUser(inputData => {
            return {
                ...inputData,
                [e.target.name] : e.target.value
            }
        });
    }
    const handleUserLoginClick = async () => {
        try{
            const response = await api.post('/userlogin', user);
            setUser(response.data);
            console.log(response.data);
            alert(user.username + "님 환영합니다!");
            todogate("/TodoMain");
        }catch(e) {
            console.error(e);
            alert("아이디 비밀번호를 확인하세요");
        }
        setUser({
            username : "",
            password : ""
        })
    }
    const handleNewUsersClick = () => {
        navigate("/LoginNewUser");
    };

    return (
        <div css={MainCon}>
            <div className="todo-mainContainer">
            <input name="username" placeholder="아이디" 
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={user.username}
            ref={inputRef.username}/>



            <input name="password" placeholder="비밀번호" 
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={user.password}
            ref={inputRef.password}/>
            <div>
                <button onClick={handleUserLoginClick}>로그인</button>
                <button onClick={handleNewUsersClick}>회원가입</button>
            </div>
    </div>
    </div>
    );
}
export default Login;