package com.toyproject.todolist.repository;

import com.toyproject.todolist.dto.RespUserDto;
import com.toyproject.todolist.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    int save(User user);
    Integer check(User user);
    User login(User user);
    int delete(User user);
    int change(User user);
}
