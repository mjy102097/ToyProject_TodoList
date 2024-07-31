import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "../styles/LoginNewUser";
import { useNavigate } from 'react-router-dom';
import api from '../apis/instance';

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
    setForm( form => {
      return {
        ...form,
        [e.target.name]: e.target.value
      }
    });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 폼 데이터 값 확인
  const handleCheckUserClick = async () => {
    try {
      const response = await api.get(`/checkuser`, {params: form});
      console.log(response.data);
      if(response.data > 0 ) {
        alert("중복된 Id");
      } else {

        alert("가입 완료");
      }
    } catch(e) {
      console.error(e);
    }

    // if (form.username === "") {
    //   alert("아이디를 입력해주세요.")
    // } else if (form.password === "") {
    //   alert("비밀번호를 입력해주세요.")
    // } else if (form.username === "" && form.password === "") {
    //   alert("정보를 입력해주세요.")
    // } else {

      

      // if(response) {
      //   alert("이미 등록 되어 있습니다.");
      //   console.log(response.data);
      // } else {
      //   const registerUser = await api.post('/newuser', form);
      //   alert("회원가입 성공!")
      //   setNewUser(form);
      //   console.log(form); // 확인용
      //   setForm({
      //     username: '',
      //     password: ''
      //   });
      //   pageMove('/Login'); 
      // } 
    
  }
  return (
    <div css={s.newUser}>
      <div  className='newuser' >
        <h2>회원가입</h2>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={form.username} onChange={handleChange} />
            <button onClick={handleCheckUserClick}>중복확인</button>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} />
          </div>
            <button >가입하기</button>
      </div>
    </div>
  );
}

export default LoginNewUser;