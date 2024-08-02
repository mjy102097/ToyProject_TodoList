package com.toyproject.todolist.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ReqUpdateDto {
    private int todoId;
    private String content;
    private String date;
    private int status;

}
