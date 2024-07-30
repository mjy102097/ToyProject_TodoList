package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.RespTodoDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodolistServicempl implements TodolistService{

    @Autowired
    private TodoListMapper todoListMapper;

    @Override
    public int registerTodoList(ReqTodoDto dto){
        Todo todo = Todo.builder()
                .todoTxt(dto.getTodoTxt())
                .todoDate(dto.getTodoDate())
                .build();

        return todoListMapper.save(todo);
    }

    public List<RespTodoDto> getTodoListAll(ReqTodoDto reqDto) {

    }

}
