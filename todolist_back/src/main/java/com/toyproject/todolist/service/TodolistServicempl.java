package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.RespTodoDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoListMapper;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodolistServicempl{

    @Autowired
    private TodoListMapper todoListMapper;

    public int registerTodoList(ReqTodoDto dto){
        Todo todo = Todo.builder()
                .todoTxt(dto.getTodoTxt())
                .todoDate(dto.getTodoDate())
                .build();

        return todoListMapper.save(todo);
    }


    public List<RespTodoDto.Info> getTodoListAll(ReqTodoDto reqDto) {
        Todo todo = Todo.builder()
                .todoTxt(reqDto.getTodoTxt())
                .todoDate(reqDto.getTodoDate())
                .build();

        List<Todo> todos = todoListMapper.findTodoList(todo);

        return todos.stream().map(list -> RespTodoDto.Info.builder()
                .todolistId(list.getTodolistId())
                .todoTxt(list.getTodoTxt())
                .todoDate(list.getTodoDate())
                .build()).collect(Collectors.toList());


    }

}
