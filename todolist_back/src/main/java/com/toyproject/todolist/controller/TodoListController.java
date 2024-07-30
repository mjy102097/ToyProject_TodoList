package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.ReqUpdateDto;
import com.toyproject.todolist.entity.Todo;
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

    @PostMapping("/todo")
    public ResponseEntity<?> createTodo(@RequestBody ReqTodoDto reqDto){
        log.info("Todo 성공 : {}" , reqDto);
        return ResponseEntity.ok().body(todolistService.registerTodoList(reqDto));
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> todoListApi(ReqTodoDto reqDto){
        return ResponseEntity.ok().body(todolistService.getTodoListAll(reqDto));
    }

    @DeleteMapping("/todolist/{todolistId}")
    public ResponseEntity<?> todoDeleteTodo(@PathVariable int todolistId ) {
        return ResponseEntity.ok().body(todolistService.deleteTodo(todolistId));
    }

    @PutMapping("/todolist/{todolistId}")
    public  ResponseEntity<?> todoModify(@PathVariable int todolistId , @RequestBody ReqUpdateDto reqDto){
        return ResponseEntity.ok().body(todolistService.modifyTodo(reqDto));
    }

    @PostMapping("/")
    public ResponseEntity<?> todoComplete(@PathVariable int todolistId, @RequestBody ReqUpdateDto reqDto){
        return ResponseEntity.ok().body(todolistService.completeTodo(reqDto));
    }
}
