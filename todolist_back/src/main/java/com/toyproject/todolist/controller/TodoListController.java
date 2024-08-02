package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.ReqUpdateDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.service.TodolistService;
import com.toyproject.todolist.service.TodolistServicempl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoListController {

    @Autowired
    private TodolistServicempl todolistService;

    @PostMapping("todo")
    public ResponseEntity<?> createTodo(@RequestBody ReqTodoDto reqDto){
        System.out.println(reqDto);
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todolistService.registerTodoList(reqDto));
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> todoListApi(ReqTodoDto reqDto){
        return ResponseEntity.ok().body(todolistService.getTodoListAll(reqDto));
    }
}
