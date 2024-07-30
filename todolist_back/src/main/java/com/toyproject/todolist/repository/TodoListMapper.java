package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoListMapper {
    int save(Todo todo);
}
