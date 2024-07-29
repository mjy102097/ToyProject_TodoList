package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqTodolistDto;
import com.toyproject.todolist.entity.Todolist;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodolistServicempl implements TodolistService{

    @Autowired
    private TodoListMapper todoListMapper;

    @Override
    public int registerTodoList(ReqTodolistDto dto){
        Todolist todolist = Todolist.builder()
                .todolistTxt(dto.getTodolistTxt())
                .todolistDate(dto.getTodolistDate())
                .build();

        return todoListMapper.save(todolist);
    }


}
