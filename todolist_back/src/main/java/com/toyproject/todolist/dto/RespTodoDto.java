package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class RespTodoDto {

    @Builder
    @Data
    public static class Info {
        private int todoId;
        private String content;
        private String date;
        private int status;
    }

    public static List<Info> toList(List<Todo> todoList) {
        return todoList.stream().map(Todo::todoDto).collect(Collectors.toList());
    }
}
