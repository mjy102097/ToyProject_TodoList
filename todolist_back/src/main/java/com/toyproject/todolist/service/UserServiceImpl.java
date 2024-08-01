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

    // 회원가입
    @Override
    public int registerUser(ReqUserDto dto) {
        User user = User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .build();


        return userMapper.save(user);
    }

    // 아이디 중복 체크
    @Override
    public int checkUser(ReqUserDto reqUserDto) {
        User user = User.builder()
                .username(reqUserDto.getUsername())
                .password(reqUserDto.getPassword())
                .build();

        Integer count = userMapper.check(user);
        return (count == null) ? 0 : count;
    }

    // 로그인 확인
    @Override
    public RespUserDto loginUser(ReqUserDto dto) {

        User user = User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .build();

        User newUser = userMapper.login(user);

        return RespUserDto.builder()
                .username(newUser.getUsername())
                .password(newUser.getPassword())
                .build();
    }

    // 회원탈퇴
    public int deleteUser(ReqUserDto dto) {
        User user = User.builder()
                .username(dto.getUsername())
                .build();
        return userMapper.delete(user);
    }

    @Override
    public int changePassword(ReqUserDto dto) {
        User user = User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .build();
        return userMapper.change(user);
    }
}
