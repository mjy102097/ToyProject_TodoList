package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.dto.RespUserDto;
import com.toyproject.todolist.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody ReqUserDto reqUserDto) {
        log.info("{}", reqUserDto);
        return ResponseEntity.ok().body(userService.registerUser(reqUserDto));
    }

//    @PostMapping
//    로그인 만들어야함
    @PostMapping
    public ResponseEntity<?> login(@RequestBody ReqUserDto reqUserDto, HttpServletRequest request) {
        RespUserDto respDto = userService.loginUser(reqUserDto);
        HttpSession session = request.getSession();
        session.setAttribute("user", respDto);
        log.info("{}", reqUserDto);
        return ResponseEntity.ok().body(respDto);
    }

    @GetMapping
    public ResponseEntity<?> getAuth(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Object user = session.getAttribute("user");
        if(user == null) {
            return ResponseEntity.badRequest().body(0);
        } else {
            return ResponseEntity.ok().body(user);
        }
    }
}
