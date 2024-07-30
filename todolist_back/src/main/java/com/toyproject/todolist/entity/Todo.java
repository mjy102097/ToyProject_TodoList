package com.toyproject.todolist.entity;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.RespTodoDto;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class Todo {
    private int todolistId;
    private String todoTxt;
    private LocalDate todoDate;

    public RespTodoDto.Info todoDto() {
        return RespTodoDto.Info.builder()
                .todolistId(todolistId)
                .todoTxt(todoTxt)
                .todoDate(todoDate)
                .build();
    }


}
