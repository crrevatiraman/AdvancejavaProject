package com.app.services;

import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.IUserDao;
import com.app.dtos.Credential;
import com.app.dtos.DtoEntityConverter;
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
}
