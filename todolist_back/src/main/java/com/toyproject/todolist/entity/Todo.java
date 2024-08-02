package com.toyproject.todolist.entity;

import com.toyproject.todolist.dto.ReqTodoDto;
import com.toyproject.todolist.dto.RespTodoDto;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class Todo {
    private int todoId;
    private String content;
    private String date;
    private int status;

    public RespTodoDto.Info todoDto() {
        return RespTodoDto.Info.builder()
                .todoId(todoId)
                .content(content)
                .date(date)
                .status(status)
                .build();
    }

}
