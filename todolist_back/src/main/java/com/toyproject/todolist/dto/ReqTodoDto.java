package com.toyproject.todolist.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ReqTodoDto {
    private String content;
    private String date;
}
