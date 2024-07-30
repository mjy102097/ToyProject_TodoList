import React, { useState } from 'react';

function LoginNewUser(props) {
    const [ newUser, setNewUser ] = useState({
        userId: '',
        username: '',
        password: '',
      });
    
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
    return (
        <div className='newuser'>
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
        </form>
      </div>
    );
}
export default LoginNewUser;