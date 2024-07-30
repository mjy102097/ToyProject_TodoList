import { css } from "@emotion/react";

export const containerStyle = css`
  .main {
    text-align: center;
  }
  &:hover {
    content: "";
    display: block;
    width: 80%;
    border-bottom: 3px solid black;
    margin: auto;
  }
  
  .menu-container {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid black;
  }

  .menu-conul {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .menu-conul li{
      display: flex;
      text-align: center;
      box-sizing: border-box;
      font-size: 18px;
      padding: 15px;
      margin: 10px;
      font-weight: 700;
      transition: ease-in-out 0.3s;
      cursor: pointer;
    &:hover {
      font-size: 20px;
      padding: 10px;
      margin: 10px;
    }
  }
`;
