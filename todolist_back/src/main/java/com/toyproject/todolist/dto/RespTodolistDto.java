package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class RespTodolistDto {
    private int todolistId;
    private String todolistTxt;
    private String todolistDate;
}
