import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import './style.css'; // 추가한 CSS 파일을 import 합니다
import axios from 'axios';
import Swal from 'sweetalert2';
import api from '../../apis/instance';
import TodoComplete from './TodoComplete';
import TodoInComplete from './TodoInComplete';

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
  const [activeComponent, setActiveComponent] = useState();
  const [currentMonth, setCurrentMonth] = useState(format(new Date(), 'yyyy-MM', { locale: ko }));

  useEffect(() => {
    // 초기 렌더링 시 현재 월의 투두 리스트를 가져옵니다
    setDate(new Date(date.getFullYear(), date.getMonth(), 1)); // 첫날로 변경
    requestTodoList(currentMonth);
  }, []);

  useEffect(() => {
    requestTodoList(currentMonth);
  }, [currentMonth]);


  const renderComponent = () => {

    switch (activeComponent) {
      case 1:
        return <TodoComplete todolist={todolist} />;
      case 2:
        return <TodoInComplete todolist={todolist} />;
      default:
        <CalendarModal />

        return (
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>
                <p>{item.date}</p>
                <p>{item.content}</p>
                <button onClick={() => handleStatusClick(item.todoId, item.complete)}>✔</button>
                <button onClick={() => handleEditTodoClick(item.todoId)}>🖍</button>
                <button onClick={() => handleDeleteTodoClick(item.todoId)}>✂</button>
              </li>
            ))}
          </ul>
        );
    }
  }
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    const newMonth = format(activeStartDate, 'yyyy-MM', { locale: ko });
    if (newMonth !== currentMonth) {
      setCurrentMonth(newMonth);
      setDate(new Date(activeStartDate.getFullYear(), activeStartDate.getMonth(), 1)); // 첫날로 변경
    }
  };



  const handleInputChange = (e) => {
    setRegistertodo({
      ...registertodo,
      content: e.target.value,
      date: format(date, 'yyyy년 M월 d일', { locale: ko }),
    });
  };


  const handleRegisterSubmitClick = async () => {
    try {
      const response = await api.post('/todo', registertodo);
      if (response.status === 200) {
        alert("등록성공!");
        await requestTodoList(date);
      }
    } catch (e) {
      console.error(e);
      alert("등록실패!");
    }
    setRegistertodo({ content: "" });
  };

  const requestDeleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/tododelete/${todoId}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  const requestTodoList = async (month) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/todolist`, { registertodo });
      setTodolist(response.data);
      console.log(todolist);

    } catch (e) {
      console.error(e);
    }
  };

  const handleStatusClick = async (todoId, todoComplete) => {
    const dto = {
      todoId: todoId,
      complete: todoComplete === 0 ? 1: 0
    }
    try {
      console.log("complete", todoId);
      requestTodoList();
      const response = await axios.put(`http://localhost:8080/api/v1/todocomplete/${todoId}`, dto);
      requestTodoList(response.data);
      console.log("리스트:", todolist);
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdateClick = async (todoId) => {
    console.log(todoId);
    let responseData = null;
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/gettodo/${todoId}`);
      responseData = response.data;
    } catch (error) {
      console.error(error)
    }
    return responseData;
  }

  const handleDeleteTodoClick = async (id) => {
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
        console.log(id);
        await requestDeleteTodo(id);
        await requestTodoList(date);
        Swal.fire("삭제완료", "Todo가 삭제되었습니다", "success");
      }
    });
  };

  const handleEditTodoClick = async (todoId) => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
    }).then({
      title: "수정하시겠습니까?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then(async (result) => {
      if (result.isConfirmed) {
        const edit = result.value;
        console.log(edit);
        console.log(result);

        const data = await handleUpdateClick(todoId);
        console.log(data);
        data.content = edit;
        const response = await api.put(`todoedit/${todoId}`, data);
        await requestTodoList(date);
        console.log(response.data)
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };



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
  const filteredItems = todolist.filter(todo => {
    const todoDate = new Date(todo.date.replace(/년|월|일/g, '').trim());
    return (
      todoDate.getFullYear() === date.getFullYear() &&
      todoDate.getMonth() === date.getMonth()
    );
  });

  const filteredItems2 = todolist.filter(todo => todo.date === format(date, 'yyyy년 M월 d일', { locale: ko }));

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
          onActiveStartDateChange={handleActiveStartDateChange}
        />
      </div>
      <div className='todo-list'>
        <div className="todo-list-container">
          <h2>{format(date, 'yyyy년 M월', { locale: ko })}의 투두 리스트</h2>
        </div>

        <div className='todo-list-content'>
          <ul>
            <li>
              <button onClick={() => setActiveComponent(0)}>전체</button>
              <button onClick={() => setActiveComponent(1)}>완료</button>
              <button onClick={() => setActiveComponent(2)}>미완료</button>
            </li>
          </ul>
          <div>
            {renderComponent()}
          </div>
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
        <button onClick={handleRegisterSubmitClick}>추가</button>
        <div className="list-container">
          <ul>
            {filteredItems2.map((item, index) => (
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default CalendarModal;
