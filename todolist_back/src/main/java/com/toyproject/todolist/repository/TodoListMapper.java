package com.toyproject.todolist.repository;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoListMapper {
    int save(Todolist todoList);
}
