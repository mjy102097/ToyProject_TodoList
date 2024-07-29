package com.toyproject.todolist.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@Slf4j
@RestController
public class TodoListController {

    @GetMapping("/api/v1/todolist")
    public ResponseEntity<?> Testpost(@RequestBody TodolistDto todolistDto){
        log.info("user post요청 : {}" , todolistDto);
        return ResponseEntity.ok().body("user응답");
    }

}
