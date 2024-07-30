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
    
      const [ form , setForm] = useState({
        username: '',
        password: '',
        email: '',
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
        }else if(form.email === ""){
          alert("이메일을 입력해주세요")
        }else if(!form.email.includes("@")){
          alert("유효한 이메일 주소를 입력해주세요.")
        }else{
          alert("회원가입 성공!")
          setNewUser(form);
          console.log(form); // 확인용
          setForm({
            username: '',
            password: '',
            email: '',
          });
          pageMove('/Login');
        }
        
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
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
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