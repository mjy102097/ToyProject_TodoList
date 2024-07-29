package com.toyproject.todolist.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class User {
    private int userId;
    private String userName;
    private String userEmail;
    private String userPassword;
}
