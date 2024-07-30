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
        private int todolistId;
        private String todoTxt;
        private LocalDate todoDate;
        private int todoComplete;
    }

    public static List<Info> toList(List<Todo> todoList) {
        return todoList.stream().map(Todo::todoDto).collect(Collectors.toList());
    }
}
