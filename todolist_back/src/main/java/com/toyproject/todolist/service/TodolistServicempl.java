package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUpdateDto;
import com.toyproject.todolist.dto.ReqTodoDto;
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

    public int registerTodoList(ReqTodoDto dto){
        Todo todo = Todo.builder()
                .todoTxt(dto.getTodoTxt())
                .todoDate(dto.getTodoDate())
                .build();
        System.out.println(todo);
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

    public int modifyTodo(ReqUpdateDto reqMdDto) {
        Todo todo = Todo.builder()
                .todolistId(reqMdDto.getTodolistId())
                .todoTxt(reqMdDto.getTodoTxt())
                .todoDate(reqMdDto.getTodoDate())
                .build(); // 엔터티

        return todoListMapper.Modify(todo);
    }

    public int deleteTodo(int todolistId) {
        return todoListMapper.delete(todolistId);
    }

    public int completeTodo(ReqUpdateDto reqCoDto){
        Todo todo = Todo.builder()
                .todolistId(reqCoDto.getTodolistId())
                .todoTxt(reqCoDto.getTodoTxt())
                .todoDate(reqCoDto.getTodoDate())
                .build();


        return 0;
    }

}
