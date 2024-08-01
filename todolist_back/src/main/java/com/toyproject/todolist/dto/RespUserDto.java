package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespUserDto {
    private int userId;
    private String username;
    private String password;
}
