package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqTodolistDto;

public interface TodolistService {
    int registerTodoList(ReqTodolistDto dto);
}
