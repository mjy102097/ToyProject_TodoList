package com.toyproject.todolist.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ReqUpdateDto {
    private int todolistId;
    private String todoTxt;
    private LocalDate todoDate;
    private int todocomplete;
}
