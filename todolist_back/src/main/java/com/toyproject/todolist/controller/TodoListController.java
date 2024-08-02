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

    @PostMapping("/todo")
    public ResponseEntity<?> createTodo(@RequestBody ReqTodoDto reqDto){    // 추가
        System.out.println(reqDto);
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todolistService.registerTodoList(reqDto));
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> todoListApi(ReqTodoDto reqDto){    // 전체 리스트 조회
        return ResponseEntity.ok().body(todolistService.getTodoListAll(reqDto));
    }


    @DeleteMapping("/tododelete/{todoId}")
    public ResponseEntity<?> todoDelete(@PathVariable int todoId) {     // 삭제
        System.out.println(todoId);
        return ResponseEntity.ok().body(todolistService.deleteTodo(todoId));
    }
    @PutMapping("/todocomplete/{todoId}")
    public ResponseEntity<?> todoEdit(@PathVariable int todoId, @RequestBody ReqUpdateDto dto) {
        log.info("{}", dto);
        return ResponseEntity.ok().body(todolistService.countGetcomplete(dto));
    }

    @PutMapping("/todoedit/{todoId}")
    public ResponseEntity<?> todoEdit2(@PathVariable int todoId, @RequestBody ReqUpdateDto Dto) {
        System.out.println("kkk: "+ Dto);
        return ResponseEntity.ok().body(todolistService.todoEdit(Dto));
    }

    @PutMapping("/gettodo/{todoId}")
    public ResponseEntity<?> todoIdPut(@PathVariable int todoId){   // 수정
        System.out.println(todoId);
        System.out.println(todolistService.getTodo(todoId));
        return ResponseEntity.ok().body(todolistService.getTodo(todoId));
    }

}
