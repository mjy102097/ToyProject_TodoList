package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.dto.RespUserDto;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public int registerUser(ReqUserDto dto) {
        User user = User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .build();

        return userMapper.save(user);
    }

    @Override
    public RespUserDto loginUser(ReqUserDto dto) {

        User user = User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .build();
        System.out.println(user);
        User newUser = userMapper.login(user);
        //System.out.println(newUser);
        return RespUserDto.builder()
                .username(newUser.getUsername())
                .password(newUser.getPassword())
                .build();
    }
}
