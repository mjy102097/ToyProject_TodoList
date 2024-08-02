package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoListMapper {
    int save(Todo todo);
    List<Todo> findTodoList(Todo todo);
    int Modifycomplete(int id);
//    int delete(int id);
//    int Modify(Todo todo);
//    int Complete(Todo todo);
//    int NotComplete(Todo todo);
}
