package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUpdateDto;
import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.RespTodoDto;

import java.util.List;

public interface TodolistService  {
//    List<RespTodoDto.Info> getTodoListAll(ReqTodoDto reqTodoDto);
    int registerTodoList(ReqTodoDto dto);
//    int deleteTodo(int todolistId);
//    int modifyTodo(ReqUpdateDto dto);
//    int completeTodo(ReqUpdateDto dto);
}
