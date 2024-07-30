package com.toyproject.todolist.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Todo {
    private int todolistId;
    private String todoTxt;
    private String todoDate;
}
