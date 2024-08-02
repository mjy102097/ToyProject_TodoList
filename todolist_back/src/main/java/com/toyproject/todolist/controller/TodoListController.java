package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.ReqUpdateDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.service.TodolistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
//@RequestMapping("/api/v1")
public class TodoListController {

    @Autowired
    private TodolistService todolistService;
    @PostMapping("/api/v1/todo")
    public ResponseEntity<?> createTodo(@RequestBody ReqTodoDto reqDto){
        System.out.println(reqDto);
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todolistService.registerTodoList(reqDto));
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> todoListApi(ReqTodoDto reqDto){
        return ResponseEntity.ok().body(todolistService.getTodoListAll(reqDto));
    }


    @DeleteMapping("/todo/{todolistId}")
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
