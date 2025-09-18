package com.nie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nie.model.User;
import com.nie.service.UserService;

import jakarta.validation.Valid;

@RestController
public class UserController {
	
	@Autowired
	UserService service;
	
	@GetMapping("/user")
	public List<User> getAllUser(){
		return service.getAllUsers();
		
	}
	
	@PostMapping("/user")
	public User addUser(@Valid @RequestBody User user) {
		return service.addUser(user);
		
	}

}
