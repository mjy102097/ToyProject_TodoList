import React from 'react';
import { NavLink } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const navlinkStyle = css`
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 20px;
  color: black;
  transition: ease-in-out .2s;
  font-size: 18px;
  box-sizing: border-box;
  font-weight: 700;
  &.active {
    color: green;
  }

  &:hover {
    color: green;
    font-size: 20px;
  }
`

function Navigaitor() {
  const links = ['HOME','TodoMain','TodoComplete', 'TodoIncomplete'];


  return (
      <div style={{
        width:'100%',
        height:'120px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
       {
        links.map(link => (
          <NavLink
            key={link}
            to={link}
            css={navlinkStyle}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {link === '/' ? 'HOME' : link}
          </NavLink>
        ))
      }     

      </div>
  );
}

export default Navigaitor;