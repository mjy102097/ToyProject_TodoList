package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoListMapper {
    int save(Todo todo);
    List<Todo> findTodoList(Todo todo);
    int Modifycomplete(Todo todo);
    int delete(int todoId);
    int edit(Todo todo);
    Todo findTodoById(int id);
}
