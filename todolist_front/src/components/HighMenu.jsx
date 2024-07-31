import React from 'react';
/** @jsxImportSource @emotion/react */
import {containerStyle} from '../styles/highMenu';
import { useNavigate } from 'react-router-dom';

function HighMenu() {

  const logout = useNavigate();

  const handlelogoutClick = () => {
    alert("할 일 다하셨나요?");
    logout("/home");
};

  return (
<div css={containerStyle}>
  <div className='main'>  
    <div className="menu-container">
      <ul className="menu-conul">
        <button onClick={handlelogoutClick}><p>로그아웃</p></button>
      </ul>
    </div>
  </div>
</div>
  );
}

export default HighMenu;
