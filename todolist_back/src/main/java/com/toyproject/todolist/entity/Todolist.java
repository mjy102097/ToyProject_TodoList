package com.toyproject.todolist.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Todolist {
    private int todolistId;
    private String todolistTxt;
    private String todolistDate;
}
