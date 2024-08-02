import './App.css';
import { Global } from '@emotion/react';
import {reset} from './styles/Global'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigaitor from './components/Navigaitor';
import TodolistMain from './components/TodolistMain';
import TodolistComplete from './components/TodolistComplete';
import TodolistIncomplete from './components/TodolistIncomplete';
import HighMenu from './components/HighMenu';
import Login from './components/Login';
import LoginNewUser from './components/LoginNewUser';
import { useState } from 'react';
import CalendarModal from './components/CalendarModal/CalendarModal';


function App() {
  return (
    <>
    <div>
          <CalendarModal/>
          </div>
      {/* <Global styles={reset} />
        <Navigaitor/>
        <HighMenu/>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='Login' element={<Login/>} />
          <Route path='Loginnewuser' element={<LoginNewUser/>}/>
          <Route path='todolist' element={<TodolistMain/>} setLoginStatus={setLoginStatus} />
        </Routes>

    </>
  );
}
export default App;
