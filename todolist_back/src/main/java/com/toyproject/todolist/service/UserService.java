package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.dto.RespUserDto;
import com.toyproject.todolist.entity.User;

import java.util.List;

public interface  UserService {
    int registerUser(ReqUserDto dto);
    int checkUser(ReqUserDto reqUserDto);
    RespUserDto loginUser(ReqUserDto dto);
}
