package com.toyproject.todolist.service;

import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodolistServicempl implements TodolistService{

    @Autowired
    private TodoListMapper todoListMapper;

    public int createTodoList(TodolistDto todolistdto){
        Todolist todolist = Todolist.builder()
                .
                .build()
    }


}
