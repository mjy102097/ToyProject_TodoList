import './App.css';
import { Global } from '@emotion/react';
import {reset} from './styles/Global'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoginNewUser from './components/LoginNewUser';
import CalendarModal from './components/CalendarModal/CalendarModal';


function App() {
  return (
    <>
      <div>
        <Global styles={reset} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Loginnewuser' element={<LoginNewUser/>}/>
          <Route path='/CalendarModal'element={<CalendarModal/>}/>
        </Routes>
      </div>
    </>
  );
}
export default App;
