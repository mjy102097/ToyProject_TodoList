package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class RespUserDto {
    private int userId;
    private String username;
    private String password;
}
