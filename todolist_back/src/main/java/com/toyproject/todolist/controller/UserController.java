package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody ReqUserDto reqUserDto) {
        log.info("{}", reqUserDto);
        return ResponseEntity.ok().body(userService.registerUser(reqUserDto));
    }
}
