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
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    // 아이디 중복 확인
    @GetMapping("/checkuser")
    public ResponseEntity<?> checkUser(ReqUserDto reqUserDto) {
        log.info("{}", reqUserDto);
        return ResponseEntity.ok().body(userService.checkUser(reqUserDto));
    }

    // 회원가입
    @PostMapping("/newuser")
    public ResponseEntity<?> registerUser(@RequestBody ReqUserDto reqUserDto) {
        log.info("{}", reqUserDto);
        return ResponseEntity.ok().body(userService.registerUser(reqUserDto));
    }

    // 로그인
    @PostMapping("/userlogin")
    public ResponseEntity<?> login(@RequestBody ReqUserDto reqUserDto, HttpServletRequest request) {
        RespUserDto respDto = userService.loginUser(reqUserDto);
        HttpSession session = request.getSession();
        session.setAttribute("user", respDto);
        log.info("{}", reqUserDto);
        return ResponseEntity.ok().body(respDto);
    }

    public ResponseEntity<?> getAuth(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Object user = session.getAttribute("user");
        if(user == null) {
            return ResponseEntity.badRequest().body(0);
        } else {
            return ResponseEntity.ok().body(user);
        }
    }

    // 회원탈퇴
    @DeleteMapping
    public ResponseEntity<?> deleteUser(@RequestBody ReqUserDto reqUserDto) {
        log.info("{}", reqUserDto);
        return ResponseEntity.ok().body(userService.deleteUser(reqUserDto));
    }

    // 회원 비밀번호 수정
    @PutMapping
    public ResponseEntity changePassword(@RequestBody ReqUserDto reqUserDto) {
        return ResponseEntity.ok().body(userService.changePassword(reqUserDto));
    }
    
}
