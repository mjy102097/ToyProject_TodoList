package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class RespTodoDto {
    private int todolistId;
    private String todoTxt;
    private String todoDate;
}
