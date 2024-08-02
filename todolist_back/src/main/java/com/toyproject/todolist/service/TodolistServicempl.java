package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUpdateDto;
import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.RespGetTodoDto;
import com.toyproject.todolist.dto.RespTodoDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoListMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class TodolistServicempl implements TodolistService{

        @Autowired
        private TodoListMapper todoListMapper;
//
    public int registerTodoList(ReqTodoDto dto){
        Todo todo = Todo.builder()
                .content(dto.getContent())
                .date(dto.getDate())
                .build();
        System.out.println(todo);
        return todoListMapper.save(todo);
    }
//
//
    public List<RespTodoDto.Info> getTodoListAll(ReqTodoDto reqDto) {
        Todo todo = Todo.builder()
                .content(reqDto.getContent())
                .date(reqDto.getDate())
                .build();

        List<Todo> todos = todoListMapper.findTodoList(todo);

        return todos.stream().map(list -> RespTodoDto.Info.builder()
                .todoId(list.getTodoId())
                .content(list.getContent())
                .date(list.getDate())
                .complete(list.getComplete())
                .build()).collect(Collectors.toList());
    }

    public int countGetcomplete (ReqUpdateDto dto){
        Todo todo = Todo.builder()
                .todoId(dto.getTodoId())
                .complete(dto.getComplete())
                .build();
        return todoListMapper.Modifycomplete(todo);
    }

    public int deleteTodo(int todoId) {

        return todoListMapper.delete(todoId);
    }

    public int todoEdit(ReqUpdateDto dto) {
        Todo todo = Todo.builder()
                .todoId(dto.getTodoId())
                .content(dto.getContent())
                .date(dto.getDate())
                .complete(dto.getComplete())
                .build();
        return todoListMapper.edit(todo);
    }

    public RespGetTodoDto getTodo(int todoId){
        Todo todo = todoListMapper.findTodoById(todoId);
        System.out.println(todo);
        return RespGetTodoDto.builder()
                .todoId(todo.getTodoId())
                .content(todo.getContent())
                .date(todo.getDate())
                .complete(todo.getComplete())
                .build();
    }
}
