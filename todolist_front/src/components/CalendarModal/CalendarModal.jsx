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

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const [params, setParams] = useState({
    date: "",
    content: ""
  });
  const [todolist, setTodolist] = useState([]);

  const requestTodoList = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/todolist`, {params});
        setTodolist(response.data);
    } catch(e) {
        console.error(e);
    }
  };



  const handleInputChange = (e) => { // 해당 날짜에 투두 내용 입력
    setRegistertodo(todo => {
      return {
        ...todo,
        content: e.target.value,
        date: format(date, 'yyyy년 M월 d일', { locale: ko }),
      };
    });
  };


  const handleAddTodoClick =  async () => { // 추가 버튼 누르면 todolist 등록 후 list 불러오기
    await handleRegisterSubmitClick();
    await requestTodoList();
    console.log(todolist);
    setRegistertodo({
      content: ""
    });
  };

  const handleRegisterSubmitClick = async () => { // 입력한 date, 내용 백으로 요청
    console.log("ㅇㅇ",  registertodo);
    try {
      const response = await api.post("/todo", registertodo);
      console.log(response.data);
      if(response.status === 200) {
          alert("등록성공!");
      }
      } catch(e) {
          console.error(e);
          alert("등록실패!");
      }
  };

  const filteredItems2 = todolist.filter(todo => todo.date === format(date, 'yyyy년 M월 d일', { locale: ko }));
  //const filteredItems = todolist.filter(todo => todo.date === format(date, 'yyyy년 M월', { locale: ko }));
  
  
  const filteredItems = todolist.filter(todo => {
    if (!todo.date) return false;
    
    const todoDate = parse(todo.date, 'yyyy년 M월 d일', new Date());
    return (
      todoDate.getFullYear() === date.getFullYear() &&
      todoDate.getMonth() === date.getMonth()
    );
  });

  const requestdeleteTodo = async (todoId) => {

    let responseData = null;

    try{
      const response = await axios.put(`http://localhost:8080/api/v1/todo/${todoId}`); //
      responseData = response.data 
      console.log(responseData);
    } catch(e) {
        console.error(e);
        }
        
        return responseData;
  }

  const handleDeleteTodoClick= async (todoId)=> {
    console.log(todolist);
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      text: "삭제하면 복구가 안됩니다!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제"
    }).then(async (result) => {
      await requestdeleteTodo(todoId);
      // await requestTodoList();
        Swal.fire({
          title: "삭제완료",
          text: "Todo가 삭제되었습니다",
          icon: "success"
        });
      }
    )};
  

 

  const handleEditTodoClick = async () => {
    

    Swal.fire({
      title: "수정하시겠습니까?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    
  }

  useEffect(()=> {
    requestTodoList(date)
  },[date])

  const isMarked = (date) => {
    return todolist.some(
      (todo) => todo.date === format(date, 'yyyy년 M월 d일', { locale: ko })
    );
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
          value={date}
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
                  <button>✔</button>
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
