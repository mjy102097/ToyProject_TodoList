package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.dto.RespUserDto;
import com.toyproject.todolist.entity.User;


public interface  UserService {
    int registerUser(ReqUserDto dto);
    int checkUser(ReqUserDto dto);
    RespUserDto loginUser(ReqUserDto dto);
    int deleteUser(ReqUserDto dto);
    int changePassword (ReqUserDto dto);
}
