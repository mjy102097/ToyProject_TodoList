package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class RespTodolistDto {
    private int todolistId;
    private int userId;
    private String todolistTxt;
    private String todolistDate;
}
