import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import { format, parse } from 'date-fns';
import { ko } from 'date-fns/locale';
import './style.css'; // 추가한 CSS 파일을 import 합니다
import axios from 'axios';
import Swal from 'sweetalert2';
import api from '../../apis/instance';

Modal.setAppElement('#root');

const CalendarModal = () => {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registertodo, setRegistertodo] = useState({
    date: "",
    content: ""
  });
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    requestTodoList(date);
  }, [date]);

  const requestTodoList = async (selectedDate) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/todolist`, { registertodo});
      setTodolist(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleInputChange = (e) => {
    setRegistertodo({
      ...registertodo,
      content: e.target.value,
      date: format(date, 'yyyy년 M월 d일', { locale: ko }),
    });
  };

  const handleAddTodoClick = async () => {
    await handleRegisterSubmitClick();
    await requestTodoList(date);
    setRegistertodo({ content: "" });
  };

  const handleRegisterSubmitClick = async () => {
    try {
      const response = await api.post('/todo', registertodo);
      if (response.status === 200) {
        alert("등록성공!");
      }
    } catch (e) {
      console.error(e);
      alert("등록실패!");
    }
  };

  const filteredItems = todolist.filter(todo => {
    if (!todo.date) return false;
    const todoDate = parse(todo.date, 'yyyy년 M월 d일', new Date());
    return (
      todoDate.getFullYear() === date.getFullYear() &&
      todoDate.getMonth() === date.getMonth()
    );
  });

  const requestDeleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/todo/${todoId}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteTodoClick = async (todoId) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      text: "삭제하면 복구가 안됩니다!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await requestDeleteTodo(todoId);
        await requestTodoList(date);
        Swal.fire("삭제완료", "Todo가 삭제되었습니다", "success");
      }
    });
  };

  const handleEditTodoClick = async () => {
    Swal.fire({
        input: "text",
      inputAttributes: {
      autocapitalize: "off"
    }
    }).then({
      title: "수정하시겠습니까?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("성공", "", "success");
      } else if (result.isDenied) {
        Swal.fire("실패", "", "info");
      }
    });
  };

  const handleStatusClick=async(todoId)=> {
    try {
      requestTodoList();
      const response = await axios.put(`http://localhost:8080/api/v1/todo/${todoId}`);
      requestTodoList();
      } catch (error) {
        console.error(error)
      }
        
  }

  const isMarked = (date) => {
    return todolist.some(todo => todo.date === format(date, 'yyyy년 M월 d일', { locale: ko }));
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month' && isMarked(date)) {
      return (
        <div className="dot">
          <span>●</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="App">
      <div className="calendar-container">
        <Calendar
          locale='ko'
          onChange={handleDateChange}
          prev2Label={null}
          next2Label={null}
          
          showNeighboringMonth={false}
          tileContent={tileContent}
          onClickDay={() => setIsModalOpen(true)}
          value={date.value}
        />
      </div>
      <div className='todo-list'>
        <div className="todo-list-container">
          <h2>{format(date, 'yyyy년 M월', { locale: ko })}의 투두 리스트</h2>
        </div>
        <div className='todo-list-content'>
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>
                <p>{item.date}</p>
                <p>{item.content}</p> 
                <button onClick={() => handleStatusClick(item.todoId)}>✔</button>
                <button onClick={handleEditTodoClick}>🖍</button>
                <button onClick={() => handleDeleteTodoClick(item.todoId)}>✂</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal
        style={{
          content: {
            boxSizing: 'border-box',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            padding: '20px',
            width: '400px',
            height: '400px',
            backgroundColor: '#fafafa',
          }
        }}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Event Modal"
      >
        <h2>
          {format(date, 'yyyy년 M월 d일', { locale: ko })}
        </h2>
        <input
          type="text"
          value={registertodo.content}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button onClick={handleAddTodoClick}>추가</button>
        <div className="list-container">
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default CalendarModal;
