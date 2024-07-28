import { css } from "@emotion/react";

export const MainCon =css`
  .todo-mainContainer{
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 900px;
    height: 1000px;
    background-color: white;
  }

  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    cursor: default;
  }

  .input-box {
            display: flex;
            justify-content: space-between;
        }

        .todo-input {
            flex-grow: 1;
            outline: none;
            border: 1px solid #dbdbdb;
            padding: 5px 10px;
            height: 30px;
            font-size: 16px;
            cursor: pointer;
        }

        .button {
            margin-left: 5px;
            border: 1px solid #dbdbdb;
            padding: 5px 10px;
            background-color: white;
            font-size: 12px;
            font-weight: 600;
            color: #555555;
            cursor: pointer;
            &:hover {
                background-color: #fafafa;
            }
            &:active{
                background-color: #eeeeee;
            }
        }

        .todo-container {
            box-sizing: border-box;
            margin-top: 10px;
            border: 1px solid #dbdbdb;
            padding: 10px;
            width: 100%;
            height: 800px;
        }

        .todo-list-container {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            list-style-type: none;
            overflow-y: auto; 
            &::-webkit-scrollbar {
                display: none;
            }
        }
        .todo-card {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid #dbdbdb;
            padding: 10px;
            width: 100%;
            height: 100px;
            cursor: pointer;
            &:hover{
                box-shadow: 0px 0px 4px #00000022 inset; /*inset 안쪽*/
            }
        }

        .todo-date {
            margin: 0;
            font-size: 13px;
        }   
        .todo-content{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            flex-grow: 1;
            font-size: 14px;
        }

        .todo-buttons {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            & > button {
                margin-left: 5px;

            }
        }
  
`;