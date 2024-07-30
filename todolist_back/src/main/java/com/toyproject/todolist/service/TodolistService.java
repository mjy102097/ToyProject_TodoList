package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.RespTodoDto;

public interface TodolistService {
    int registerTodoList(ReqTodoDto dto);


}
