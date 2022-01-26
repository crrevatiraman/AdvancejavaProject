package com.app.services;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.IUserDao;
import com.app.dtos.Credential;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.UserAddressDTO;
import com.app.dtos.UserDTO;
import com.app.entities.User;

@Transactional
@Service
public class UserServiceImpl {

	@Autowired
	private IUserDao userDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private DtoEntityConverter converter;

	public Optional<User> signIn(User user) {
		return userDao.findByEmailAndPassword(user.getEmail(),user.getPassword());
	}
	
	
	public UserDTO findUserByEmailAndPassword(Credential cred) {
		User dbUser = userDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbUser != null && passwordEncoder.matches(rawPassword, dbUser.getPassword())) {
			UserDTO result = converter.toUserDto(dbUser);
			result.setPassword("********");
			return result;
		}
		return null;
	}


	
	public UserDTO saveUserDetails(UserDTO userDto) {
		String rawPassword = userDto.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		userDto.setPassword(encPassword);
		User user = converter.toUserEntity(userDto);
		user = userDao.save(user);
		userDto = converter.toUserDto(user);
		userDto.setPassword("*******");
		return userDto;
	}
	
	public User resetPassword(Credential cred)
	{
		User resetUser = userDao.findByEmailAndMobileNo(cred.getEmail(),cred.getMobileNo());
		if(resetUser != null)
		{
			String rawPassword = cred.getPassword();
			String encPassword = passwordEncoder.encode(rawPassword);
			cred.setPassword(encPassword);
			User user = converter.toUserEntity(cred);
			resetUser.setPassword(encPassword);
			user = userDao.save(resetUser);
			return user;
		}
		return null;
		
	}
	
	
	public UserDTO findUserByEmail(String email)
	{
		
		User user = userDao.findByEmail(email);
		if(user !=null)
		{
			UserDTO userDto = converter.toUserDto(user);
			userDto.setPassword("******************");
			return userDto;
		}
			return null;
	
	}
	
	public Map<String, Object> updateEmployeeDetails(int userId,UserAddressDTO userAddressDto)
	{
			
		User user = userDao.getById(userId);
		if(user != null && user.getAddress() == null)
		{
			userAddressDto.setUserId(userId);
			//User userData = converter.toUserEntity(userAddressDto);
			user.setAddress(userAddressDto.getAddress());
			user.setRole(userAddressDto.getRole());
			user.setDateOfBirth(userAddressDto.getDateOfBirth());
			user.setGender(userAddressDto.getGender());
			
			user.getAddress().setUser(user);
			
			
			user = userDao.save(user);
			return Collections.singletonMap("changedRows", 1);
		}
		
			return Collections.singletonMap("changedRows", 0);
		
		
	}
	
}
