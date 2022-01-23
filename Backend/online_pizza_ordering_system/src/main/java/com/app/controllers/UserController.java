package com.app.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.Credential;
import com.app.dtos.Response;
import com.app.dtos.UserDTO;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	//@Autowired
	private UserServiceImpl userService;
	
	
	
	public UserController(UserServiceImpl userService) {
		super();
		this.userService = userService;
	}



	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@RequestBody Credential cred) {
		UserDTO userDto = userService.findUserByEmailAndPassword(cred);
		if(userDto == null)
			return Response.error("user not found");
		return Response.success(userDto);
	}
	

	 
	 @PostMapping("/user/register")
		public ResponseEntity<?> registerUser(@RequestBody UserDTO userDto)
		{
		 	System.out.println(userDto);
		 	UserDTO result = userService.saveUserDetails(userDto);
		 	return Response.success(result);
		}
	
}
