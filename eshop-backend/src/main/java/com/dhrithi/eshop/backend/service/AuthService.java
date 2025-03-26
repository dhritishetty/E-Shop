package com.dhrithi.eshop.backend.service;

import com.dhrithi.eshop.backend.entity.Role;
import com.dhrithi.eshop.backend.payload.LoginDto;
import com.dhrithi.eshop.backend.payload.RegisterDto;

import java.util.List;

public interface AuthService {
    String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    String createRole(Role role);
    String deleteRole(String name);
    List<Role> getAllRoles();
    String getRoleByName(String name);

}
