package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.service.TodolistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Slf4j
@RestController
public class TodoListController {

    @Autowired
    private TodolistService todolistService;

    @PostMapping("/todolist")
    public ResponseEntity<?> createTodo(@RequestBody ReqTodoDto reqTodolistDto){
        log.info("Todo 성공 : {}" , reqTodolistDto);
        return ResponseEntity.ok().body(todolistService.registerTodoList(reqTodolistDto));
    }

    @GetMapping("/api/v1/todolist")
    public ResponseEntity<?> todoListApi(ReqTodoDto reqDto){
        return ResponseEntity.ok().body(todolistService.getTodoList(reqDto));
    }
}
