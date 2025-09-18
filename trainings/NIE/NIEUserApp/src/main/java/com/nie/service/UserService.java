package com.nie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nie.model.User;
import com.nie.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository repository;

	public List<User> getAllUsers() {
		return repository.findAll();
	}

	public User addUser(User user) {
		
		return repository.save(user);
	}
	
	

}
