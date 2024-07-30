package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUserDto;

public interface  UserService {
    int registerUser(ReqUserDto dto);
}
