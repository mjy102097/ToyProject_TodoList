import React from 'react';
/** @jsxImportSource @emotion/react */
import {containerStyle} from '../styles/highMenu';

function HighMenu() {
  return (
    <div css={containerStyle}>
      <div className="menu-container">
        <ul className="menu-conul">
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </div>
    </div>
  );
}

export default HighMenu;
