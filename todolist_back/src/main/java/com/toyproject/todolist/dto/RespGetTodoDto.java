package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespGetTodoDto {
    private int todoId;
    private String content;
    private String date;
    private int complete;
}
