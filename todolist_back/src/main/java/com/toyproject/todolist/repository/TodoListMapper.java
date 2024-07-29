package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todolist;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoListMapper {
    int save(Todolist todoList);
}
