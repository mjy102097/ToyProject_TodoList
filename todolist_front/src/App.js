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

function App() {
  return (
    <>
      <Global styles={reset} />
        <Navigaitor/>
        <HighMenu/>
        <Routes>
          <Route path="/" element={<Navigate to="/HOME" />} />
          <Route path='home' element={<Login/>} />
          <Route path='Loginnewuser' element={<LoginNewUser/>}/>
          <Route path='TodoMain' element={<TodolistMain/>} />
          <Route path='TodoComplete' element={<TodolistComplete/>} />
          <Route path='TodoIncomplete' element={<TodolistIncomplete/>} />
        </Routes>
    </>
  );
}

export default App;
