
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "../styles/LoginNewUser";
import { useNavigate } from 'react-router-dom';
import api from '../apis/instance';

function LoginNewUser(props) {
    
  const [ user , setUser] = useState({
    username: '',
    password: ''
  });

  // 중복 확인 완료
  const [ availableId , setAvailableId ] = useState(0);

  // 페이지 이동 훅
  const pageMove = useNavigate(); 


  const handleIdChange = (e) => {
    setUser( user => {
      return {
        ...user,
        [e.target.name]: e.target.value
      }
    });
    setAvailableId(0);
  };

  const handlePasswordChange = (e) => {
    setUser( user => {
      return {
        ...user,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleuserClick = async () => {
    try {
      const response = await api.get(`/checkuser`, {params: user});
      console.log(response.data);
      if(!response.data) {
        setAvailableId(1);
        alert("사용 가능한 ID");
      } else {
        setAvailableId(0);
        alert("중복된 ID");
      }
    } catch(e) {
      console.error(e);
    }
  }

import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "../styles/LoginNewUser";
import { useNavigate } from 'react-router-dom';

function LoginNewUser(props) {

    const [ newUser, setNewUser ] = useState({
        userId: '',
        username: '',
        password: ''
      });
    
      // 폼 
      const [ form , setForm] = useState({
        username: '',
        password: ''
      });

      const pageMove = useNavigate(); // 페이지 이동 훅

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newUser);
      };

      // 폼 데이터 값 확인
      const handleNewUserClick = (e) => {
        if(form.username === ""){
          alert("이름 입력해주세요")
        }else if(form.password === ""){
          alert("비밀번호를 입력해주세요")
        }else{
          alert("회원가입 성공!")
          setNewUser(form);
          console.log(form); // 확인용
          setForm({
            username: '',
            password: ''
          });


  const handleJoinClick = async () => {
    if(availableId == 1) {
      console.log(availableId);
      if (user.username === "") {
        alert("아이디를 입력해주세요.")
      } else if(user.password === "") {
        alert("비밀번호를 입력해주세요.")
      } else {
        const registerUser = await api.post('/newuser', user);
        console.log(registerUser);
        alert("회원가입 성공!");

        pageMove('/Login');
      }
    } else {
      console.log(availableId);
      alert("ID 중복체크를 다시 해주세요.")
    }
  }




  return (
    <div css={s.newUser}>
      <div  className='newuser' >
        <h2>회원가입</h2>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={user.username} onChange={handleIdChange} />
            <button onClick={handleuserClick}>중복확인</button>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={user.password} onChange={handlePasswordChange} />
          </div>
            <button onClick={handleJoinClick}>가입하기</button>
      </div>
    </div>
  );

        pageMove('/home');

      }

    return (
      <div css={s.newUser}>
        <div  className='newuser' >
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={form.username} onChange={handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} />
          </div>
            <button onClick={handleNewUserClick}>가입하기</button>
          <div>
          </div>
        </form>
      </div>
    </div>
    );

}

export default LoginNewUser;