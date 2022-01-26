package com.app.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;

public interface IUserDao extends JpaRepository<User, Integer>{

	User findByEmail(String email);
	Optional<User> findByEmailAndPassword(String email, String password);
	
	
	User findByEmailAndMobileNo(String email, String mobileNo);
	
	
}
